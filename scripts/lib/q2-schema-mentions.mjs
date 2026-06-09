/**
 * JSON-LD `mentions` entities for Q2 2026 pharma insight articles.
 * @param {import('../data/q2-2026-pharma-insights-topics.mjs').Q2_2026_TOPICS[0]} topic
 */
export function buildSchemaMentionsForTopic(topic) {
  const area = topic.therapeuticArea.split('/')[0].trim();
  /** @type {Record<string, unknown>[]} */
  const mentions = [
    {
      '@type': 'Organization',
      name: topic.sponsor,
    },
    {
      '@type': 'Drug',
      name: topic.brand,
      alternateName: topic.generic.split('/').map((s) => s.trim()).filter(Boolean),
    },
  ];

  if (/oncology|cancer|lymphoma|sclc|tnbc|ovarian|bladder|hematology/i.test(topic.therapeuticArea)) {
    mentions.push({
      '@type': 'MedicalSpecialty',
      name: 'Oncology',
    });
  }
  if (/obesity|metabolic|diabetes|insulin|glp/i.test(topic.therapeuticArea + topic.mechanism)) {
    mentions.push({
      '@type': 'MedicalSpecialty',
      name: 'Endocrinology',
    });
  }
  if (/rare|orphan|gene|sma|lad|apds|pros|fcs/i.test(topic.therapeuticArea + topic.indication)) {
    mentions.push({
      '@type': 'MedicalSpecialty',
      name: 'Rare diseases',
    });
  }

  const regulator = /ema|chmp/i.test(topic.actionType)
    ? { '@type': 'Organization', name: 'European Medicines Agency', alternateName: ['EMA'] }
    : /fda/i.test(topic.actionType)
      ? { '@type': 'Organization', name: 'U.S. Food and Drug Administration', alternateName: ['FDA'] }
      : null;

  if (regulator) mentions.push(regulator);

  mentions.push({
    '@type': 'Place',
    name: 'Gulf Cooperation Council',
    alternateName: ['GCC', 'MENA'],
  });

  return mentions;
}

/**
 * @param {import('../data/q2-2026-pharma-insights-topics.mjs').Q2_2026_TOPICS[0]} topic
 */
export function inferArticleSection(topic) {
  const t = topic.therapeuticArea.toLowerCase();
  if (t.includes('oncology')) return 'Oncology';
  if (t.includes('obesity') || t.includes('metabolic') || t.includes('diabetes')) return 'Clinical Development';
  if (t.includes('rare') || t.includes('gene')) return 'Regulatory & Policy';
  if (t.includes('cardiovascular')) return 'Market Access';
  if (t.includes('digital') || t.includes('ai')) return 'Digital Health';
  if (t.includes('infectious') || t.includes('vaccine') || t.includes('hiv') || t.includes('hdv')) {
    return 'Regulatory & Policy';
  }
  if (t.includes('immunology') || t.includes('dermatology')) return 'Industry Insights';
  if (t.includes('respiratory') || t.includes('biosimilar')) return 'Market Access';
  if (t.includes('neurology')) return 'Industry Insights';
  return 'Regulatory & Policy';
}
