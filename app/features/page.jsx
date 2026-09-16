import Link from 'next/link';
import { ArrowRight, Target, Crosshair, Flame, BookOpen, Phone, Zap, Shield, ShieldCheck, Trophy, MapPin, Coffee } from 'lucide-react';

export const metadata = {
  title: 'Features',
  description: 'Nine training operations covering the full arc of a leasing conversation. From cold inbound to sit-down close. Fair housing built in. Boiler Room timer training as the flagship.',
};

const OPS_DETAIL = [
  {
    num: '01', icon: Phone, name: 'Cold Inbound Drill',
    desc: 'Handle warm and cold inbound calls under time pressure. Scored responses with instant feedback. Trains the muscle memory to book tours from cold leads without overexplaining.',
    features: ['4 scored scenarios', 'Instant response scoring', 'Coaching feedback per turn', 'Warm and cold leads']
  },
  {
    num: '02', icon: Crosshair, name: 'Objection Combat',
    desc: 'Eighteen real objections every leasing agent hears. Scored multiple-choice responses that mimic actual conversation patterns. Fast drill mode or deliberate practice mode.',
    features: ['18 real objections', 'Multiple response options per objection', 'Scored 0-10 with feedback', 'Fast drill or deliberate practice']
  },
  {
    num: '03', icon: Flame, name: 'Coach Eames',
    desc: 'Twelve real situations. Direct diagnosis in the voice of a portfolio manager who lives in the leasing office. Not motivational fluff. Diagnosis, drill, next move.',
    features: ['12 real situations', 'Portfolio manager voice', 'Direct coaching diagnosis', 'Concrete next moves']
  },
  {
    num: '04', icon: Target, name: 'Prospect Roleplay',
    desc: 'Six prospect archetypes agents actually encounter. Full conversations from hello to close. Choose your response at each turn. Different archetype requires different playbook.',
    features: ['6 prospect archetypes', 'Full conversation flow', 'Turn-by-turn choices', 'Different playbook per archetype']
  },
  {
    num: '05', icon: MapPin, name: 'The Phone Game',
    desc: 'Four scored phone scenarios covering the full arc. Book the tour, handle the pushback, own the callback. Trains phone-specific skills that in-person training misses.',
    features: ['4 phone scenarios', 'Book, pushback, callback', 'Phone-specific skills', 'Scored per turn']
  },
  {
    num: '06', icon: Coffee, name: 'The Tour',
    desc: 'Eight full tour scenarios. Discovery to close. Handle objections in the unit. Includes budget shoppers, no-show recoveries, rushed prospects, and family shoppers.',
    features: ['8 full tour scenarios', 'Discovery to close', 'Objections handled in the unit', 'Full range of prospect types']
  },
  {
    num: '07', icon: BookOpen, name: 'The Sit-Down',
    desc: 'Eight full sit-down scenarios. Application, deposit, lease signing, hand-off. Where most training programs stop, this one starts. Trains what happens after they say yes.',
    features: ['8 sit-down scenarios', 'Application through hand-off', 'What happens after yes', 'Deposit and lease specifics']
  },
  {
    num: '08', icon: ShieldCheck, name: 'Fair Housing Combat',
    desc: 'Real fair housing situations agents face every day. The safe neighborhood question. ESA requests. Section 8 vouchers. Application denials. Tester callers. Occupancy limits. Federal FHA plus NJ Law Against Discrimination.',
    features: ['8 scenarios across three tiers', 'Federal FHA plus NJ LAD (source of income, gender identity, marital status)', 'Steering, familial status, ESA, source of income, FCRA, occupancy', 'Legal citations in feedback', 'Scoring reflects legal risk']
  },
  {
    num: '09', icon: Zap, name: 'The Boiler Room',
    desc: 'The flagship differentiator. Five real phone scenarios with a live countdown timer. Prospects hang up if you take too long. Emotional meters track Interest, Trust, and Urgency in real time. Manager avatar reacts to every move.',
    features: ['5 scenarios across three tiers with real countdown timers', 'Prospect hangs up on timeout', 'Live emotional meters (Interest, Trust, Urgency)', 'Manager avatar with live reactions', 'Body language cues on every line', 'Fair housing and FCRA under real timer pressure']
  },
];

