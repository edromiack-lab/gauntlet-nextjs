import Link from 'next/link';
import { ArrowRight, Target, Trophy, RefreshCw, Zap } from 'lucide-react';

export const metadata = {
  title: 'Methodology',
  description:
    'How The Sales Gauntlet teaches. Built on how people actually learn skills: by doing them under pressure, getting scored, and going again. Instructional design by Amanda Diaz.',
};

const PRINCIPLES = [
  {
    icon: Target,
    title: 'Stated Objective',
    desc: "Every drill has a stated objective. Before you start, you know exactly what you're supposed to be able to do when you finish. Not learn objection handling. Something specific, like holding your price when a prospect says the place down the street is cheaper.",
  },
  {
    icon: Trophy,
    title: 'Mastery Over Scores',
    desc: "A number tells you how you did. A rubric tells you what good looks like. Every module scores against a tiered rubric so agents can see the gap between where they are and where they need to be, and managers can coach to it.",
  },
  {
    icon: RefreshCw,
    title: 'Repetition On A Schedule',
    desc: "Skills fade fast without reinforcement. Modules are designed to be revisited, with drills cycling back at intervals so the reps stick instead of washing out after a week.",
  },
  {
    icon: Zap,
    title: 'Feedback While It Still Matters',
    desc: "Scores and breakdowns show up immediately, when the attempt is still fresh and the agent can connect what they said to why it landed or did not.",
  },
];

export default function MethodologyPage() {
  return (
    <div className="fade-in">
      <section className="hero">
        <div className="container">
          <div className="hero-eyebrow">Methodology</div>
          <h1 className="hero-title">
            How The <span className="accent">Gauntlet</span><br />Teaches.
          </h1>
          <p className="hero-sub">
            Most sales training is a video and a quiz. Agents watch, nod, forget. The Gauntlet is built on how people actually learn skills: by doing them under pressure, getting scored, and going again.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          <div className="section-eyebrow">Four Principles</div>
          <h2 className="section-title" style={{ marginBottom: 48 }}>What Makes The Training Actually Stick.</h2>

          {PRINCIPLES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              style={{
                marginBottom: 40,
                paddingBottom: 40,
                borderBottom: '1px solid #2a2a22',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'start', gap: 20, marginBottom: 16, flexWrap: 'wrap' }}>
                <div
                  style={{
                    background: '#14140e',
                    border: '1px solid #c9a227',
                    width: 60,
                    height: 60,
                    borderRadius: 4,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Icon size={26} className="gold" />
                </div>
                <div style={{ flex: 1, minWidth: 240 }}>
                  <h3
                    style={{
                      fontFamily: 'Anton, sans-serif',
                      fontSize: 30,
                      textTransform: 'uppercase',
                      letterSpacing: '0.02em',
                      lineHeight: 1,
                      color: '#f5f1e8',
                    }}
                  >
                    {title}
                  </h3>
                </div>
              </div>
              <p style={{ color: '#a8a594', fontSize: 16, lineHeight: 1.7 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section charcoal">
        <div className="container-narrow">
          <div className="section-eyebrow">Instructional Design</div>
          <h2 className="section-title" style={{ marginBottom: 24 }}>The Curriculum Backbone.</h2>
          <div style={{ fontSize: 15, color: '#f5f1e8', lineHeight: 1.8, marginBottom: 24 }}>
            <p style={{ marginBottom: 24 }}>
              The Gauntlet's learning framework was developed with{' '}
              <span style={{ color: '#c9a227', fontWeight: 700 }}>Amanda Diaz</span>, a classroom
              educator with over fifteen years of experience in curriculum design and student
              assessment. Her work ensures every module follows sound instructional principles:
              clear objectives, measurable mastery, spaced practice, and immediate feedback.
            </p>
            <p>
              Built by <span style={{ color: '#c9a227', fontWeight: 700 }}>Eames Dromiack</span>,
              ten years managing leasing teams across New Jersey, Pennsylvania, Dallas, Chicago,
              and Phoenix.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container-narrow">
          <h2 className="cta-title">See The Methodology In Action.</h2>
          <p style={{ color: '#a8a594', fontSize: 18, marginBottom: 32 }}>
            Try a live drill in the demo. Feel the timer. Get scored.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/demo" className="btn-primary">
              Try Live Demo <ArrowRight size={16} />
            </Link>
            <Link href="/features" className="btn-ghost">
              See Features
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
