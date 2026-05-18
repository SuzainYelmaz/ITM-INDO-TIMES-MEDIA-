import Link from 'next/link';

export default function NewsGrid() {
  return (
    <>
      <h2 className="section-title">More Top Stories</h2>
      <div className="news-grid">
        <article className="news-card">
          <div className="img-placeholder"
            style={{ background: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80') center/cover" }}>
          </div>
          <div className="card-content">
            <span className="category">Science & Environment</span>
            <h3><Link href="#">The Variable Font Revolution in Physical Industrial Displays.</Link></h3>
            <p>Typography scales into dynamic real-time physical telemetry systems as screen-less glass
              interfaces replace mechanical dials permanently.</p>
            <div className="meta" style={{ marginTop: 'auto' }}>4 Min Read</div>
          </div>
        </article>

        <article className="news-card">
          <div className="img-placeholder"
            style={{ background: "url('https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80') center/cover" }}>
          </div>
          <div className="card-content">
            <span className="category">Health</span>
            <h3><Link href="#">Synthetic Mycelium Infrastructure Projects Outperform Traditional Foundations.</Link></h3>
            <p>New European architectural standards mandate 30% organic structural binding material compositions
              across suburban development blueprints.</p>
            <div className="meta" style={{ marginTop: 'auto' }}>7 Min Read</div>
          </div>
        </article>

        <article className="news-card">
          <div className="img-placeholder"
            style={{ background: "url('https://images.unsplash.com/photo-1554147090-e1221a04a025?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80') center/cover" }}>
          </div>
          <div className="card-content">
            <span className="category">Entertainment</span>
            <h3><Link href="#">Tactile Brutalism: The Human Revolt Against Generative Poly-Aesthetics.</Link></h3>
            <p>Elite studios return to raw code frameworks, absolute flat geometries, and deliberate physical
              textures to declare creative authenticity.</p>
            <div className="meta" style={{ marginTop: 'auto' }}>5 Min Read</div>
          </div>
        </article>
      </div>
    </>
  );
}
