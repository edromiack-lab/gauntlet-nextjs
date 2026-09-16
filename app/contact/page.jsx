import ContactForm from './ContactForm';

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with Eames. Email boomboom@thesalesgauntlet.co or call (602) 513-1132. Real answers, not sales calls.',
};

export default function ContactPage() {
  return (
    <div className="fade-in">
      <section className="hero" style={{ padding: '80px 0 40px' }}>
        <div className="container-narrow">
          <div className="hero-eyebrow">Contact</div>
          <h1 className="hero-title">Talk To <span className="accent">Eames.</span></h1>
          <p className="hero-sub">
            Direct line to the founder. No sales team, no funnel, no automated sequences. Reach out with real questions about your team, your training goals, or your deployment timeline.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container-narrow">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 48, alignItems: 'start' }}>
            <div>
              <ContactForm />
            </div>
            <aside>
              <div style={{ background: '#14140e', border: '1px solid #2a2a22', padding: 24, borderRadius: 4 }}>
                <div className="mono-label gold" style={{ marginBottom: 16 }}>Prefer To Talk?</div>
                <div style={{ marginBottom: 16 }}>
                  <div style={{ fontSize: 11, color: '#a8a594', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>Email</div>
                  <a href="mailto:boomboom@thesalesgauntlet.co" style={{ color: '#c9a227', fontSize: 14, wordBreak: 'break-all' }}>boomboom@thesalesgauntlet.co</a>
                </div>
                <div style={{ marginBottom: 16 }}>
                  <div style={{ fontSize: 11, color: '#a8a594', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>Phone</div>
                  <a href="tel:6025131132" style={{ color: '#c9a227', fontSize: 14 }}>(602) 513-1132</a>
                </div>
                <div>
                  <div style={{ fontSize: 11, color: '#a8a594', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>Response Time</div>
                  <div style={{ fontSize: 14, color: '#f5f1e8' }}>Usually within 24 hours. Often faster.</div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
