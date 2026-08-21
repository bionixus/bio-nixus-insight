#!/usr/bin/env node
/**
 * Import a GSC Performance xlsx export into data/gsc/current-week/ CSVs.
 * Archives existing current-week/*.csv into previous-week/ before writing.
 *
 * Usage:
 *   node scripts/import-gsc-xlsx.mjs ~/Downloads/bionixus.com-Performance-on-Search-2026-08-19.xlsx
 */
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const xlsxPath = process.argv[2];

if (!xlsxPath) {
  console.error('Usage: node scripts/import-gsc-xlsx.mjs <path-to-gsc-xlsx>');
  process.exit(1);
}

const absXlsx = path.resolve(xlsxPath);
if (!fs.existsSync(absXlsx)) {
  console.error(`File not found: ${absXlsx}`);
  process.exit(1);
}

const py = `
import openpyxl, csv, shutil
from pathlib import Path

root = Path(${JSON.stringify(path.join(root, 'data', 'gsc'))})
current = root / 'current-week'
previous = root / 'previous-week'
xlsx = Path(${JSON.stringify(absXlsx)})

previous.mkdir(parents=True, exist_ok=True)
current.mkdir(parents=True, exist_ok=True)

for f in list(current.glob('*.csv')):
    dest = previous / f.name
    if dest.exists():
        dest.unlink()
    shutil.move(str(f), str(dest))
    print('archived', f.name)

wb = openpyxl.load_workbook(xlsx, read_only=True, data_only=True)

def fmt_ctr(v):
    if v is None or v == '':
        return ''
    if isinstance(v, str):
        return v if '%' in v else f'{float(v)*100:.2f}%'
    if isinstance(v, (int, float)) and v <= 1:
        return f'{v*100:.2f}%'
    return str(v)

def write_sheet(sheet_name, out_name):
    ws = wb[sheet_name]
    rows = list(ws.iter_rows(values_only=True))
    if not rows:
        return
    headers = rows[0]
    out = current / out_name
    with out.open('w', newline='', encoding='utf-8') as fh:
        w = csv.writer(fh)
        w.writerow(headers)
        for row in rows[1:]:
            if not any(cell is not None and str(cell).strip() != '' for cell in row):
                continue
            row = list(row)
            if len(row) >= 4 and headers[3] == 'CTR':
                row[3] = fmt_ctr(row[3])
            w.writerow(row)
    print('wrote', out_name, 'rows', len(rows)-1)

for sheet, fname in [
    ('Chart', 'Chart.csv'),
    ('Queries', 'Queries.csv'),
    ('Pages', 'Pages.csv'),
    ('Countries', 'Countries.csv'),
    ('Devices', 'Devices.csv'),
]:
    write_sheet(sheet, fname)
`;

const result = spawnSync('python3', ['-c', py], { encoding: 'utf8' });
if (result.stdout) process.stdout.write(result.stdout);
if (result.stderr) process.stderr.write(result.stderr);
if (result.status !== 0) process.exit(result.status ?? 1);

console.log('\nRun: node scripts/gsc-weekly-report.mjs');
