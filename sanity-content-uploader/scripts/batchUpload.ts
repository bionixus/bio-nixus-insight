// scripts/batchUpload.ts
import { uploadBlogPost } from './uploadBlogPost'
import * as dotenv from 'dotenv'
import * as fs from 'fs'
import * as path from 'path'

dotenv.config()

const isDryRun = process.argv.includes('--dry-run') || process.argv.includes('-d')

const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
}

function log(message: string, color: keyof typeof colors = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`)
}

interface BatchStats {
  total: number
  successful: number
  failed: number
  skipped: number
  startTime: Date
  endTime?: Date
}

async function batchUpload() {
  const stats: BatchStats = {
    total: 0,
    successful: 0,
    failed: 0,
    skipped: 0,
    startTime: new Date(),
  }

  try {
    log('\n' + '═'.repeat(80), 'bright')
    if (isDryRun) {
      log('🔍 BATCH DRY RUN MODE - No Changes Will Be Made', 'yellow')
      log('═'.repeat(80), 'bright')
    }
    log('📦 Batch Blog Post Upload to Sanity', 'bright')
    log('═'.repeat(80) + '\n', 'bright')

    // Read all JSON files from posts directory
    const postsDir = path.join(__dirname, 'posts')

    if (!fs.existsSync(postsDir)) {
      log(`Creating posts directory: ${postsDir}`, 'yellow')
      fs.mkdirSync(postsDir, { recursive: true })
      log(`\n📁 Please add your blog post JSON files to: ${postsDir}`, 'cyan')
      log(`   Each file should contain a complete blog post object`, 'dim')
      process.exit(0)
    }

    const files = fs.readdirSync(postsDir).filter((f) => f.endsWith('.json'))

    if (files.length === 0) {
      log(`\n⚠ No JSON files found in ${postsDir}`, 'yellow')
      log(`\nAdd your blog post files (*.json) to this directory`, 'cyan')
      process.exit(0)
    }

    stats.total = files.length

    log(`Found ${files.length} blog post(s) to upload:\n`, 'cyan')
    files.forEach((file, index) => {
      log(`  ${index + 1}. ${file}`, 'dim')
    })
    log('')

    // Upload each post
    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      const filePath = path.join(postsDir, file)

      log('─'.repeat(80), 'dim')
      log(`\n📄 Processing ${i + 1}/${files.length}: ${file}`, 'bright')
      log('')

      try {
        // Load post data
        const postData = JSON.parse(fs.readFileSync(filePath, 'utf-8'))

        // Validate required fields
        if (!postData.title || !postData.slug?.current) {
          log(`  ⚠ Skipping ${file}: Missing title or slug`, 'yellow')
          stats.skipped++
          continue
        }

        // Upload post
        await uploadBlogPost(postData, { silent: false })

        stats.successful++
        log(`\n  ✓ ${file} uploaded successfully`, 'green')
      } catch (error) {
        stats.failed++
        log(`\n  ✗ ${file} failed: ${error}`, 'red')

        // Continue with next file
        continue
      }

      // Add delay between uploads to avoid rate limiting
      if (i < files.length - 1 && !isDryRun) {
        log(`\n  ⏳ Waiting 2 seconds before next upload...`, 'dim')
        await new Promise((resolve) => setTimeout(resolve, 2000))
      }
    }

    stats.endTime = new Date()
    const durationSeconds = Math.round(
      (stats.endTime.getTime() - stats.startTime.getTime()) / 1000
    )

    // Final summary
    log('\n' + '═'.repeat(80), 'bright')
    log('📊 Batch Upload Summary', 'bright')
    log('═'.repeat(80), 'bright')
    log(`\nTotal posts: ${stats.total}`, 'cyan')
    log(`✓ Successful: ${stats.successful}`, 'green')
    log(`✗ Failed: ${stats.failed}`, stats.failed > 0 ? 'red' : 'cyan')
    log(`⊘ Skipped: ${stats.skipped}`, stats.skipped > 0 ? 'yellow' : 'cyan')
    log(`⏱ Duration: ${durationSeconds} seconds`, 'cyan')
    log(
      `\nSuccess rate: ${stats.total > 0 ? Math.round((stats.successful / stats.total) * 100) : 0}%`,
      'bright'
    )

    if (isDryRun) {
      log(
        `\n💡 This was a dry run. Run without --dry-run to actually upload.`,
        'yellow'
      )
    }

    log('')
  } catch (error) {
    log('\n❌ Batch upload failed!', 'red')
    log(`Error: ${error}`, 'red')
    process.exit(1)
  }
}

batchUpload()
