'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function AboutPage() {
  const router = useRouter();
  return (
    <div className="fade-in">
      <section className="hero" style={{ padding: '80px 0 40px' }}>
        <div className="container">
          <div className="hero-eyebrow">About</div>
          <h1 className="hero-title">Built By Someone Who <span className="accent">Lives In The Leasing Office.</span></h1>
          <p className="hero-sub">The Gauntlet exists because most leasing training does not work. Corporate videos. Compliance modules. Binders nobody opens. This is different.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-hero">
            <div>
              <div className="section-eyebrow">The Founder</div>
              <h2 className="section-title">Eames</h2>
              <div style={{ color: '#f5f1e8', fontSize: 16, lineHeight: 1.7 }}>
                <p>
                  U.S. Army veteran. Finance degree from Grand Canyon University. Ten years in multifamily property management. Currently Regional Leasing Portfolio Manager at Living Residential in New Jersey.
                </p>
                <p>
                  I spent a decade watching brilliant leasing agents lose tours they should have closed. Watching managers try to scale their best coaching across dozens of properties. Watching training programs that teach compliance and call them sales. Nothing worked.
                </p>
                <p>
                  So I built The Gauntlet. Not from theory. From ten years of actually closing tours, coaching my own team, and studying every sales system from Belfort's straight line to the classic multifamily closing trilogy. This is what I use to train the agents in my own portfolio. Now it is available to yours.
                </p>
                <p style={{ fontStyle: 'italic', color: '#c9a227', marginTop: 24 }}>
                  "Passion applied with precision. Execute. Track. Adjust. Repeat."
                </p>
              </div>
            </div>
            <div className="founder-card">
              <div className="founder-avatar">E</div>
              <div className="display" style={{ fontSize: 22 }}>Eames</div>
              <div className="paper-dim" style={{ fontSize: 13, marginTop: 4 }}>Founder · The Gauntlet</div>
              <div style={{ marginTop: 20, paddingTop: 20, borderTop: '1px solid #2a2a22', display: 'flex', flexDirection: 'column', gap: 10, fontSize: 13 }}>
                <div><span className="gold">·</span> U.S. Army Veteran</div>
                <div><span className="gold">·</span> 10 Years Multifamily</div>
                <div><span className="gold">·</span> Regional Portfolio Manager</div>
                <div><span className="gold">·</span> NJ Licensed Real Estate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-surface" style={{ background: '#0f0f0a' }}>
        <div className="container-narrow">
          <div className="section-eyebrow">The Philosophy</div>
          <h2 className="section-title">What We Believe</h2>
          <div style={{ marginTop: 32 }}>
            <div className="principle">
              <h4>Train Closers, Not Tour Guides</h4>
              <p>Anyone can memorize amenities. A closer runs discovery, handles objections, and asks for the deal. That is a different skill and it can be trained.</p>
            </div>
            <div className="principle">
              <h4>Reps Beat Theory</h4>
              <p>You do not become a closer by reading a book. You become a closer by handling the same objection 100 times until the response is automatic. Our training is built for reps.</p>
            </div>
            <div className="principle">
              <h4>Honesty Beats Softening</h4>
              <p>Corporate training rewards politeness. Real coaching tells you exactly what went wrong. Our coach voice does not apologize for being direct.</p>
            </div>
            <div className="principle">
              <h4>Compliance Is Not Optional</h4>
              <p>Fair housing exposure kills companies. Every scenario in The Gauntlet is built on real compliance boundaries. We train the safe move and the closing move as the same move.</p>
            </div>
            <div className="principle">
              <h4>Shipped Beats Perfect</h4>
              <p>We update content quarterly based on what your team actually hits in the field. This is not a training program that ages in a folder. It moves with the market.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container-narrow">
          <h2 className="cta-title">Ready To Train Real Closers?</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap', marginTop: 32 }}>
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