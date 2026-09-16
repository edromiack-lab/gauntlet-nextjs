import PricingCalculator from './PricingCalculator';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Pricing',
  description: 'Per-agent seat pricing for The Sales Gauntlet. Recruit tier from $299/mo, Squad tier from $599/mo, custom Battalion pricing for teams of 7+.',
};

export default function PricingPage() {
  return (
    <div className="fade-in">
      <section className="hero" style={{ padding: '80px 0 40px' }}>
        <div className="container">
          <div className="hero-eyebrow">Pricing</div>
          <h1 className="hero-title">Pay Per <span className="accent">Agent Seat.</span></h1>
          <p className="hero-sub">Per agent seat. Unlimited practice. All nine training operations plus the Real Gauntlet. Fair housing combat and Boiler Room included in every tier. Cancel any time on monthly plans.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <PricingCalculator />
        </div>
      </section>

      <section className="cta-section">
        <div className="container-narrow">
          <h2 className="cta-title">Not Sure Which Tier?</h2>
          <p style={{ color: '#a8a594', fontSize: 18, marginBottom: 32 }}>Talk to Eames directly. Real answers, not sales calls.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Talk To Eames <ArrowRight size={16} /></Link>
            <Link href="/demo" className="btn-ghost">Try Demo</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