export default function FeaturesPage() {
  return (
    <div className="fade-in">
      <section className="hero" style={{ paddingBottom: 40 }}>
        <div className="container">
          <div className="hero-eyebrow">The Features</div>
          <h1 className="hero-title">Nine Training Ops.<br />One <span className="accent">Real</span> Gauntlet.</h1>
          <p className="hero-sub" style={{ marginBottom: 0 }}>
            Nine training operations covering the full arc of a leasing conversation, plus the Real Gauntlet combined mode. From the inbound call to the sit-down to the tour to the close to the renewal. Every phase has drills, roleplay, and scoring. Fair housing baked into its own operation. Real timer pressure in the flagship Boiler Room.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          {OPS_DETAIL.map(({ num, name, desc, features, icon: Icon }) => (
            <div key={num} style={{ marginBottom: 60, paddingBottom: 60, borderBottom: '1px solid #2a2a22' }}>
              <div style={{ display: 'flex', alignItems: 'start', gap: 24, marginBottom: 20, flexWrap: 'wrap' }}>
                <div style={{ background: '#14140e', border: '1px solid #c9a227', width: 72, height: 72, borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon size={32} className="gold" />
                </div>
                <div style={{ flex: 1, minWidth: 260 }}>
                  <div className="mono-label gold">OP {num}</div>
                  <h2 style={{ fontFamily: 'Anton, sans-serif', fontSize: 36, textTransform: 'uppercase', letterSpacing: '0.02em', marginTop: 4, lineHeight: 1 }}>{name}</h2>
                </div>
              </div>
              <p style={{ color: '#a8a594', fontSize: 16, lineHeight: 1.7, marginBottom: 20 }}>{desc}</p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {features.map((f, i) => (
                  <li key={i} style={{ padding: '8px 0', color: '#f5f1e8', fontSize: 14, display: 'flex', gap: 12, alignItems: 'start' }}>
                    <span style={{ color: '#c9a227', marginTop: 2 }}>◆</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section charcoal">
        <div className="container">
          <div className="section-eyebrow">Also Included</div>
          <h2 className="section-title">Beyond The Nine Operations.</h2>
          <div className="features-grid">
            <div className="feature-card">
              <Trophy size={24} className="gold" style={{ marginBottom: 14 }} />
              <h3 style={{ fontSize: 20 }}>The Real Gauntlet</h3>
              <p>Combined mode that pulls scenarios from every operation. One continuous drill from cold inbound to sit-down close. Where champions get made.</p>
            </div>
            <div className="feature-card">
              <Shield size={24} className="gold" style={{ marginBottom: 14 }} />
              <h3 style={{ fontSize: 20 }}>Fair Housing As An Operation</h3>
              <p>OP 08 is a full training operation dedicated to fair housing scenarios. Federal FHA plus NJ LAD. Steering, ESAs, Section 8, tester callers, denials, occupancy. Scoring reflects legal risk. Not legal advice but the training compliance videos never do.</p>
            </div>
            <div className="feature-card">
              <Zap size={24} className="gold" style={{ marginBottom: 14 }} />
              <h3 style={{ fontSize: 20 }}>Real Pressure Training</h3>
              <p>OP 09 The Boiler Room is the only leasing training with a real countdown timer. Prospects hang up if you take too long. Emotional meters track how you land. Manager is watching. Nobody else has this.</p>
            </div>
            <div className="feature-card">
              <Target size={24} className="gold" style={{ marginBottom: 14 }} />
              <h3 style={{ fontSize: 20 }}>Manager Dashboard</h3>
              <p>Team leaderboard, per-agent stats, mode-level performance breakdown, session history. Managers see who is drilling and who is not. Available in Squad tier and above.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container-narrow">
          <h2 className="cta-title">Ready For The Full Experience?</h2>
          <p style={{ color: '#a8a594', fontSize: 18, marginBottom: 32 }}>See it live. Try the Boiler Room demo. Feel the timer pressure.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/demo" className="btn-primary">Try It Live <ArrowRight size={16} /></Link>
            <Link href="/pricing" className="btn-ghost">See Pricing</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
