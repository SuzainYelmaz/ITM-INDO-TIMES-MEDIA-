import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="side-stories">
      <h2 className="section-title">Top Stories</h2>
      <ul className="story-list">
        <li className="story-item">
          <span className="category">State News</span>
          <h3><Link href="#">Decentralized Liquid Reserves Standardized Across Central Systems.</Link></h3>
          <div className="meta">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            14h Ago
          </div>
        </li>
        <li className="story-item">
          <span className="category">Science & Environment</span>
          <h3><Link href="#">Invisible Frameworks: Designing Low-Impact, Carbon-Negative Habitats.</Link></h3>
          <div className="meta">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            18h Ago
          </div>
        </li>
        <li className="story-item">
          <span className="category">Government Schemes</span>
          <h3><Link href="#">Agentic Governance Networks Supercharge Public Infrastructure Allocation Audits.</Link></h3>
          <div className="meta">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            1d Ago
          </div>
        </li>
        <li className="story-item">
          <span className="category">Education</span>
          <h3><Link href="#">New STEM Programs Rolled Out for Primary Education Centers Across the District.</Link></h3>
          <div className="meta">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            1d Ago
          </div>
        </li>
      </ul>
    </aside>
  );
}
