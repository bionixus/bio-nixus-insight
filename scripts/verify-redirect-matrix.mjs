#!/usr/bin/env node
import http from 'http';
import https from 'https';

const cases = [
  'http://bionixus.com/',
  'http://bionixus.com/contact?utm_source=test&utm_medium=matrix',
  'https://bionixus.com/',
  'https://bionixus.com/healthcare-market-research-agency-gcc?ref=matrix',
  'http://www.bionixus.com/',
  'http://www.bionixus.com/bionixus-market-research-middle-east?x=1',
  'https://www.bionixus.com/',
  'https://www.bionixus.com/contact?utm_source=test',
];

function fetch(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('http://') ? http : https;
    const req = client.request(url, { method: 'GET', rejectUnauthorized: true }, (res) => {
      const location = res.headers.location || '';
      resolve({
        url,
        status: res.statusCode || 0,
        location: Array.isArray(location) ? location[0] : location,
      });
      res.resume();
    });
    req.on('error', reject);
    req.end();
  });
}

async function run() {
  const rows = [];
  for (const url of cases) {
    const result = await fetch(url);
    rows.push(result);
  }

  console.log('Redirect matrix check');
  let failed = 0;
  for (const row of rows) {
    const ok = row.status >= 200 && row.status < 400;
    if (!ok) failed += 1;
    console.log(`${ok ? 'PASS' : 'FAIL'} ${row.status} ${row.url}${row.location ? ` -> ${row.location}` : ''}`);
  }

  if (failed > 0) {
    process.exitCode = 1;
  }
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});

