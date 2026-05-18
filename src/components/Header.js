'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    setCurrentDate(new Date().toLocaleDateString('en-US', options).toUpperCase());
  }, []);

  return (
    <>
      {/* Top Info Bar */}
      <div className="top-header">
        <div className="container">
          <div>
            <span suppressHydrationWarning style={{ fontWeight: 500, color: 'var(--text-dark)' }}>
              {currentDate || 'LOADING DATE...'}
            </span>
            &nbsp;|&nbsp; RNI Reg NO. KARURD 2000/03223 - Davangere Karnataka
          </div>
          <div><a href="https://www.indotimesmedia.com">www.indotimesmedia.com</a></div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="main-nav">
        <div className="container nav-container">
          <Link href="/" className="brand-logo">
            INDO<span>TIMES</span>
          </Link>

          <ul className="nav-links">
            <li><Link href="#">Government Schemes</Link></li>
            <li><Link href="#">District News</Link></li>
            <li><Link href="#">State News</Link></li>
            <li><Link href="#">National News</Link></li>
            <li><Link href="#">Science & Environment</Link></li>
            <li><Link href="#">Entertainment</Link></li>
            <li><Link href="#">Health</Link></li>
            <li><Link href="#">Education</Link></li>
          </ul>

          <div className="nav-actions">
            <a href="https://youtube.com" aria-label="YouTube Channel"
               style={{ color: '#fff', display: 'flex', transition: 'color 0.2s' }}
               onMouseOver={(e) => e.currentTarget.style.color = 'var(--brand-color)'}
               onMouseOut={(e) => e.currentTarget.style.color = '#fff'}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <div className="search-box">
              <input type="text" placeholder="Search News..." />
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="square">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
