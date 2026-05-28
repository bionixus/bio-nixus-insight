/**
 * Photorealistic editorial cover prompts for Q2 2026 posts.
 * Style matches legacy BioNixus blog covers: cinematic healthcare photography, shallow DOF, no text.
 */

import { Q2_2026_TOPICS } from './q2-2026-pharma-insights-topics.mjs';

const STYLE =
  'Ultra-realistic editorial photograph, cinematic lighting, shallow depth of field, premium healthcare business magazine cover, 8k, no text, no logos, no watermark';

/** @type {Record<string, string>} slug → scene prompt */
export const Q2_COVER_PROMPTS = {
  'obesity-pbm-coverage-lilly-portfolio-q2-2026': `${STYLE}. Close-up of diverse patient and clinician reviewing digital formulary benefits on tablet in modern US clinic, warm natural light, subtle scales and wellness chart on screen blur.`,
  'decnupaz-pivekimab-bpdcn-fda-approval-2026': `${STYLE}. Oncology infusion suite, hematologist examining rare blood smear slide under microscope, cool blue hospital lighting, compassionate professional atmosphere.`,
  'camizestrant-pdufa-extension-astrazeneca-2026': `${STYLE}. Breast cancer research coordinator marking calendar timeline on glass wall in pharma office, sunset light, ER+ oncology dossier folders on desk.`,
  'eli-lilly-vaccine-acquisitions-curevo-limmatech-2026': `${STYLE}. Vaccine manufacturing cleanroom viewed through glass, scientist in PPE holding vial tray, cool sterile lighting with warm corridor reflection.`,
  'datroway-datopotamab-tnbc-fda-approval-2026': `${STYLE}. Oncology pharmacist preparing IV ADC infusion in hospital oncology ward, purple accent scrubs, triple-negative breast cancer awareness ribbon soft blur in background.`,
  'hepcludex-bulevirtide-hdv-fda-approval-2026': `${STYLE}. Hepatology clinic, physician reviewing liver ultrasound on monitor beside patient, Mediterranean hospital interior, hopeful clinical mood.`,
  'jascayd-nerandomilast-ema-chmp-ipf-2026': `${STYLE}. Pulmonology department, elderly patient using spirometer with nurse, lung imaging scans on lightbox, soft diffused daylight.`,
  'vijoice-alpelisib-pros-ema-chmp-2026': `${STYLE}. Pediatric genetics consultation room, clinician measuring child growth chart, gentle family-focused rare disease care setting.`,
  'baxfendy-baxdrostat-hypertension-fda-2026': `${STYLE}. Cardiology office, blood pressure monitor and prescription pad on desk, senior physician counseling patient, warm wood and navy tones.`,
  'beqalzi-sonrotoclax-mcl-fda-2026': `${STYLE}. Hematology-oncology ward, flow cytometry printout and treatment chart on desk, oncologist in discussion with patient family in private room.`,
  'langlara-insulin-glargine-biosimilar-fda-2026': `${STYLE}. Hospital pharmacy shelf with insulin pens and biosimilar interchange documentation, pharmacist hands in focus, clinical white lighting.`,
  'cenrifki-tolebrutinib-nrspms-ema-chmp-2026': `${STYLE}. Neurology clinic MRI corridor, neurologist reviewing brain MRI for multiple sclerosis patient, wheelchair partially visible, calm blue tones.`,
  'itvisma-onasemnogene-sma-ema-chmp-2026': `${STYLE}. Gene therapy center at children's hospital, nurse preparing infusion with family nearby, hopeful emotional healthcare photography.`,
  'redemplo-plozasiran-fcs-ema-chmp-2026': `${STYLE}. Lipid clinic dietitian and physician reviewing triglyceride lab results with patient, metabolic rare disease counseling scene.`,
  'idvynso-doravirine-islatravir-hiv-fda-2026': `${STYLE}. Infectious disease clinic, HIV care coordinator handing single daily pill bottle to patient, inclusive modern clinic design, respectful privacy.`,
  'tecartus-brexucabtagene-mcl-full-approval-2026': `${STYLE}. CAR-T cell therapy suite, cellular immunotherapy bags in controlled environment, oncologist monitoring vitals, high-tech cancer center.`,
  'vasa-lilly-tunelab-camkii-cardiovascular-ai-2026': `${STYLE}. Cardiovascular AI research lab, scientist viewing heart simulation on curved monitors, machine learning dashboards glow, futuristic but realistic.`,
  'roche-pathai-acquisition-digital-pathology-2026': `${STYLE}. Digital pathology laboratory, pathologist reviewing AI-assisted tissue slide on large display, microscope beside dual monitors, precision oncology mood.`,
  'zepbound-kwikpen-goodrx-self-pay-2026': `${STYLE}. Home kitchen table, patient holding GLP-1 autoinjector pen with telehealth tablet showing pharmacy savings, lifestyle obesity care realism.`,
  'foundayo-orforglipron-fda-approval-2026': `${STYLE}. Morning kitchen scene, oral GLP-1 medication bottle beside healthy breakfast and fitness tracker, soft sunrise through window, weight management lifestyle.`,
  'kresladi-marnetegragene-lad1-fda-2026': `${STYLE}. Pediatric ICU rare disease moment, parents holding clinician hands, gene therapy hope narrative, warm hospital lighting.`,
  'awiqli-insulin-icodec-weekly-fda-2026': `${STYLE}. Diabetes education desk, weekly insulin pen next to calendar marked one injection per week, senior patient learning with nurse educator.`,
  'adstiladrin-nadofaragene-nmibc-ema-chmp-2026': `${STYLE}. Urology oncology suite, cystoscopy suite prep area, urologist reviewing bladder cancer treatment plan, clinical precision.`,
  'imdylltra-tarlatamab-sclc-ema-chmp-2026': `${STYLE}. Thoracic oncology team huddle reviewing lung cancer PET scan lightbox, small cell lung cancer treatment planning, intense but professional.`,
  'zepzelca-lurbinectedin-sclc-ema-chmp-2026': `${STYLE}. Oncology nurse adjusting chemotherapy pump in lung cancer unit, patient resting in recliner, compassionate care photography.`,
  'joenja-leniolisib-apds-ema-chmp-2026': `${STYLE}. Immunology clinic, young adult with immunologist reviewing immune panel labs, rare autoinflammatory disease care setting.`,
  'lifyorli-relacorilant-ovarian-cancer-fda-2026': `${STYLE}. Gynecologic oncology consultation, physician and patient reviewing ovarian cancer treatment options folder, supportive empathetic lighting.`,
  'lynarvo-linerixibat-pbc-fda-2026': `${STYLE}. Hepatology clinic, patient describing symptoms to hepatologist, liver function test papers on desk, cholestatic disease care.`,
  'icotyde-icotrokinra-psoriasis-fda-2026': `${STYLE}. Dermatology clinic, clinician examining plaque psoriasis on arm, oral therapy sample kit on counter, clean bright medical office.`,
  'flovent-hfa-fluticasone-generic-fda-2026': `${STYLE}. Community pharmacy counter, respiratory inhaler products on shelf, pharmacist counseling asthma patient, accessible primary care realism.`,
};

/**
 * @param {import('./q2-2026-pharma-insights-topics.mjs').Q2_2026_TOPICS[0]} topic
 */
export function getCoverPrompt(topic) {
  return (
    Q2_COVER_PROMPTS[topic.slug] ||
    `${STYLE}. Pharmaceutical market access meeting in modern Gulf office, Riyadh skyline at dusk through glass, executives reviewing dossier.`
  );
}

/** Stable numeric seed from slug for reproducible generation. */
export function seedFromSlug(slug) {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  return h % 999999;
}

export function getAllTopicsWithPrompts() {
  return Q2_2026_TOPICS.map((t) => ({
    ...t,
    prompt: getCoverPrompt(t),
    seed: seedFromSlug(t.slug),
  }));
}
