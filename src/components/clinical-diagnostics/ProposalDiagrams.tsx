/** Illustrative SVGs from the clinical diagnostics proposal deck (anonymized). */

export function ReportVolumeMapDiagram() {
  return (
    <div className="cd-diagram-wrap" aria-hidden>
      <svg viewBox="0 0 560 318" xmlns="http://www.w3.org/2000/svg" className="cd-diagram-svg">
        <defs>
          <linearGradient id="cdVxMesh" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="50%" stopColor="#eef3fa" />
            <stop offset="100%" stopColor="#e2eaf5" />
          </linearGradient>
          <linearGradient id="cdVxSpine" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F0D78C" />
            <stop offset="35%" stopColor="#D4A84B" />
            <stop offset="70%" stopColor="#0069A3" />
            <stop offset="100%" stopColor="#001428" />
          </linearGradient>
          <linearGradient id="cdVxBand" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#002244" />
            <stop offset="100%" stopColor="#0069A3" />
          </linearGradient>
          <filter id="cdVxDrop" x="-25%" y="-25%" width="150%" height="150%">
            <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#002244" floodOpacity="0.09" />
          </filter>
        </defs>
        <rect x="0" y="0" width="560" height="318" fill="url(#cdVxMesh)" />
        <rect x="44" y="28" width="472" height="36" rx="6" fill="url(#cdVxBand)" opacity="0.94" />
        <text x="280" y="50" textAnchor="middle" fontSize="9.5" letterSpacing="4" fill="#ffffff" fillOpacity="0.92">
          PHASE 1 · MAIN REPORT · VOLUME MAP
        </text>
        <rect x="40" y="82" width="7" height="188" rx="3.5" fill="url(#cdVxSpine)" />
        <g filter="url(#cdVxDrop)">
          <rect x="62" y="78" width="454" height="44" rx="7" fill="#fff" stroke="#002244" strokeOpacity="0.11" />
        </g>
        <text x="104" y="98" fontSize="10.5" fontWeight="700" fill="#002244">
          Executive &amp; methodology spine
        </text>
        <g filter="url(#cdVxDrop)">
          <rect x="62" y="132" width="454" height="66" rx="7" fill="rgba(0,105,163,0.12)" stroke="#002244" strokeOpacity="0.12" />
        </g>
        <text x="104" y="154" fontSize="11" fontWeight="700" letterSpacing="2" fill="#002244">
          SAUDI ARABIA
        </text>
        <text x="104" y="170" fontSize="8.5" fill="#002244" fillOpacity="0.78">
          Market · QC · IH · procurement — NUPCO &amp; private envelope logic
        </text>
        <g filter="url(#cdVxDrop)">
          <rect x="62" y="208" width="454" height="66" rx="7" fill="rgba(212,168,75,0.15)" stroke="#002244" strokeOpacity="0.12" />
        </g>
        <text x="104" y="230" fontSize="11" fontWeight="700" letterSpacing="2" fill="#002244">
          TÜRKIYE
        </text>
        <text x="76" y="298" fontSize="9" fontWeight="700" fill="#002244">
          Cross-country synthesis → sponsor implications
        </text>
      </svg>
      <p className="cd-diagram-cap">Notional volume spine · final chapter logic set at kick-off</p>
    </div>
  );
}

export function NarrativeWeightDiagram() {
  return (
    <div className="cd-diagram-wrap" aria-hidden>
      <svg viewBox="0 0 360 124" xmlns="http://www.w3.org/2000/svg" className="cd-diagram-svg">
        <defs>
          <linearGradient id="cdBxKsa" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0080c8" />
            <stop offset="100%" stopColor="#002244" />
          </linearGradient>
          <linearGradient id="cdBxTr" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f0d78c" />
            <stop offset="100%" stopColor="#9a7219" />
          </linearGradient>
          <linearGradient id="cdBxCore" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6d8ab8" />
            <stop offset="100%" stopColor="#002244" />
          </linearGradient>
        </defs>
        <text x="0" y="22" fontSize="9" fontWeight="600" fill="#002244" fillOpacity="0.78">
          KSA chapters
        </text>
        <rect x="112" y="10" width="220" height="18" rx="4" fill="url(#cdBxKsa)" />
        <text x="340" y="23" textAnchor="end" fontSize="9.5" fill="#002244" fillOpacity="0.62">
          38%
        </text>
        <text x="0" y="54" fontSize="9" fontWeight="600" fill="#002244" fillOpacity="0.78">
          Türkiye chapters
        </text>
        <rect x="112" y="42" width="220" height="18" rx="4" fill="url(#cdBxTr)" />
        <text x="340" y="55" textAnchor="end" fontSize="9.5" fillOpacity="0.62" fill="#002244">
          38%
        </text>
        <text x="0" y="86" fontSize="9" fontWeight="600" fill="#002244" fillOpacity="0.78">
          Exec · synthesis · appendix
        </text>
        <rect x="112" y="74" width="138" height="18" rx="4" fill="url(#cdBxCore)" />
        <text x="340" y="87" textAnchor="end" fontSize="9.5" fillOpacity="0.62" fill="#002244">
          24%
        </text>
      </svg>
      <p className="cd-diagram-cap">Indicative narrative weight — not to scale</p>
    </div>
  );
}

