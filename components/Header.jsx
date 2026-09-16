'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Menu, X, Zap } from 'lucide-react';

function Logo() {
  return (
    <div className="nav-logo">
      <div style={{ width: 32, height: 32, background: '#c9a227', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 2 }}>
        <Zap size={18} color="#0a0a0a" />
      </div>
      <div>
        <div className="mono-label gold" style={{ margin: 0, fontSize: 9, letterSpacing: '0.24em' }}>Boom Boom</div>
        <div className="display" style={{ fontSize: 16, lineHeight: 1 }}>The Gauntlet</div>
      </div>
    </div>
  );
}

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const nav = (href) => {
    router.push(href);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const links = [
    { href: '/', label: 'Home' },
    { href: '/features', label: 'Features' },
    { href: '/methodology', label: 'Methodology' },
    { href: '/demo', label: 'Try Demo' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="site-header">
      <div className="nav">
        <div onClick={() => nav('/')} style={{ cursor: 'pointer' }}>
          <Logo />
        </div>
        <div className="nav-links">
          {links.map((l) => (
            <button
              key={l.href}
              className={`nav-link ${pathname === l.href ? 'active' : ''}`}
              onClick={() => nav(l.href)}
            >
              {l.label}
            </button>
          ))}
          <button className="btn-primary" style={{ marginLeft: 12, padding: '12px 20px', fontSize: 13 }} onClick={() => nav('/contact')}>
            Request Demo
          </button>
        </div>
        <button className="mobile-menu-btn" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        {links.map((l) => (
          <button key={l.href} onClick={() => nav(l.href)}>{l.label}</button>
        ))}
        <button className="btn-primary" style={{ marginTop: 12, justifyContent: 'center' }} onClick={() => nav('/contact')}>
          Request Demo
        </button>
      </div>
    </header>
  );
}
