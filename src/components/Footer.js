import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col contact-info">
            <div className="footer-logo">INDO<span>TIMES</span></div>
            <p>
              <strong>Chief Editor:</strong> Md. Tariq Nakaash<br />
              <strong>Chief Reporter:</strong> 9886910985<br />
              <strong>Phone:</strong> 9886970209<br />
              <strong>Email:</strong> <a href="mailto:tariqnakaash@gmail.com" style={{ color: 'var(--brand-color)' }}>tariqnakaash@gmail.com</a>
            </p>
          </div>

          <div className="footer-col">
            <h4>Sections</h4>
            <ul>
              <li><Link href="#">Government Schemes</Link></li>
              <li><Link href="#">District News</Link></li>
              <li><Link href="#">State News</Link></li>
              <li><Link href="#">National News</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>More Sections</h4>
            <ul>
              <li><Link href="#">Science & Environment</Link></li>
              <li><Link href="#">Entertainment</Link></li>
              <li><Link href="#">Health</Link></li>
              <li><Link href="#">Education</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Analytics & Data</h4>
            <p style={{ color: '#aaa', fontSize: '0.95rem', marginBottom: '0.5rem' }}>Total Network Visitors:</p>
            <div className="visitor-count">
              <span className="count">1,402,893</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>Copyright@indotimesmedia</div>
          <div>RNI Reg NO. KARURD 2000/03223 - Davangere Karnataka</div>
        </div>
      </div>
    </footer>
  );
}
