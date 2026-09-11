import type { PharmaCompaniesCountrySlug } from '@/components/seo/PharmaCompaniesGccHubLinks';

/**
 * Extra SSR-visible decision framing for pharmaceutical-companies BOFU pages
 * that sit just under the 2,000-word sitewide threshold on production.
 */
export const PHARMA_DECISION_GUIDES: Partial<Record<PharmaCompaniesCountrySlug, string>> = {
  iran:
    'Teams sizing Iran usually need three lenses in one programme: domestic manufacturer share in essential and hospital injectables, biosimilar substitution dynamics under IFDA price caps, and the realistic import corridor for the remaining five percent of volume. BioNixus maps distributor concentration (Darou Pakhsh, Hakim, TPICO), payer coverage through Social Security and Salamat, and where university–industry partnerships accelerate local R&D — so launch sequencing reflects procurement reality rather than nominal market size alone.',
  uk:
    'UK pharmaceutical company mapping is incomplete without separating MHRA-listed innovators, parallel-import wholesalers, and the hospital versus primary-care funding split. BioNixus connects company directories to NICE and SMC timing, ICS formulary behaviour, and the Voluntary Scheme for Branded Medicines Pricing (VPAG) pressure on net price — the variables that determine whether a listed product actually reaches protocol share in England, Scotland, and Wales.',
  canada:
    'Canadian pharma intelligence should segment Health Canada–approved innovators, generic leaders (Apotex, Teva Canada, Sandoz), and the provincial payer patchwork — CADTH, INESSS, and pan-Canadian Pharmaceutical Alliance negotiations that reset net price after listing. BioNixus aligns company directories with hospital (CADTH-aligned) versus retail (provincial formulary) pathways so access teams do not treat Canada as a single national market.',
  brazil:
    'Brazil rewards research that connects ANVISA registration classes with CONITEC HTA for SUS incorporation and ANS Rol coverage in supplementary insurance. BioNixus maps local champions (EMS, Hypera, Eurofarma) against MNC affiliates, retail pharmacy chains, and the public–private split that determines whether a molecule grows in hospital tenders or consumer-facing generics.',
  germany:
    'Germany’s company landscape only makes commercial sense alongside G-BA AMNOG assessments, regional sick-fund contracting (Rabattverträge), and the hospital versus statutory outpatient split. BioNixus ties manufacturer directories to early benefit assessment timelines and regional tender clusters so pricing and access teams see where syndicated lists under-specify local contracting power.',
  usa:
    'US pharmaceutical directories must be read with FDA approval status, CMS coverage (Part B versus Part D), PBM formulary tiers, and 340B exposure in the same frame. BioNixus helps teams move from “who manufactures” to “who captures margin” — mapping Big Pharma, biotech, specialty distributors, and the GPO/IDN committees that gate hospital uptake after approval.',
};
