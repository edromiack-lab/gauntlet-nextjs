import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'About',
  description: 'The Sales Gauntlet was built by Eames Dromiack, a portfolio manager and Army veteran with a decade managing 3,600 units of luxury multifamily across Chicago, New Jersey, and Dallas.',
};

export default function AboutPage() {
  return (
    <div className="fade-in">
      <section className="hero" style={{ padding: '80px 0 60px' }}>
        <div className="container">
          <div className="about-hero">
            <div>
              <div className="hero-eyebrow">Built By Someone Who Actually Trains Agents</div>
              <h2 className="section-title">Eames.</h2>
              <div style={{ fontSize: 16, color: '#a8a594', lineHeight: 1.7, marginBottom: 20 }}>
                <p style={{ marginBottom: 16 }}>
                  Ten years in property management. Regional manager. 3,600 units across NJ, Dallas, and luxury multifamily in Chicago. U.S. Army veteran. Finance degree from Grand Canyon University. Built and runs Predict Industrial, a commercial brokerage specializing in industrial outdoor storage and drayage yards.
                </p>
                <p style={{ marginBottom: 16 }}>
                  I built The Gauntlet because compliance videos are boring and roleplay training is fake. Neither one drills the muscle memory an agent needs when a real prospect calls, a real fair housing tester probes for a violation, or a real applicant demands to know why they were denied.
                </p>
                <p style={{ marginBottom: 16 }}>
                  This is what the training I wish existed when I was managing my first team looks like. Every scenario is one I have coached an agent through in a leasing office. Every objection is one I have handled or watched an agent fumble. Every fair housing situation is one I have seen come up in real time on a Tuesday afternoon.
                </p>
                <p>
                  Passion Applied With Precision. Execute. Track. Adjust. Repeat.
                </p>
              </div>
            </div>
            <div className="founder-card">
              <div className="founder-avatar">E</div>
              <div className="display" style={{ fontSize: 22 }}>Eames</div>
              <div style={{ color: '#a8a594', fontSize: 13, marginTop: 4, marginBottom: 16 }}>Founder · Portfolio Manager · Army Veteran</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 20, paddingTop: 20, borderTop: '1px solid #2a2a22' }}>
                <a href="mailto:boomboom@thesalesgauntlet.co" style={{ color: '#c9a227', fontSize: 13 }}>boomboom@thesalesgauntlet.co</a>
                <a href="tel:6025131132" style={{ color: '#c9a227', fontSize: 13 }}>(602) 513-1132</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section charcoal">
        <div className="container-narrow">
          <div className="section-eyebrow">Why This Exists</div>
          <h2 className="section-title" style={{ marginBottom: 24 }}>The Training Gap Nobody Fills.</h2>
          <div style={{ fontSize: 15, color: '#f5f1e8', lineHeight: 1.8 }}>
            <p style={{ marginBottom: 20 }}>
              Every property management company runs some form of leasing training. Most of it is a mix of recorded videos, PDF playbooks, and once-a-quarter roleplay sessions. Compliance training is a slide deck the agent clicks through on their first day and never looks at again.
            </p>
            <p style={{ marginBottom: 20 }}>
              None of this trains for the actual moments that decide deals. The moment a hot inbound calls and needs to be booked in ten seconds before they call the next property. The moment a fair housing tester asks a pointed question and the agent has three seconds to answer without a violation. The moment an angry applicant callback wants to know why they got denied and the agent has to explain without triggering FCRA.
            </p>
            <p style={{ marginBottom: 20 }}>
              The Gauntlet trains those moments. Every scenario is a real situation. Every scored response mirrors the actual choice an agent would make in the office. Every debrief tells them exactly what to do differently next time.
            </p>
            <p>
              And it uses the one thing no other training uses. Real timer pressure.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container-narrow">
          <h2 className="cta-title">Ready To Talk?</h2>
          <p style={{ color: '#a8a594', fontSize: 18, marginBottom: 32 }}>Reach out directly. No sales calls, no funnel, no automated sequences.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Contact Eames <ArrowRight size={16} /></Link>
            <Link href="/demo" className="btn-ghost">Try Live Demo</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
