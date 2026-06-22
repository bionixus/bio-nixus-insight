#!/usr/bin/env bash
# PARA Memory Helper Library
# Source this file to access PARA memory management functions

set -euo pipefail

# Configuration
PARA_ROOT="${PARA_ROOT:-.}"  # Default to current directory

# Color output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Helper functions
para_log() {
    echo -e "${GREEN}[PARA]${NC} $*"
}

para_warn() {
    echo -e "${YELLOW}[PARA WARNING]${NC} $*" >&2
}

para_error() {
    echo -e "${RED}[PARA ERROR]${NC} $*" >&2
    return 1
}

# Validate PARA root exists
para_validate_root() {
    if [[ ! -d "${PARA_ROOT}/life" ]]; then
        para_error "PARA root not initialized. Run init-para-memory.sh first."
    fi
}

# Create a new entity
# Usage: para_create_entity <category> <name> [<description>]
# Categories: projects, areas/people, areas/companies, resources
para_create_entity() {
    local category="${1:?Category required (projects/areas/people/areas/companies/resources)}"
    local name="${2:?Entity name required}"
    local description="${3:-No description provided}"
    
    para_validate_root
    
    # Normalize name (lowercase, spaces to hyphens)
    local normalized_name
    normalized_name=$(echo "$name" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')
    
    local entity_dir="${PARA_ROOT}/life/${category}/${normalized_name}"
    
    if [[ -d "$entity_dir" ]]; then
        para_warn "Entity already exists: $entity_dir"
        return 0
    fi
    
    mkdir -p "$entity_dir"
    
    # Create summary.md
    cat > "${entity_dir}/summary.md" <<EOF
# ${name}

${description}

## Quick Context

<!-- Brief overview -->

## Status

**Created:** $(date -u +"%Y-%m-%d")
**Category:** ${category}
**State:** Active

## Key Facts

<!-- Summary of important facts from items.yaml -->

## Related Entities

<!-- Links to related projects/areas/resources -->

## Archive Notes

<!-- To be filled when archiving -->
EOF
    
    # Create items.yaml
    cat > "${entity_dir}/items.yaml" <<EOF
# Atomic facts for ${name}
# Schema: id, timestamp, content, source, tags, status, confidence, superseded_by

facts: []
EOF
    
    para_log "Created entity: ${category}/${normalized_name}"
    para_log "  Summary: ${entity_dir}/summary.md"
    para_log "  Facts: ${entity_dir}/items.yaml"
}

# Add a fact to an entity
# Usage: para_add_fact <category> <name> <content> [<source>] [<tags>]
para_add_fact() {
    local category="${1:?Category required}"
    local name="${2:?Entity name required}"
    local content="${3:?Fact content required}"
    local source="${4:-manual}"
    local tags="${5:-general}"
    
    para_validate_root
    
    local normalized_name
    normalized_name=$(echo "$name" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')
    
    local items_file="${PARA_ROOT}/life/${category}/${normalized_name}/items.yaml"
    
    if [[ ! -f "$items_file" ]]; then
        para_error "Entity not found: ${category}/${normalized_name}"
    fi
    
    # Generate fact ID
    local fact_id
    fact_id="fact-$(date +%s)-$RANDOM"
    
    # Append fact to items.yaml
    # Note: This is a simple append. For production, use yq or similar YAML tools
    cat >> "$items_file" <<EOF
  - id: ${fact_id}
    timestamp: $(date -u +"%Y-%m-%dT%H:%M:%SZ")
    content: "${content}"
    source: "${source}"
    tags: [${tags}]
    status: active
    confidence: high
EOF
    
    para_log "Added fact to ${category}/${normalized_name}"
    para_log "  ID: ${fact_id}"
}

# Archive an entity
# Usage: para_archive_entity <category> <name> [<reason>]
para_archive_entity() {
    local category="${1:?Category required}"
    local name="${2:?Entity name required}"
    local reason="${3:-No reason provided}"
    
    para_validate_root
    
    local normalized_name
    normalized_name=$(echo "$name" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')
    
    local entity_dir="${PARA_ROOT}/life/${category}/${normalized_name}"
    local archive_dir="${PARA_ROOT}/life/archives/${normalized_name}"
    
    if [[ ! -d "$entity_dir" ]]; then
        para_error "Entity not found: ${category}/${normalized_name}"
    fi
    
    if [[ -d "$archive_dir" ]]; then
        para_error "Archive already exists: archives/${normalized_name}"
    fi
    
    # Add archive note to summary
    cat >> "${entity_dir}/summary.md" <<EOF

---

**Archived:** $(date -u +"%Y-%m-%d")
**Reason:** ${reason}
**Original Category:** ${category}
EOF
    
    # Move to archives
    mv "$entity_dir" "$archive_dir"
    
    para_log "Archived entity: ${category}/${normalized_name} -> archives/${normalized_name}"
    para_log "  Reason: ${reason}"
}

# Create or append to daily note
# Usage: para_daily_note [<content>]
para_daily_note() {
    local content="${1:-}"
    
    para_validate_root
    
    local today
    today=$(date +"%Y-%m-%d")
    local note_file="${PARA_ROOT}/memory/${today}.md"
    
    # Create file if it doesn't exist
    if [[ ! -f "$note_file" ]]; then
        cat > "$note_file" <<EOF
# Daily Note — ${today}

## Timeline

EOF
        para_log "Created daily note: ${note_file}"
    fi
    
    # Append content if provided
    if [[ -n "$content" ]]; then
        local timestamp
        timestamp=$(date +"%H:%M")
        echo "### ${timestamp}" >> "$note_file"
        echo >> "$note_file"
        echo "$content" >> "$note_file"
        echo >> "$note_file"
        para_log "Added entry to daily note at ${timestamp}"
    else
        para_log "Daily note path: ${note_file}"
    fi
}

# Search memory using qmd (if available)
# Usage: para_recall <query>
para_recall() {
    local query="${1:?Query required}"
    
    para_validate_root
    
    if command -v qmd &> /dev/null; then
        para_log "Searching memory for: ${query}"
        qmd query "$query" "$PARA_ROOT"
    else
        para_warn "qmd not available. Falling back to grep..."
        grep -r "$query" "${PARA_ROOT}/life" "${PARA_ROOT}/memory" || true
    fi
}

# Update entity summary from items.yaml
# Usage: para_update_summary <category> <name>
para_update_summary() {
    local category="${1:?Category required}"
    local name="${2:?Entity name required}"
    
    para_validate_root
    
    local normalized_name
    normalized_name=$(echo "$name" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')
    
    local items_file="${PARA_ROOT}/life/${category}/${normalized_name}/items.yaml"
    local summary_file="${PARA_ROOT}/life/${category}/${normalized_name}/summary.md"
    
    if [[ ! -f "$items_file" ]]; then
        para_error "Entity not found: ${category}/${normalized_name}"
    fi
    
    para_warn "Auto-summary generation not yet implemented."
    para_log "Please manually update: ${summary_file}"
    para_log "From facts in: ${items_file}"
}

# List entities in a category
# Usage: para_list <category>
para_list() {
    local category="${1:?Category required}"
    
    para_validate_root
    
    local category_dir="${PARA_ROOT}/life/${category}"
    
    if [[ ! -d "$category_dir" ]]; then
        para_error "Category not found: ${category}"
    fi
    
    para_log "Entities in ${category}:"
    find "$category_dir" -mindepth 1 -maxdepth 1 -type d | while read -r entity_dir; do
        local entity_name
        entity_name=$(basename "$entity_dir")
        echo "  - ${entity_name}"
    done
}

# Show PARA statistics
para_stats() {
    para_validate_root
    
    para_log "PARA Memory Statistics:"
    echo
    echo "Projects:   $(find "${PARA_ROOT}/life/projects" -mindepth 1 -maxdepth 1 -type d 2>/dev/null | wc -l | tr -d ' ')"
    echo "People:     $(find "${PARA_ROOT}/life/areas/people" -mindepth 1 -maxdepth 1 -type d 2>/dev/null | wc -l | tr -d ' ')"
    echo "Companies:  $(find "${PARA_ROOT}/life/areas/companies" -mindepth 1 -maxdepth 1 -type d 2>/dev/null | wc -l | tr -d ' ')"
    echo "Resources:  $(find "${PARA_ROOT}/life/resources" -mindepth 1 -maxdepth 1 -type d 2>/dev/null | wc -l | tr -d ' ')"
    echo "Archives:   $(find "${PARA_ROOT}/life/archives" -mindepth 1 -maxdepth 1 -type d 2>/dev/null | wc -l | tr -d ' ')"
    echo "Daily notes: $(find "${PARA_ROOT}/memory" -name "*.md" -type f 2>/dev/null | wc -l | tr -d ' ')"
}

# Memory optimization functions

# Summarize daily log for token efficiency
# Usage: para_summarize_daily [date] [agent_name]
para_summarize_daily() {
    local date="${1:-$(date +%Y-%m-%d)}"
    local agent="${2:-}"
    
    local script_dir
    script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
    
    if [[ -n "$agent" ]]; then
        bash "${script_dir}/summarize-daily-log.sh" "$date" "$agent"
    else
        bash "${script_dir}/summarize-daily-log.sh" "$date"
    fi
}

# Load memory with tier selection for token optimization
# Usage: para_load_memory [tier]
# Tiers: quick (default), standard (quick + 3 days summaries), deep (quick + 7 days summaries)
para_load_memory() {
    local tier="${1:-quick}"
    local memory_root="${PARA_ROOT}/memory"
    
    case "$tier" in
        quick)
            # Tier 1: Just quick context (~1K tokens)
            if [[ -f "${memory_root}/quick-context.md" ]]; then
                cat "${memory_root}/quick-context.md"
            else
                para_warn "Quick context not found at ${memory_root}/quick-context.md"
            fi
            ;;
        standard)
            # Tier 1 + Tier 2: Quick context + last 3 days summaries (~2.5K tokens)
            para_load_memory quick
            echo -e "\n---\n"
            for i in {1..3}; do
                local date
                date=$(date -d "$i days ago" +%Y-%m-%d 2>/dev/null || date -v-${i}d +%Y-%m-%d)
                if [[ -f "${memory_root}/summaries/${date}.md" ]]; then
                    echo "## Summary: ${date}"
                    cat "${memory_root}/summaries/${date}.md"
                    echo ""
                fi
            done
            ;;
        deep)
            # Tier 1 + Tier 2 (7 days): Quick context + last 7 days summaries (~4.5K tokens)
            para_load_memory quick
            echo -e "\n---\n"
            for i in {1..7}; do
                local date
                date=$(date -d "$i days ago" +%Y-%m-%d 2>/dev/null || date -v-${i}d +%Y-%m-%d)
                if [[ -f "${memory_root}/summaries/${date}.md" ]]; then
                    echo "## Summary: ${date}"
                    cat "${memory_root}/summaries/${date}.md"
                    echo ""
                fi
            done
            ;;
        *)
            para_error "Unknown tier: $tier. Use 'quick', 'standard', or 'deep'"
            ;;
    esac
}

