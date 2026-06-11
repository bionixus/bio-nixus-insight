import fs from 'fs';

const path = 'src/data/healthcareReportData.ts';
let s = fs.readFileSync(path, 'utf8');
s = s.replace(/const STAT_[A-Z0-9_]+:[^\n]+\n/g, '');
s = s.replace(/row\(([^)]+),\s*STAT_[A-Z0-9_]+,\s*/g, 'row($1, ');
fs.writeFileSync(path, s);
console.log('stripped STAT constants from healthcareReportData.ts');
