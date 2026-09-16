import DemoTabs from './DemoTabs';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Try It Live',
  description: 'Four interactive samples from The Sales Gauntlet. Handle an objection. Roleplay a prospect. Learn a close. Take a call with a live countdown timer.',
};

export default function DemoPage() {
  return (
    <div className="fade-in">
      <section className="hero" style={{ padding: '80px 0 40px' }}>
        <div className="container">
          <div className="hero-eyebrow">Try It Live</div>
          <h1 className="hero-title">
            Experience The <span className="accent">Gauntlet.</span>
          </h1>
          <p className="hero-sub">
            Four interactive samples from the real app. Handle an objection. Roleplay a prospect. Learn a close. Take a call with a live countdown timer. This is exactly what your team gets, only better with full unlocked content.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container-narrow">
          <DemoTabs />

          <div style={{ marginTop: 40, padding: 24, background: '#14140e', border: '1px solid #2a2a22', borderLeft: '3px solid #c9a227', borderRadius: 2 }}>
            <div className="mono-label gold" style={{ marginBottom: 8 }}>What Your Team Gets In The Full App</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 12, marginTop: 16 }}>
              <div style={{ fontSize: 13 }}><span className="display gold" style={{ fontSize: 18, marginRight: 6 }}>8</span>Tour scenarios</div>
              <div style={{ fontSize: 13 }}><span className="display gold" style={{ fontSize: 18, marginRight: 6 }}>8</span>Sit-down scenarios</div>
              <div style={{ fontSize: 13 }}><span className="display gold" style={{ fontSize: 18, marginRight: 6 }}>8</span>Fair housing scenarios</div>
              <div style={{ fontSize: 13 }}><span className="display gold" style={{ fontSize: 18, marginRight: 6 }}>5</span>Boiler Room calls</div>
              <div style={{ fontSize: 13 }}><span className="display gold" style={{ fontSize: 18, marginRight: 6 }}>6</span>Prospect archetypes</div>
              <div style={{ fontSize: 13 }}><span className="display gold" style={{ fontSize: 18, marginRight: 6 }}>18</span>Real objections</div>
              <div style={{ fontSize: 13 }}><span className="display gold" style={{ fontSize: 18, marginRight: 6 }}>10</span>Master closes</div>
              <div style={{ fontSize: 13 }}><span className="display gold" style={{ fontSize: 18, marginRight: 6 }}>12</span>Coach situations</div>
              <div style={{ fontSize: 13 }}><span className="display gold" style={{ fontSize: 18, marginRight: 6 }}>4</span>Phone scenarios</div>
              <div style={{ fontSize: 13 }}><span className="display gold" style={{ fontSize: 18, marginRight: 6 }}>1</span>Real Gauntlet mode</div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container-narrow">
          <h2 className="cta-title">Ready For The Full Experience?</h2>
          <p style={{ color: '#a8a594', fontSize: 18, marginBottom: 32 }}>Get a live walkthrough with your team. Deploy to your properties within a week.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Request Full Access <ArrowRight size={16} /></Link>
            <Link href="/pricing" className="btn-ghost">See Pricing</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
