'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';
import Link from 'next/link';

export default function PricingCalculator() {
  const [billing, setBilling] = useState('monthly');
  const [recruitSeats, setRecruitSeats] = useState(1);
  const [squadSeats, setSquadSeats] = useState(3);

  const additionalSeatPrice = billing === 'annual' ? 215 : 269;

  const recruitBase = billing === 'annual' ? 239 : 299;
  const recruitAdditional = Math.max(0, recruitSeats - 1) * additionalSeatPrice;
  const recruitTotal = recruitBase + recruitAdditional;

  const squadBase = billing === 'annual' ? 479 : 599;
  const squadAdditional = Math.max(0, squadSeats - 3) * additionalSeatPrice;
  const squadTotal = squadBase + squadAdditional;

  return (
    <>
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <div className="pricing-toggle">
          <button className={billing === 'monthly' ? 'active' : ''} onClick={() => setBilling('monthly')}>
            Monthly
          </button>
          <button className={billing === 'annual' ? 'active' : ''} onClick={() => setBilling('annual')}>
            Annual <span className="save-badge">SAVE 20%</span>
          </button>
        </div>
      </div>

      <div className="pricing-grid">
        {/* RECRUIT */}
        <div className="pricing-card">
          <div className="tier-name">Recruit</div>
          <div className="tier-tagline">Solo agents and small teams starting out. Scale from 1 to 3 agents.</div>
          <div className="price-block">
            <span className="price-amount">${recruitTotal}</span>
            <span className="price-period">/month</span>
            {billing === 'annual' && <div style={{ fontSize: 12, color: '#a5c576', marginTop: 6 }}>Billed annually · saves ${((299 * 12) - (recruitTotal * 12)).toFixed(0)}/year</div>}
          </div>
          <div className="seat-selector">
            <div className="seat-label">Agent seats: {recruitSeats}</div>
            <div className="seat-buttons">
              {[1, 2, 3].map((n) => (
                <button key={n} className={`seat-btn ${recruitSeats === n ? 'active' : ''}`} onClick={() => setRecruitSeats(n)}>
                  {n} agent{n > 1 ? 's' : ''}
                </button>
              ))}
            </div>
            {recruitSeats > 1 && (
              <div className="savings-note">
                ${additionalSeatPrice} per additional agent (10% off standard rate)
              </div>
            )}
          </div>
          <ul className="tier-features">
            <li>Start with one agent, add up to two more</li>
            <li>Ten percent off each additional agent</li>
            <li>All nine training operations</li>
            <li>Fair housing combat included</li>
            <li>Boiler Room timer training included</li>
            <li>Unlimited practice sessions</li>
            <li>PWA install on any device</li>
            <li>Standard email support</li>
          </ul>
          <Link href="/contact" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Get Started</Link>
        </div>

        {/* SQUAD (featured) */}
        <div className="pricing-card featured">
          <div style={{ position: 'absolute', top: -12, left: 24, background: '#c9a227', color: '#0a0a0a', padding: '4px 10px', borderRadius: 2, fontFamily: 'Manrope', fontWeight: 700, fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Most Popular</div>
          <div className="tier-name">Squad</div>
          <div className="tier-tagline">Growing teams with a manager. Scale from 3 to 6 agents plus manager dashboard.</div>
          <div className="price-block">
            <span className="price-amount">${squadTotal}</span>
            <span className="price-period">/month</span>
            {billing === 'annual' && <div style={{ fontSize: 12, color: '#a5c576', marginTop: 6 }}>Billed annually · saves ${((599 * 12) - (squadTotal * 12)).toFixed(0)}/year</div>}
          </div>
          <div className="seat-selector">
            <div className="seat-label">Agent seats: {squadSeats}</div>
            <div className="seat-buttons">
              {[3, 4, 5, 6].map((n) => (
                <button key={n} className={`seat-btn ${squadSeats === n ? 'active' : ''}`} onClick={() => setSquadSeats(n)}>
                  {n} agents
                </button>
              ))}
            </div>
            {squadSeats > 3 && (
              <div className="savings-note">
                ${additionalSeatPrice} per additional agent above base 3 (10% off)
              </div>
            )}
          </div>
          <ul className="tier-features">
            <li>Three agents included, scale up to six</li>
            <li>Ten percent off each additional agent</li>
            <li>All nine training operations</li>
            <li>Fair housing combat included</li>
            <li>Boiler Room timer training included</li>
            <li>Manager dashboard with leaderboard</li>
            <li>Team performance analytics</li>
            <li>Custom onboarding session</li>
            <li>Priority support</li>
            <li>Compliance training certificate</li>
          </ul>
          <Link href="/contact" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Get Started</Link>
        </div>

        {/* BATTALION */}
        <div className="pricing-card">
          <div className="tier-name">Battalion</div>
          <div className="tier-tagline">Portfolio and enterprise teams. 7 or more agents. Custom pricing.</div>
          <div className="price-block">
            <span className="price-amount">Custom</span>
          </div>
          <ul className="tier-features">
            <li>7 or more agent seats</li>
            <li>Volume discount schedule</li>
            <li>All operations plus custom scenarios</li>
            <li>Multi-property manager dashboard</li>
            <li>Custom scenario development</li>
            <li>Dedicated onboarding and training</li>
            <li>Custom compliance content for your markets</li>
            <li>Named account manager</li>
            <li>SSO and admin controls</li>
            <li>Custom SLA</li>
          </ul>
          <Link href="/contact" className="btn-ghost" style={{ width: '100%', justifyContent: 'center' }}>Contact Sales</Link>
        </div>
      </div>

      <div style={{ marginTop: 40, padding: 24, background: '#14140e', border: '1px solid #2a2a22', borderLeft: '3px solid #c9a227', borderRadius: 2, maxWidth: 720, marginLeft: 'auto', marginRight: 'auto' }}>
        <div className="mono-label gold" style={{ marginBottom: 8 }}>Every Tier Includes</div>
        <div style={{ fontSize: 14, lineHeight: 1.7, color: '#f5f1e8' }}>
          Nine training operations. Fair Housing Combat (OP 08) as a full training operation. The Boiler Room (OP 09) with real countdown timer, emotional meters, and manager avatar. Unlimited practice. PWA install on any device. No per-usage fees or hidden costs.
        </div>
      </div>
    </>
  );
}
