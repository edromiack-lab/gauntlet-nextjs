import Link from 'next/link';
import { ArrowRight, Target, Crosshair, Flame, BookOpen, Phone, Zap, Shield, ShieldCheck, Trophy, MapPin, Coffee } from 'lucide-react';

const OPERATIONS = [
  { icon: Trophy, name: 'The Real Gauntlet', desc: 'The combined mode. Every operation, one continuous drill. Where champions get made.', num: '00' },
  { icon: Phone, name: 'Cold Inbound Drill', desc: 'Handle warm and cold inbound calls under time pressure with scored responses.', num: '01' },
  { icon: Crosshair, name: 'Objection Combat', desc: 'The 18 objections every leasing agent hears. Scored responses. Instant feedback.', num: '02' },
  { icon: Flame, name: 'Coach Eames', desc: 'Twelve real situations. Direct diagnosis in the voice of a portfolio manager who lives in the leasing office.', num: '03' },
  { icon: Target, name: 'Prospect Roleplay', desc: 'Six prospect archetypes. Full conversations from hello to close.', num: '04' },
  { icon: MapPin, name: 'The Phone Game', desc: 'Four scored phone scenarios. Book the tour, handle the pushback, own the callback.', num: '05' },
  { icon: Coffee, name: 'The Tour', desc: 'Eight full tour scenarios. Discovery to close. Handle objections in the unit.', num: '06' },
  { icon: BookOpen, name: 'The Sit-Down', desc: 'Eight full sit-down scenarios. Application, deposit, lease, hand-off.', num: '07' },
  { icon: ShieldCheck, name: 'Fair Housing Combat', desc: 'Real fair housing situations. Steering, ESAs, Section 8, testers, denials. Federal FHA plus NJ LAD.', num: '08' },
  { icon: Zap, name: 'The Boiler Room', desc: 'Real timer. Real hangups. Real pressure. Five phone scenarios with countdown, emotional meters, manager watching.', num: '09' },
];

export default function HomePage() {
  return (
    <div className="fade-in">
      <section className="hero">
        <div className="container">
          <div className="hero-eyebrow">Real leasing training</div>
          <h1 className="hero-title">
            The <span className="accent">Sales</span><br />
            Gauntlet.
          </h1>
          <p className="hero-sub">
            Nine training operations for leasing agents. Real timer pressure. Real fair housing. Real hangups. The only training built by leasing professionals for the moments that actually kill deals.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/demo" className="btn-primary">
              Try It Live <ArrowRight size={16} />
            </Link>
            <Link href="/pricing" className="btn-ghost">See Pricing</Link>
          </div>
        </div>
      </section>

      <section className="section charcoal">
        <div className="container">
          <div className="section-eyebrow">By The Numbers</div>
          <div className="stats-row">
            <div className="stat">
              <div className="stat-num">8</div>
              <div className="stat-label">Tour Scenarios</div>
            </div>
            <div className="stat">
              <div className="stat-num">8</div>
              <div className="stat-label">Sit-Down Scenarios</div>
            </div>
            <div className="stat">
              <div className="stat-num">8</div>
              <div className="stat-label">Fair Housing Scenarios</div>
            </div>
            <div className="stat">
              <div className="stat-num">5</div>
              <div className="stat-label">Boiler Room Calls</div>
            </div>
            <div className="stat">
              <div className="stat-num">18</div>
              <div className="stat-label">Real Objections</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-eyebrow">The System</div>
          <h2 className="section-title">Nine Training Operations. One Real Gauntlet. Total Coverage.</h2>
          <p className="hero-sub" style={{ maxWidth: 720 }}>
            From the inbound phone call to the sit-down close. Every operation trains a specific skill. The Real Gauntlet mode combines them all into one continuous drill. Fair housing baked into its own dedicated operation. Real timer pressure in the flagship Boiler Room.
          </p>
          <div className="ops-grid">
            {OPERATIONS.map(({ num, name, desc, icon: Icon }) => (
              <div key={num} className="op-card">
                <Icon size={24} className="gold" style={{ marginBottom: 12 }} />
                <div className="op-card-num">{num}</div>
                <div className="op-card-name">{name}</div>
                <div className="op-card-desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container-narrow">
          <h2 className="cta-title">Real pressure. Real training. Real results.</h2>
          <p style={{ color: '#a8a594', fontSize: 18, marginBottom: 32 }}>See what the app actually feels like before you buy.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/demo" className="btn-primary">
              Try The Live Demo <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="btn-ghost">Talk To Eames</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
