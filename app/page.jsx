'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, BookOpen, Building, ChevronRight, Coffee, Crosshair, Flame, MapPin, Phone, ShieldCheck, Target, Trophy, Users, Zap } from 'lucide-react';

export default function HomePage() {
  const router = useRouter();
  const operations = [
    { icon: Zap, name: 'The Real Gauntlet', desc: 'Randomized chaotic run. Phone, tour, drills, coach. One combined score. The real test.', num: '00' },
    { icon: Target, name: 'Live Roleplay', desc: 'Six prospect archetypes with branching decisions. Every choice scored, every miss diagnosed.', num: '01' },
    { icon: Crosshair, name: 'Objection Drill', desc: 'Eighteen real objections. Master responses. Self-assessment against the moves that actually work.', num: '02' },
    { icon: Flame, name: 'Coach Eames', desc: 'Twelve real situations. Direct diagnosis in the voice of a portfolio manager who lives in the leasing office.', num: '03' },
    { icon: BookOpen, name: 'Closes Academy', desc: 'Ten closes fully broken down. Either or, assumptive, urgency, loop, three certainties, all of it.', num: '04' },
    { icon: Phone, name: 'The Phone Game', desc: 'Pre-tour discovery. Inbound calls, no show recovery, internet lead revival. Win before they walk in.', num: '05' },
    { icon: MapPin, name: 'The Tour', desc: 'Physical tour combat training. Eight scenarios across garden, luxury, and high-rise. Feature dumping gets punished.', num: '06' },
    { icon: Coffee, name: 'The Sit-Down', desc: 'Discovery, budget conversation, yes-chain, pre-tour close. The deal is decided before you stand up.', num: '07' },
    { icon: ShieldCheck, name: 'Fair Housing Combat', desc: 'Real fair housing situations. Steering, ESAs, Section 8, testers, denials. Federal FHA plus NJ LAD.', num: '08' },
    { icon: Zap, name: 'The Boiler Room', desc: 'Real timer. Real hangups. Real pressure. Five phone scenarios with countdown, emotional meters, manager watching.', num: '09' },
  ];

  return (
    <div className="fade-in">
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-eyebrow">Leasing Combat Training</div>
          <h1 className="hero-title">
            Train Closers.<br /><span className="accent">Not Tour Guides.</span>
          </h1>
          <p className="hero-sub">
            The Gauntlet turns your leasing agents into closers with rapid drills, live roleplay, and coaching that actually lands. Built by a portfolio manager who lives in the leasing office. Deployed to your entire team in one link.
          </p>
          <div className="hero-ctas">
            <button className="btn-primary" onClick={() => router.push('/demo')}>
              Try Live Demo <ArrowRight size={16} />
            </button>
            <button className="btn-ghost" onClick={() => router.push('/contact')}>
              Request Full Access
            </button>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section" style={{ paddingTop: 40, paddingBottom: 60 }}>
        <div className="container">
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

      {/* PROBLEM */}
      <section className="section bg-surface" style={{ background: '#0f0f0a' }}>
        <div className="container">
          <div className="section-eyebrow">The Problem</div>
          <h2 className="section-title">Your Team's Leasing Conversion Is Bleeding</h2>
          <p className="section-sub">Most leasing agents are tour guides in a uniform. They know the amenities. They cannot handle an objection. They cannot close. Here is what is actually happening on your properties right now.</p>
          <div className="problem-list">
            <div className="problem-item">
              <div className="num">01</div>
              <h4>Feature Dumping Tours</h4>
              <p>Agents walk prospects through a list of amenities instead of running discovery. Tours end with "let me know what you decide."</p>
            </div>
            <div className="problem-item">
              <div className="num">02</div>
              <h4>Frozen On Objections</h4>
              <p>The same ten objections come up every day. Agents fumble every single one. Deals die because nobody trained for combat.</p>
            </div>
            <div className="problem-item">
              <div className="num">03</div>
              <h4>Managers Cannot Scale</h4>
              <p>Your best closer coaches the team when they have time. They never have time. Training is a folder nobody opens.</p>
            </div>
            <div className="problem-item">
              <div className="num">04</div>
              <h4>Compliance Exposure</h4>
              <p>Untrained agents fumble denials, disclosures, and fair housing scenarios. Every conversation is legal risk.</p>
            </div>
          </div>
        </div>
      </section>

      {/* OPERATIONS OVERVIEW */}
      <section className="section">
        <div className="container">
          <div className="section-eyebrow">The Solution</div>
          <h2 className="section-title">Nine Training Operations. One Real Gauntlet. Total Coverage.</h2>
          <p className="section-sub">Every phase of the leasing conversation. From the inbound call to the close to the renewal. Structured, drilled, and diagnosed.</p>
          <div className="feature-grid">
            {operations.map((op) => (
              <div key={op.name} className="feature-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
                  <div className="icon"><op.icon size={28} /></div>
                  <div className="display gold" style={{ fontSize: 32, opacity: 0.3, lineHeight: 1 }}>{op.num}</div>
                </div>
                <h3>{op.name}</h3>
                <p>{op.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <button className="btn-ghost" onClick={() => router.push('/features')}>
              See Each Operation In Detail <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* WHO IT IS FOR */}
      <section className="section" style={{ background: '#0f0f0a' }}>
        <div className="container">
          <div className="section-eyebrow">Who This Is For</div>
          <h2 className="section-title">Built For Property Management Companies That Actually Want To Close</h2>
          <div className="feature-grid" style={{ marginTop: 32 }}>
            <div className="feature-card">
              <Building size={24} className="gold" style={{ marginBottom: 14 }} />
              <h3 style={{ fontSize: 20 }}>Multifamily Portfolios</h3>
              <p>Conventional, luxury, mid-market. Five properties or fifty. If you run leasing teams, this is your training system.</p>
            </div>
            <div className="feature-card">
              <Users size={24} className="gold" style={{ marginBottom: 14 }} />
              <h3 style={{ fontSize: 20 }}>Regional Managers</h3>
              <p>Deploy consistent training across every property without flying to each one. Deploy in a day, iterate in real time.</p>
            </div>
            <div className="feature-card">
              <Trophy size={24} className="gold" style={{ marginBottom: 14 }} />
              <h3 style={{ fontSize: 20 }}>Sharp Leasing Teams</h3>
              <p>Give your agents the training they actually want. Battle tested drills in their pocket. No boring compliance videos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container-narrow">
          <div className="section-eyebrow" style={{ textAlign: 'center' }}>Ready</div>
          <h2 className="cta-title">Build The Team You Actually Want.</h2>
          <p style={{ color: '#a8a594', fontSize: 18, marginBottom: 32 }}>
            Deploy in a day. Train in a week. Close in a month.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={() => router.push('/contact')}>
              Request Demo <ArrowRight size={16} />
            </button>
            <button className="btn-ghost" onClick={() => router.push('/pricing')}>See Pricing</button>
          </div>
        </div>
      </section>
    </div>
  );
}