'use client';

import { useRouter } from 'next/navigation';
import { Zap } from 'lucide-react';

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

export default function Footer() {
  const router = useRouter();
  const nav = (href) => {
    router.push(href);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <Logo />
            <p style={{ color: '#8a8775', fontSize: 13, marginTop: 16, maxWidth: 340 }}>
              Combat training for multifamily leasing teams. Built by leasing pros. Battle tested at scale.
            </p>
            <div style={{ marginTop: 20, fontStyle: 'italic', color: '#c9a227', fontSize: 12 }}>
              "Passion applied with precision."
            </div>
          </div>
          <div className="footer-col">
            <h5>Product</h5>
            <button onClick={() => nav('/features')}>Features</button>
            <button onClick={() => nav('/methodology')}>Methodology</button>
            <button onClick={() => nav('/demo')}>Try Demo</button>
            <button onClick={() => nav('/pricing')}>Pricing</button>
            <button onClick={() => nav('/contact')}>Request Demo</button>
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            <button onClick={() => nav('/about')}>About</button>
            <button onClick={() => nav('/contact')}>Contact</button>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2026 Boom Boom · The Sales Gauntlet</div>
          <div>Built by Eames</div>
        </div>
      </div>
    </footer>
  );
}
