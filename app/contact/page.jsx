'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Building, Check, Mail, Phone } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', company: '', properties: '', agents: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  return (
    <div className="fade-in">
      <section className="hero" style={{ padding: '80px 0 40px' }}>
        <div className="container">
          <div className="hero-eyebrow">Get In Touch</div>
          <h1 className="hero-title">Let's Build <span className="accent">Real Closers.</span></h1>
          <p className="hero-sub">Request a demo, ask about pricing, or just ask a question. We respond within one business day.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <div className="contact-grid">
            <div>
              {submitted ? (
                <div className="card" style={{ padding: 40, textAlign: 'center', borderLeft: '3px solid #c9a227' }}>
                  <Check size={48} className="gold" style={{ marginBottom: 16 }} />
                  <div className="display" style={{ fontSize: 28, marginBottom: 12 }}>Message Received</div>
                  <p style={{ color: '#a8a594', fontSize: 15, lineHeight: 1.6 }}>
                    We will get back to you within one business day. Usually much faster.
                  </p>
                  <p style={{ color: '#c9a227', fontStyle: 'italic', marginTop: 20, fontSize: 13 }}>
                    "Passion applied with precision."
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mono-label gold" style={{ marginBottom: 24 }}>Request A Demo</div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Name</label>
                      <input type="text" className="input-field" value={form.name} onChange={update('name')} required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email</label>
                      <input type="email" className="input-field" value={form.email} onChange={update('email')} required />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Company</label>
                    <input type="text" className="input-field" value={form.company} onChange={update('company')} required />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Number Of Properties</label>
                      <input type="text" className="input-field" placeholder="e.g., 5" value={form.properties} onChange={update('properties')} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Total Leasing Agents</label>
                      <input type="text" className="input-field" placeholder="e.g., 25" value={form.agents} onChange={update('agents')} />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea
                      className="input-field"
                      rows="5"
                      style={{ resize: 'vertical', fontFamily: 'inherit' }}
                      value={form.message}
                      onChange={update('message')}
                      placeholder="Tell us what you are looking for. Number of properties, current training situation, timeline, questions."
                    />
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Send Message <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>

            <div>
              <div className="card" style={{ padding: 28, marginBottom: 16 }}>
                <Mail size={20} className="gold" style={{ marginBottom: 12 }} />
                <div className="mono-label paper-dim" style={{ marginBottom: 6 }}>Email</div>
                <div style={{ fontSize: 16, fontWeight: 600 }}>boomboom@thesalesgauntlet.co</div>
                <div style={{ color: '#a8a594', fontSize: 13, marginTop: 8 }}>Response within one business day</div>
              </div>

              <div className="card" style={{ padding: 28, marginBottom: 16 }}>
                <Phone size={20} className="gold" style={{ marginBottom: 12 }} />
                <div className="mono-label paper-dim" style={{ marginBottom: 6 }}>Phone</div>
                <div style={{ fontSize: 16, fontWeight: 600 }}>(602) 513-1132</div>
                <div style={{ color: '#a8a594', fontSize: 13, marginTop: 8 }}>Direct line, business hours ET</div>
              </div>

              <div className="card" style={{ padding: 28, marginBottom: 16 }}>
                <Building size={20} className="gold" style={{ marginBottom: 12 }} />
                <div className="mono-label paper-dim" style={{ marginBottom: 6 }}>Based In</div>
                <div style={{ fontSize: 16, fontWeight: 600 }}>Princeton, NJ</div>
                <div style={{ color: '#a8a594', fontSize: 13, marginTop: 8 }}>Serving property management companies nationwide</div>
              </div>

              <div className="card" style={{ padding: 28, borderLeft: '3px solid #c9a227' }}>
                <div className="mono-label gold" style={{ marginBottom: 10 }}>What Happens Next</div>
                <div style={{ fontSize: 13, lineHeight: 1.7 }}>
                  <div style={{ marginBottom: 12 }}><span className="gold display" style={{ fontSize: 14, marginRight: 8 }}>01</span>We respond within one business day</div>
                  <div style={{ marginBottom: 12 }}><span className="gold display" style={{ fontSize: 14, marginRight: 8 }}>02</span>30 minute discovery call to understand your team</div>
                  <div style={{ marginBottom: 12 }}><span className="gold display" style={{ fontSize: 14, marginRight: 8 }}>03</span>Live demo of The Gauntlet with your team</div>
                  <div><span className="gold display" style={{ fontSize: 14, marginRight: 8 }}>04</span>Custom deployment plan and pricing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}