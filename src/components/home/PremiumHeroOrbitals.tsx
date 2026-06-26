/** Orbital rings with revolving planets — mirrors premium-home-preview.html `.hero-orbital`. */
export function PremiumHeroOrbitals() {
  return (
    <div className="premium-hero-orbital hidden lg:block" aria-hidden="true">
      <div className="premium-orbit-ring">
        <span className="premium-orbit-node premium-orbit-node--gold premium-orbit-node--top" />
      </div>
      <div className="premium-orbit-ring premium-orbit-ring--2">
        <span className="premium-orbit-node premium-orbit-node--teal premium-orbit-node--bottom-right" />
      </div>
      <div className="premium-orbit-ring premium-orbit-ring--3">
        <span className="premium-orbit-node premium-orbit-node--gold premium-orbit-node--left" />
      </div>
    </div>
  );
}
