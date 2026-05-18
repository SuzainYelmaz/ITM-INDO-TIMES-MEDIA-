import Link from 'next/link';

export default function HeroStory() {
  return (
    <article className="hero-story">
      {/* Authentic photojournalism style placeholder image */}
      <div className="hero-image"
        style={{ background: "url('https://images.unsplash.com/photo-1541872703-74c5e44368f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80') center/cover" }}>
      </div>
      <div className="hero-content">
        <span className="category">National News</span>
        <h2><Link href="#">The Post-Silicon Horizon: Clean Tech Sovereignty and the New Resource Cartels.</Link></h2>
        <p>As structural supply chains shift completely from traditional semiconductors to neuromorphic
          crystal nodes, localized infrastructure models are reshaping trade dynamics overnight. We
          examine the epicenters of architectural autonomy and what it means for domestic policy.</p>
        <div className="meta">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          By Elena Vance &bull; 2 hours ago
        </div>
      </div>
    </article>
  );
}
