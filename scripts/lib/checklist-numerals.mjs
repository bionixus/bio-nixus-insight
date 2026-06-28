/** zh → Chinese numerals; ar → Arabic-Indic digits + بيونكسس */

export const AR_BIONIXUS = 'بيونكسس';

const ZH_DIGITS = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
const AR_DIGITS = '٠١٢٣٤٥٦٧٨٩';

function intToChinese(n) {
  if (n === 0) return '零';
  if (n < 10) return ZH_DIGITS[n];
  if (n < 20) return n === 10 ? '十' : '十' + ZH_DIGITS[n % 10];
  if (n < 100) {
    const tens = Math.floor(n / 10);
    const ones = n % 10;
    return ZH_DIGITS[tens] + '十' + (ones ? ZH_DIGITS[ones] : '');
  }
  if (n < 1000) {
    const hundreds = Math.floor(n / 100);
    const rest = n % 100;
    let s = ZH_DIGITS[hundreds] + '百';
    if (rest === 0) return s;
    if (rest < 10) return s + '零' + ZH_DIGITS[rest];
    return s + intToChinese(rest);
  }
  if (n < 10000) {
    const thousands = Math.floor(n / 1000);
    const rest = n % 1000;
    let s = ZH_DIGITS[thousands] + '千';
    if (rest === 0) return s;
    if (rest < 100) return s + '零' + intToChinese(rest);
    return s + intToChinese(rest);
  }
  return String(n)
    .split('')
    .map((d) => ZH_DIGITS[Number(d)])
    .join('');
}

function yearToChinese(y) {
  return [...String(y)].map((c) => (c === '0' ? '〇' : ZH_DIGITS[Number(c)])).join('');
}

export function toChineseNumerals(text) {
  let out = text;

  out = out.replace(/~?\s*(\d+(?:\.\d+)?)\s*%/g, (match, n) => {
    const hasApprox = match.includes('~') || /约/.test(text);
    const prefix = hasApprox ? '约' : '';
    const num = parseFloat(n);
    if (Number.isInteger(num)) return `${prefix}百分之${intToChinese(num)}`;
    const [whole, frac] = n.split('.');
    const fracZh = [...frac].map((d) => ZH_DIGITS[Number(d)]).join('');
    return `${prefix}百分之${intToChinese(parseInt(whole, 10))}点${fracZh}`;
  });

  out = out.replace(/约约/g, '约');

  out = out.replace(/(\d+(?:\.\d+)?)\s*万亿/g, (_, n) => {
    const [whole, frac] = n.includes('.') ? n.split('.') : [n, ''];
    const wholeZh = intToChinese(parseInt(whole, 10));
    if (!frac) return `${wholeZh}万亿`;
    const fracZh = [...frac].map((d) => ZH_DIGITS[Number(d)]).join('');
    return `${wholeZh}点${fracZh}万亿`;
  });

  out = out.replace(/(\d+)\.(\d+)(?!\d)/g, (_, a, b) => {
    const fracZh = [...b].map((d) => ZH_DIGITS[Number(d)]).join('');
    return `${intToChinese(parseInt(a, 10))}点${fracZh}`;
  });

  out = out.replace(/\b(20\d{2})\s*[–—-]\s*(20\d{2})\b/g, (_, y1, y2) => `${yearToChinese(y1)}至${yearToChinese(y2)}`);

  out = out.replace(/\((20\d{2})E?\)/g, (_, y) => `（${yearToChinese(y)}年预测）`);
  out = out.replace(/\((20\d{2})\)/g, (_, y) => `（${yearToChinese(y)}）`);

  out = out.replace(/\b(20\d{2})E\b/g, (_, y) => `${yearToChinese(y)}年预测`);
  out = out.replace(/\b(20\d{2})年/g, (_, y) => `${yearToChinese(y)}年`);
  out = out.replace(/\b(20\d{2})\b/g, (_, y) => yearToChinese(y));

  out = out.replace(/\b(\d{1,4})\+\b/g, (_, n) => `${intToChinese(parseInt(n, 10))}+`);

  out = out.replace(/\b(\d{1,4})\b/g, (_, n) => intToChinese(parseInt(n, 10)));

  // Tidy spacing around Chinese numerals
  out = out.replace(/约\s+/g, '约');
  out = out.replace(/([零一二三四五六七八九十百千万〇]+)\s+([\u4e00-\u9fff])/g, '$1$2');
  out = out.replace(/([零一二三四五六七八九十百千万〇]+)\+\s+/g, '$1+');

  return out;
}

export function toArabicIndicDigits(text) {
  let out = text.replace(/BioNixus/gi, AR_BIONIXUS);
  out = out.replace(/\d/g, (d) => AR_DIGITS[Number(d)]);
  return out;
}
