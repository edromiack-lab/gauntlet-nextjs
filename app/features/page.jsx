'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, BookOpen, Check, Coffee, Crosshair, Flame, MapPin, Phone, Shield, ShieldCheck, Target, Trophy, Users, Zap } from 'lucide-react';

export default function FeaturesPage() {
  const router = useRouter();
  const operations = [
    {
      num: '00',
      icon: Zap,
      name: 'The Real Gauntlet',
      desc: 'One randomized run through every mode. No previews. No do-overs. Combined score at the end. This is the real test that separates closers from tour guides.',
      features: ['Phone Game scenario (5 turns)', 'Roleplay scenario (5 turns)', 'Three objection drills with self assessment', 'One coach situation to internalize', 'One combined score. One tier. One truth.']
    },
    {
      num: '01',
      icon: Target,
      name: 'Live Roleplay',
      desc: 'Six full prospect archetypes with branching dialogue and scored decisions. Brad the budget objector. Lisa the spreadsheet shopper. Karen the burned resident. The Greens couple. Mike with the partner objection. Denise on renewal.',
      features: ['Six full scenarios, five turns each', 'Three response options per turn, all scored 1-10', 'Immediate feedback explaining every miss', 'Full Gauntlet rubric scoring at the end', 'Randomized presentation order for variety']
    },
    {
      num: '02',
      icon: Crosshair,
      name: 'Objection Drill',
      desc: 'Eight rapid rounds from a pool of eighteen real multifamily objections. Type your response, reveal the master response, then self-assess honestly on the specific moves.',
      features: ['Eighteen objections including price, budget, credit, pets, month to month', 'Master responses in the Belfort straight line style', 'Four self assessment moves per round, 2.5 points each', 'Randomized selection every session', 'Total score with performance tier']
    },
    {
      num: '03',
      icon: Flame,
      name: 'Coach Eames',
      desc: 'Twelve real situations. Direct diagnosis in the voice of a portfolio manager who lives in the leasing office. Includes the fair housing compliant application denial script and the relationship first renewal call.',
      features: ['Twelve real situations from the field', 'Full diagnosis, drill, and signoff for each', 'Fair housing compliant application denial coaching', 'Relationship first renewal call methodology', 'No corporate softening, all direct coaching']
    },
    {
      num: '04',
      icon: BookOpen,
      name: 'Closes Academy',
      desc: 'Ten closes fully broken down. The Three Certainties as the foundation, then Either Or, Assumptive, Urgency, Fair Question, Loop, Future Pacing, Soft Hold, Trial Close, Takeaway, and Three Yeses.',
      features: ['Ten closes as a numbered reference library', 'What it is, when to use, how to deliver, real examples', 'The common mistake that kills each close', 'Nightly drill for practice', 'Three Certainties as the foundation for every close']
    },
    {
      num: '05',
      icon: Phone,
      name: 'The Phone Game',
      desc: 'Four scenarios covering the calls that win or lose the tour before it happens. Cold inbound. Internet lead recovery. No show recovery. Pre-tour confirmation call.',
      features: ['Four full call scenarios, five turns each', 'Cold inbound qualification and booking', 'Internet lead recovery script', 'No show recovery without guilt tripping', 'Pre tour confirmation that pre-qualifies']
    },
    {
      num: '06',
      icon: MapPin,
      name: 'The Tour',
      desc: 'Physical tour combat training. Eight scenarios across three property types (garden style, boutique luxury, luxury high-rise) and three difficulty tiers. Every stop tests whether you can hold discipline against feature dumping and close strong on the office return.',
      features: ['Eight full tour scenarios, six to seven stops each', 'Three property types covering the full multifamily spectrum', 'Three difficulty tiers: Rookie, Dialed In, Sharp', 'Location context on every turn so training feels like a real tour', 'Trains specifically against feature dumping and weak office returns']
    },
    {
      num: '07',
      icon: Coffee,
      name: 'The Sit-Down',
      desc: 'Discovery, budget conversation, yes-chain, and pre-tour close. Most deals are decided before the tour starts. Eight scenarios covering everything from the young engaged couple to the tire kicker to hidden urgency prospects who wont tell you the real timeline.',
      features: ['Eight full sit-down scenarios, seven phases each', 'Real discovery over surface questions', 'Budget finesse for the ones who wont share', 'Yes chain construction before you stand up', 'Tests every stage from the greet to the transition']
    },
    {
      num: '08',
      icon: ShieldCheck,
      name: 'Fair Housing Combat',
      desc: 'Real fair housing situations agents face every day. The safe neighborhood question. ESA requests. Section 8 vouchers. Application denials. Tester callers. Occupancy limits. Federal FHA plus NJ Law Against Discrimination. Scoring reflects legal risk, not just closing skill.',
      features: ['Eight scenarios across three tiers', 'Federal FHA plus NJ LAD (source of income, gender identity, marital status)', 'Steering, familial status, ESA, source of income, FCRA, occupancy', 'Legal citations in feedback so agents learn the law not just the moves', 'Scoring reflects legal risk so violations get scored zero not just low']
    },
    {
      num: '09',
      icon: Zap,
      name: 'The Boiler Room',
      desc: 'The flagship differentiator. Five real phone scenarios with a live countdown timer. Prospects hang up if you take too long. Emotional meters track Interest, Trust, and Urgency in real time. Manager avatar reacts to every move. The only training that recreates the actual pressure of a real inbound call.',
      features: ['Five scenarios across three tiers with real countdown timers', 'Prospect hangs up on timeout, deal is gone', 'Live emotional meters for Interest, Trust, and Urgency', 'Manager avatar with live reactions to every choice', 'Body language cues on every prospect line', 'Fair housing and FCRA compliance under real timer pressure']
    },
  ];

  return (
    <div className="fade-in">
      <section className="hero" style={{ padding: '80px 0 40px' }}>
        <div className="container">
          <div className="hero-eyebrow">The Operations</div>
          <h1 className="hero-title">Every Phase.<br /><span className="accent">Fully Trained.</span></h1>
          <p className="hero-sub" style={{ marginBottom: 0 }}>Nine training operations covering the full arc of a leasing conversation, plus the Real Gauntlet combined mode. From the inbound call to the sit-down to the tour to the close to the renewal. Every phase has drills, roleplay, and scoring. Fair housing baked into its own operation. Real timer pressure in the flagship Boiler Room.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container">
          {operations.map((op, i) => (
            <div key={op.num} className="op-detail">
              {i % 2 === 0 ? (
                <>
                  <div className="op-detail-content">
                    <div className="op-num">OP {op.num}</div>
                    <h3>{op.name}</h3>
                    <p>{op.desc}</p>
                    <ul>
                      {op.features.map((f, j) => (
                        <li key={j}><Check size={16} className="check" /> {f}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="op-visual">
                    <div className="op-num-lg">{op.num}</div>
                    <op.icon size={80} className="op-icon-lg" />
                  </div>
                </>
              ) : (
                <>
                  <div className="op-visual">
                    <div className="op-num-lg">{op.num}</div>
                    <op.icon size={80} className="op-icon-lg" />
                  </div>
                  <div className="op-detail-content">
                    <div className="op-num">OP {op.num}</div>
                    <h3>{op.name}</h3>
                    <p>{op.desc}</p>
                    <ul>
                      {op.features.map((f, j) => (
                        <li key={j}><Check size={16} className="check" /> {f}</li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-surface" style={{ background: '#0f0f0a' }}>
        <div className="container">
          <div className="section-eyebrow">Also Included</div>
          <h2 className="section-title">Manager Tools And Compliance</h2>
          <div className="feature-grid" style={{ marginTop: 32 }}>
            <div className="feature-card">
              <Trophy size={24} className="gold" style={{ marginBottom: 14 }} />
              <h3 style={{ fontSize: 20 }}>Three Tier Difficulty</h3>
              <p>OP 06 and OP 07 scenarios are graded by tier: Rookie for foundation moves, Dialed In for judgment calls, Sharp for hostile and competitive territory. Agents level up intentionally.</p>
            </div>
            <div className="feature-card">
              <Trophy size={24} className="gold" style={{ marginBottom: 14 }} />
              <h3 style={{ fontSize: 20 }}>Manager Dashboard</h3>
              <p>Passcode protected leaderboard showing every agent's average, best score, and sharp count. Assign focus areas. Track progress.</p>
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
              <Users size={24} className="gold" style={{ marginBottom: 14 }} />
              <h3 style={{ fontSize: 20 }}>Private Agent Profiles</h3>
              <p>Each device shows only that agent's data. Nobody sees each other's scores. Only the manager sees the leaderboard.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container-narrow">
          <h2 className="cta-title">See It In Action.</h2>
          <p style={{ color: '#a8a594', fontSize: 18, marginBottom: 32 }}>Get a live demo with your team. 30 minutes. No pressure.</p>
          <button className="btn-primary" onClick={() => router.push('/contact')}>
            Request Demo <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}