'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

export default function PricingPage() {
  const router = useRouter();
  const [billing, setBilling] = useState('monthly');
  const [recruitSeats, setRecruitSeats] = useState(1);
  const [squadSeats, setSquadSeats] = useState(3);

  const tiers = [
    {
      name: 'Recruit',
      monthlyPrice: 299,
      annualPrice: 239,
      period: '/ month',
      seats: 'Up to 3 agent seats',
      desc: 'For the individual leasing pro or a small team of two to three agents. Each additional agent saves ten percent.',
      hasSeatSelector: true,
      minSeats: 1,
      maxSeats: 3,
      features: [
        'Start with one agent, add up to two more',
        'Ten percent off each additional agent',
        'All nine training operations',
        'Fair housing combat included',
        'Boiler Room timer training included',
        'Unlimited practice sessions',
        'PWA install on any device',
        'Standard email support'
      ],
      cta: 'Start Free Trial',
    },
    {
      name: 'Squad',
      monthlyPrice: 599,
      annualPrice: 479,
      period: '/ month',
      seats: '3 to 6 agent seats',
      desc: 'For leasing teams from three to six agents at a single community. Everything a manager needs to run team training at scale.',
      featured: true,
      hasSeatSelector: true,
      minSeats: 3,
      maxSeats: 6,
      features: [
        'Three agents included, scale up to six',
        'Ten percent off each additional agent',
        'All nine training operations',
        'Fair housing combat included',
        'Boiler Room timer training included',
        'Manager dashboard with leaderboard',
        'Team performance analytics',
        'Custom onboarding session',
        'Priority support',
        'Compliance training certificate'
      ],
      cta: 'Request Demo',
    },
    {
      name: 'Battalion',
      monthlyPrice: null,
      annualPrice: null,
      customPrice: 'Custom',
      period: 'volume pricing',
      seats: 'Unlimited agent seats',
      desc: 'For portfolios and property management companies deploying across multiple communities.',
      features: [
        'Everything in Squad',
        'Unlimited agent seats',
        'White label option',
        'Custom scenarios for your properties',
        'Regional manager training sessions',
        'Dedicated customer success manager',
        'API access and integrations',
        'Portfolio-wide reporting',
        'Quarterly executive reviews'
      ],
      cta: 'Contact Sales',
    }
  ];

  const faqs = [
    {
      q: 'What kind of properties is this built for?',
      a: 'Multifamily residential of any size. Conventional, luxury, mid-market, student housing, senior living. If you have leasing agents running tours, this trains them.'
    },
    {
      q: 'How does per agent seat pricing work?',
      a: 'Each seat is one named agent login. Their scores, progress, and history stay tied to that seat. Recruit starts at $299 for one agent and gives you ten percent off each additional agent up to three seats total. Squad starts at $599 for three agents and lets you scale up to six seats with the same ten percent discount on each additional. If an agent leaves you can reassign the seat to a new hire. Battalion is for portfolios needing more than six seats or custom features.'
    },
    {
      q: 'How long is onboarding?',
      a: 'Same day for Recruit. A week for Squad including a live team session. Battalion is custom based on portfolio complexity.'
    },
    {
      q: 'Do you offer a free trial?',
      a: 'Yes. Fourteen days free on Recruit and Squad. No credit card required. Full access to every operation.'
    },
    {
      q: 'How does the fair housing training work?',
      a: 'OP 08 Fair Housing Combat is a dedicated operation with eight real scenarios covering federal FHA plus NJ Law Against Discrimination. Steering, ESAs, Section 8 vouchers, application denials, tester callers, occupancy limits. Legal citations in every feedback line so agents learn the law not just the moves.'
    },
    {
      q: 'Can we customize scenarios for our properties?',
      a: 'Yes on Battalion. We build scenarios based on your actual objections, your rent tiers, your amenity packages, and your specific competitor set.'
    },
    {
      q: 'What if my team does not use it?',
      a: 'You can cancel any time on monthly plans. If your team is not opening it in month one, we will help you fix the rollout or refund you.'
    },
    {
      q: 'Do you integrate with our leasing software?',
      a: 'API access is available on Battalion. We support integrations with Yardi, RealPage, Entrata, and other major PMS platforms. Ask us about your specific setup.'
    }
  ];

  return (
    <div className="fade-in">
      <section className="hero" style={{ padding: '80px 0 40px' }}>
        <div className="container">
          <div className="hero-eyebrow">Pricing</div>
          <h1 className="hero-title">Priced To <span className="accent">Deploy Fast.</span></h1>
          <p className="hero-sub">Per agent seat. Unlimited practice. All nine training operations plus the Real Gauntlet. Fair housing combat and Boiler Room included in every tier. Cancel any time on monthly plans.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">

          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 40 }}>
            <div style={{ display: 'inline-flex', background: '#0f0f0a', border: '1px solid #2a2a22', borderRadius: 4, padding: 4 }}>
              <button
                onClick={() => setBilling('monthly')}
                style={{
                  padding: '10px 20px',
                  background: billing === 'monthly' ? '#c9a227' : 'transparent',
                  color: billing === 'monthly' ? '#0a0a0a' : '#a8a594',
                  border: 'none',
                  borderRadius: 2,
                  cursor: 'pointer',
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  fontSize: 12,
                  textTransform: 'uppercase',
                  transition: 'all 0.2s'
                }}
              >
                Monthly
              </button>
              <button
                onClick={() => setBilling('annual')}
                style={{
                  padding: '10px 20px',
                  background: billing === 'annual' ? '#c9a227' : 'transparent',
                  color: billing === 'annual' ? '#0a0a0a' : '#a8a594',
                  border: 'none',
                  borderRadius: 2,
                  cursor: 'pointer',
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  fontSize: 12,
                  textTransform: 'uppercase',
                  transition: 'all 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8
                }}
              >
                Annual
                <span style={{
                  fontSize: 10,
                  padding: '2px 6px',
                  background: billing === 'annual' ? 'rgba(10,10,10,0.2)' : 'rgba(201,162,39,0.2)',
                  color: billing === 'annual' ? '#0a0a0a' : '#c9a227',
                  borderRadius: 2,
                  letterSpacing: '0.05em'
                }}>SAVE 20%</span>
              </button>
            </div>
          </div>

          <div className="pricing-grid">
            {tiers.map((tier) => {
              const basePrice = billing === 'annual' ? tier.annualPrice : tier.monthlyPrice;

              // Discount per additional seat is 10% off the Recruit per-seat rate ($269 monthly, $215 annual)
              const additionalSeatCost = billing === 'annual' ? Math.round(239 * 0.9) : Math.round(299 * 0.9);

              // Get the right seat count based on which tier
              const seats = tier.name === 'Recruit' ? recruitSeats : (tier.name === 'Squad' ? squadSeats : null);
              const setSeats = tier.name === 'Recruit' ? setRecruitSeats : (tier.name === 'Squad' ? setSquadSeats : null);

              let displayPrice;
              let displayPeriod;
              let savingsText = null;

              if (tier.customPrice) {
                displayPrice = tier.customPrice;
                displayPeriod = tier.period;
              } else if (tier.hasSeatSelector) {
                const total = basePrice + (additionalSeatCost * (seats - tier.minSeats));
                displayPrice = `$${total}`;
                displayPeriod = billing === 'annual' ? '/ month, billed annually' : '/ month';

                // Calculate savings vs no-discount pricing
                if (seats > tier.minSeats) {
                  const fullPricePerSeat = billing === 'annual' ? 239 : 299;
                  const noDiscount = basePrice + (fullPricePerSeat * (seats - tier.minSeats));
                  const savings = noDiscount - total;
                  savingsText = `Save $${savings}/mo with additional agent discount`;
                }
              } else {
                displayPrice = `$${basePrice}`;
                displayPeriod = billing === 'annual' ? `${tier.period}, billed annually` : tier.period;
              }

              // Build the seat button range for the selector
              const seatOptions = tier.hasSeatSelector
                ? Array.from({ length: tier.maxSeats - tier.minSeats + 1 }, (_, i) => tier.minSeats + i)
                : [];

              return (
                <div key={tier.name} className={`pricing-card ${tier.featured ? 'featured' : ''}`}>
                  {tier.featured && <div className="badge">Best Value</div>}
                  <div className="pricing-tier">{tier.name}</div>
                  <div className="pricing-price">
                    {displayPrice} <span className="period">{displayPeriod}</span>
                  </div>
                  {tier.hasSeatSelector ? (
                    <div style={{ marginTop: 12, marginBottom: 16, padding: '12px 0', borderTop: '1px solid #2a2a22', borderBottom: '1px solid #2a2a22' }}>
                      <div className="mono-label paper-dim" style={{ marginBottom: 8, fontSize: 10 }}>Number Of Agent Seats</div>
                      <div style={{ display: 'flex', gap: 8 }}>
                        {seatOptions.map((n) => (
                          <button
                            key={n}
                            onClick={() => setSeats(n)}
                            style={{
                              flex: 1,
                              padding: '10px 0',
                              background: seats === n ? '#c9a227' : 'transparent',
                              color: seats === n ? '#0a0a0a' : '#a8a594',
                              border: `1px solid ${seats === n ? '#c9a227' : '#2a2a22'}`,
                              borderRadius: 2,
                              cursor: 'pointer',
                              fontFamily: "'Manrope', sans-serif",
                              fontWeight: 700,
                              fontSize: 14,
                              transition: 'all 0.15s'
                            }}
                          >
                            {n}
                          </button>
                        ))}
                      </div>
                      {savingsText && (
                        <div className="gold-bright" style={{ marginTop: 8, fontSize: 11, textAlign: 'center', letterSpacing: '0.05em' }}>
                          {savingsText}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="mono-label gold" style={{ marginTop: 8, marginBottom: 12 }}>{tier.seats}</div>
                  )}
                  <p className="pricing-desc">{tier.desc}</p>
                  <ul className="pricing-features">
                    {tier.features.map((f, i) => (
                      <li key={i}><Check size={16} className="check" /> {f}</li>
                    ))}
                  </ul>
                  <button
                    className={tier.featured ? 'btn-primary' : 'btn-ghost'}
                    style={{ width: '100%', justifyContent: 'center' }}
                    onClick={() => router.push('/contact')}
                  >
                    {tier.cta}
                  </button>
                </div>
              );
            })}
          </div>
          <div style={{ textAlign: 'center', marginTop: 32, color: '#a8a594', fontSize: 14 }}>
            {billing === 'annual'
              ? 'Annual plans billed upfront. Twenty percent savings versus monthly.'
              : 'Prefer to lock in savings? Switch to annual and save twenty percent.'}
          </div>
        </div>
      </section>

      <section className="section bg-surface" style={{ background: '#0f0f0a' }}>
        <div className="container-narrow">
          <div className="section-eyebrow">Questions</div>
          <h2 className="section-title">Frequently Asked</h2>
          <div style={{ marginTop: 32 }}>
            {faqs.map((f, i) => (
              <div key={i} className="faq-item">
                <h4>{f.q}</h4>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container-narrow">
          <h2 className="cta-title">Still Have Questions?</h2>
          <p style={{ color: '#a8a594', fontSize: 18, marginBottom: 32 }}>Get a personalized walkthrough. See if it fits your team.</p>
          <button className="btn-primary" onClick={() => router.push('/contact')}>
            Talk To Us <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}