# Update quick context with current priorities
# Usage: para_update_quick_context
para_update_quick_context() {
    local memory_root="${PARA_ROOT}/memory"
    local quick_context="${memory_root}/quick-context.md"
    
    if [[ ! -f "$quick_context" ]]; then
        para_warn "Quick context not found. Creating from template..."
        mkdir -p "${memory_root}"
        cat > "$quick_context" << 'EOF'
# Quick Context — Last Updated: $(date +"%Y-%m-%d %H:%M")

## Active Now (Top 3)
1. {ISSUE-ID}: {Brief description}

## Critical Blockers
- {ISSUE-ID}: {Description} ({owner/action})

## Recent Decisions (Last 7 Days)
- {YYYY-MM-DD}: {Decision}

## Key Entities (Active)
- projects/{entity-name}/
EOF
    fi
    
    # Open in editor
    ${EDITOR:-vim} "$quick_context"
    
    # Update timestamp
    local timestamp
    timestamp=$(date +"%Y-%m-%d %H:%M")
    sed -i.bak "s/Last Updated: .*/Last Updated: ${timestamp}/" "$quick_context"
    rm -f "${quick_context}.bak"
    
    para_log "Quick context updated"
}

# Export functions if being sourced
if [[ "${BASH_SOURCE[0]}" != "${0}" ]]; then
    export -f para_create_entity
    export -f para_add_fact
    export -f para_archive_entity
    export -f para_daily_note
    export -f para_recall
    export -f para_update_summary
    export -f para_list
    export -f para_stats
    export -f para_summarize_daily
    export -f para_load_memory
    export -f para_update_quick_context
    para_log "PARA helper library loaded. PARA_ROOT=${PARA_ROOT}"
fi