export function EvidenceMixDiagram() {
  return (
    <div className="cd-diagram-wrap" aria-hidden>
      <svg viewBox="0 0 360 168" xmlns="http://www.w3.org/2000/svg" className="cd-diagram-svg">
        <defs>
          <linearGradient id="cdDxBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0069A3" />
            <stop offset="100%" stopColor="#002244" />
          </linearGradient>
          <linearGradient id="cdDxGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F0D78C" />
            <stop offset="100%" stopColor="#B8862D" />
          </linearGradient>
          <linearGradient id="cdDxSteel" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#93abc8" />
            <stop offset="100%" stopColor="#4A6FA5" />
          </linearGradient>
        </defs>
        <g transform="translate(118 92) rotate(-90)">
          <circle r="54" fill="none" stroke="url(#cdDxBlue)" strokeWidth="22" strokeDasharray="118.75 220.54" strokeLinecap="round" />
          <circle
            r="54"
            fill="none"
            stroke="url(#cdDxGold)"
            strokeWidth="22"
            strokeDasharray="135.72 203.57"
            strokeDashoffset={-118.75}
            strokeLinecap="round"
          />
          <circle
            r="54"
            fill="none"
            stroke="url(#cdDxSteel)"
            strokeWidth="22"
            strokeDasharray="84.82 254.47"
            strokeDashoffset={-254.47}
            strokeLinecap="round"
          />
        </g>
        <circle cx="118" cy="92" r="30" fill="#fafbfd" stroke="#002244" strokeOpacity="0.08" />
        <text x="238" y="58" fontSize="10" fillOpacity="0.55" fill="#002244">
          35% desk
        </text>
        <text x="238" y="92" fontSize="10" fillOpacity="0.55" fill="#002244">
          40% field
        </text>
        <text x="238" y="126" fontSize="10" fillOpacity="0.55" fill="#002244">
          25% model
        </text>
      </svg>
      <p className="cd-diagram-cap">Phase 1 programme input weighting (indicative)</p>
    </div>
  );
}

export function ProcurementFlowDiagram() {
  return (
    <div className="cd-diagram-wrap" aria-hidden>
      <svg viewBox="0 0 440 252" xmlns="http://www.w3.org/2000/svg" className="cd-diagram-svg">
        <defs>
          <linearGradient id="cdP2Gold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#B8862D" />
            <stop offset="100%" stopColor="#D4A84B" />
          </linearGradient>
        </defs>
        <rect x="96" y="14" width="248" height="26" rx="4" fill="rgba(0,105,163,0.07)" stroke="rgba(0,105,163,0.18)" />
        <text x="220" y="31" textAnchor="middle" fontSize="8.5" letterSpacing="3" fill="#002244" fillOpacity="0.52">
          QUALITATIVE PROCUREMENT · PHASE 2
        </text>
        <rect x="18" y="54" width="122" height="108" rx="7" fill="#fff" stroke="#002244" strokeOpacity="0.13" />
        <text x="79" y="74" textAnchor="middle" fontSize="11" fontWeight="600" fill="#002244">
          KSA
        </text>
        <text x="79" y="119" textAnchor="middle" fontSize="8.5" fontWeight="600" fill="#002244">
          10 director IDIs
        </text>
        <rect x="300" y="54" width="122" height="108" rx="7" fill="#fff" stroke="#002244" strokeOpacity="0.13" />
        <text x="361" y="74" textAnchor="middle" fontSize="11" fontWeight="600" fill="#002244">
          TR
        </text>
        <text x="361" y="119" textAnchor="middle" fontSize="8.5" fontWeight="600" fill="#002244">
          10 director IDIs
        </text>
        <circle cx="220" cy="122" r="48" fill="#fff" stroke="url(#cdP2Gold)" strokeWidth="2" />
        <text x="220" y="118" textAnchor="middle" fontSize="26" fontStyle="italic" fill="#002244" fillOpacity="0.42">
          20
        </text>
        <text x="220" y="138" textAnchor="middle" fontSize="7.5" letterSpacing="2" fill="#0069A3" fillOpacity="0.62">
          PROCUREMENT DIRECTORS
        </text>
      </svg>
      <p className="cd-diagram-cap">KSA 10 + TR 10 · convergent synthesis with Phase 1</p>
    </div>
  );
}
