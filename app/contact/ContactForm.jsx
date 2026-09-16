'use client';

import { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    teamSize: '',
    message: '',
  });

  function updateField(field, value) {
    setForm({ ...form, [field]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Sales Gauntlet inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nTeam size: ${form.teamSize}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:boomboom@thesalesgauntlet.co?subject=${subject}&body=${body}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={form.name}
          onChange={(e) => updateField('name', e.target.value)}
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={(e) => updateField('email', e.target.value)}
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="company">Company or Portfolio</label>
        <input
          id="company"
          type="text"
          value={form.company}
          onChange={(e) => updateField('company', e.target.value)}
        />
      </div>
      <div className="form-field">
        <label htmlFor="teamSize">Team Size</label>
        <select
          id="teamSize"
          value={form.teamSize}
          onChange={(e) => updateField('teamSize', e.target.value)}
        >
          <option value="">Select team size</option>
          <option value="1">Solo agent</option>
          <option value="2-3">2 to 3 agents</option>
          <option value="4-6">4 to 6 agents</option>
          <option value="7-15">7 to 15 agents</option>
          <option value="16+">16 or more agents</option>
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="message">What are you looking for?</label>
        <textarea
          id="message"
          value={form.message}
          onChange={(e) => updateField('message', e.target.value)}
          placeholder="Tell me about your team, your training goals, and your timeline."
          required
        />
      </div>
      <button type="submit" className="btn-primary" style={{ marginTop: 8 }}>
        <Mail size={16} /> Send Message
      </button>
      <div style={{ fontSize: 12, color: '#a8a594', marginTop: 8 }}>
        Submitting opens your email client with the message pre-filled. Direct reply comes from Eames.
      </div>
    </form>
  );
}
