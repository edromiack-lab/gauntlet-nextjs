'use client';

import { useState, useEffect } from 'react';
import { Crosshair, Target, BookOpen, Zap } from 'lucide-react';

// ============================================================================
// BOILER ROOM LITE DEMO
// ============================================================================
function DemoBoilerCard() {
  const scenario = {
    callerName: 'Jenna Reyes',
    callerSource: 'Internet lead, saw listing 4hr ago',
    baseTime: 22,
    turns: [
      {
        prospect: "Hey, I saw your 2 bedroom online. Is it still available?",
        options: [
          { text: "Yes we have a few 2 bedroom floor plans, let me pull up which one you saw.", score: 5, type: 'mid', label: 'Too much air', feedback: "You confirmed but handed pace back to her. On a hot inbound, book first, sort inventory later." },
          { text: "Yes it is. Want to tour today or this week?", score: 10, type: 'good', label: 'That is the play', feedback: "Fast, confirmed, moved straight to booking. That is the whole inbound in one line." },
          { text: "Yes we have three 2 bedroom floor plans from 950 to 1150 square feet with different amenity packages...", score: 1, type: 'bad', label: 'Feature dump', feedback: "You buried the confirmation under a wall of features. She checked out at word 12." }
        ]
      },
      {
        prospect: "OK, tomorrow maybe? What's the earliest?",
        options: [
          { text: "Let me check with my manager and I'll call you back.", score: 0, type: 'bad', label: 'You lost her', feedback: "You broke the momentum. She is booking with someone else in the next ten minutes." },
          { text: "Whenever works for you, we're pretty flexible.", score: 4, type: 'mid', label: 'Weak', feedback: "Whenever sounds accommodating but you dodged the ask. Two times, make her pick." },
          { text: "I can do 10am or 2pm. Which works?", score: 10, type: 'good', label: 'Perfect close', feedback: "Either or with two specific times. She picks one. Tour booked in ten seconds." }
        ]
      },
      {
        prospect: "Let's do 2pm. Actually one question, what's the pet fee? I have a big dog.",
        options: [
          { text: "Great, 2pm works. What breed? We have some restrictions I want to walk through.", score: 4, type: 'mid', label: 'Can of worms', feedback: "You just turned a booked tour into a potential objection call. Handle breed in person." },
          { text: "Confirmed 2pm. Pet fee is $400, no weight limit. See you tomorrow.", score: 10, type: 'good', label: 'Lock and go', feedback: "Locked the appointment. Answered briefly. Did NOT open the breed conversation on the phone." },
          { text: "Big dog? We do have breed restrictions so I want to check that before you waste your time.", score: 0, type: 'bad', label: 'Waste your time', feedback: "Waste your time kills the tour before she even arrives." }
        ]
      }
    ]
  };

  const [phase, setPhase] = useState('ringing');
  const [currentTurn, setCurrentTurn] = useState(0);
  const [timeLeft, setTimeLeft] = useState(scenario.baseTime);
  const [scores, setScores] = useState([]);
  const [selectedIdx, setSelectedIdx] = useState(null);

  useEffect(() => {
    if (phase !== 'call') return;
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = (Date.now() - startTime) / 1000;
      const remaining = Math.max(0, scenario.baseTime - elapsed);
      setTimeLeft(remaining);
      if (remaining <= 0) {
        clearInterval(interval);
        setPhase('hangup');
      }
    }, 50);
    return () => clearInterval(interval);
  }, [phase, currentTurn]);

  function handleChoice(idx) {
    if (selectedIdx !== null) return;
    const turn = scenario.turns[currentTurn];
    const choice = turn.options[idx];
    setSelectedIdx(idx);
    setScores([...scores, { score: choice.score, label: choice.label, type: choice.type, feedback: choice.feedback }]);
  }

  function nextTurn() {
    if (currentTurn === scenario.turns.length - 1) {
      setPhase('debrief');
    } else {
      setCurrentTurn(currentTurn + 1);
      setSelectedIdx(null);
      setTimeLeft(scenario.baseTime);
      setPhase('call');
    }
  }

  function retry() {
    setCurrentTurn(0);
    setTimeLeft(scenario.baseTime);
    setScores([]);
    setSelectedIdx(null);
    setPhase('ringing');
  }

  if (phase === 'ringing') {
    return (
      <div>
        <div className="mono-label gold" style={{ marginBottom: 8 }}>Try It Live</div>
        <h2 style={{ fontSize: 28, marginBottom: 12, fontFamily: 'Anton, sans-serif', textTransform: 'uppercase', letterSpacing: '0.02em' }}>The Boiler Room</h2>
        <p style={{ color: '#a8a594', marginBottom: 32, fontSize: 15, lineHeight: 1.6 }}>A real internet lead is calling. You have {scenario.baseTime} seconds to respond each turn. Take too long and she hangs up.</p>
        <div style={{ textAlign: 'center', padding: '40px 20px', background: '#14140e', border: '2px solid #c9a227', borderRadius: 4, boxShadow: '0 0 40px rgba(201, 162, 39, 0.2)' }}>
          <div style={{ fontSize: 60, marginBottom: 16 }}>📞</div>
          <div className="mono-label gold" style={{ marginBottom: 8, letterSpacing: '0.25em' }}>Incoming Call</div>
          <div style={{ fontSize: 26, marginBottom: 4, fontFamily: 'Anton, sans-serif', textTransform: 'uppercase' }}>{scenario.callerName}</div>
          <div style={{ color: '#a8a594', fontSize: 13, marginBottom: 28 }}>{scenario.callerSource}</div>
          <button className="btn-primary" onClick={() => setPhase('call')} style={{ padding: '16px 40px', fontSize: 14 }}>Answer</button>
          <div style={{ marginTop: 24, padding: '10px 14px', background: 'rgba(201, 162, 39, 0.1)', borderLeft: '2px solid #c9a227', fontSize: 12, textAlign: 'left', color: '#f5f1e8', lineHeight: 1.5 }}>
            <strong style={{ color: '#c9a227' }}>⏱ Timer starts the moment you answer.</strong>
          </div>
        </div>
      </div>
    );
  }

  if (phase === 'hangup') {
    return (
      <div>
        <div className="mono-label gold" style={{ marginBottom: 8 }}>Boiler Room Demo</div>
        <h2 style={{ fontSize: 28, marginBottom: 24, fontFamily: 'Anton, sans-serif', textTransform: 'uppercase' }}>The Boiler Room</h2>
        <div style={{ textAlign: 'center', padding: '50px 24px', background: '#14140e', border: '2px solid #d94a2f', borderRadius: 4 }}>
          <div style={{ fontSize: 50, marginBottom: 16 }}>📵</div>
          <div style={{ fontSize: 32, marginBottom: 8, fontFamily: 'Anton, sans-serif', textTransform: 'uppercase' }}>Click.</div>
          <div style={{ color: '#a8a594', fontSize: 14, marginBottom: 8 }}>The line goes dead.</div>
          <div style={{ color: '#d94a2f', fontFamily: 'Manrope, sans-serif', fontWeight: 700, letterSpacing: '0.2em', fontSize: 11, textTransform: 'uppercase', margin: '20px 0 24px' }}>You took too long. She hung up.</div>
          <div style={{ color: '#d94a2f', fontSize: 13, marginBottom: 20, fontStyle: 'italic' }}>Real prospects do not wait. Now imagine this happening ten times a week to your team.</div>
          <button className="btn-primary" onClick={retry}>Take The Call Again</button>
        </div>
      </div>
    );
  }

  if (phase === 'debrief') {
    const total = scores.reduce((s, t) => s + t.score, 0);
    const max = scenario.turns.length * 10;
    const pct = total / max;
    let grade, gradeColor, comment;
    if (pct >= 0.93) { grade = 'ELITE CLOSER'; gradeColor = '#e6b937'; comment = 'Clinic. This is what the full app trains into muscle memory.'; }
    else if (pct >= 0.75) { grade = 'SHARP'; gradeColor = '#c9a227'; comment = 'You handled it. A couple moves could be tighter but you closed her.'; }
    else if (pct >= 0.55) { grade = 'DIALED IN'; gradeColor = '#a8b070'; comment = 'You survived. Real closers do not survive calls, they own them.'; }
    else { grade = 'ROOKIE'; gradeColor = '#a8a594'; comment = 'This one got away. This is what your team drills against.'; }

    return (
      <div>
        <div className="mono-label gold" style={{ marginBottom: 8 }}>Boiler Room Demo</div>
        <h2 style={{ fontSize: 28, marginBottom: 24, fontFamily: 'Anton, sans-serif', textTransform: 'uppercase' }}>Call Debrief</h2>
        <div style={{ textAlign: 'center', padding: '32px 20px', background: '#14140e', border: `1px solid ${gradeColor}`, borderRadius: 4, marginBottom: 16 }}>
          <div className="mono-label" style={{ color: '#a8a594', marginBottom: 8, letterSpacing: '0.25em' }}>Your Rating</div>
          <div style={{ fontSize: 44, color: gradeColor, fontFamily: 'Anton, sans-serif', textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 1 }}>{grade}</div>
          <div style={{ color: '#a8a594', fontSize: 13, marginTop: 8 }}>{total} / {max} points</div>
        </div>
        <div style={{ background: '#14140e', borderLeft: '3px solid #c9a227', padding: '14px 18px', borderRadius: 2, fontStyle: 'italic', color: '#f5f1e8', lineHeight: 1.5, marginBottom: 16 }}>{comment}</div>
        <div className="mono-label gold" style={{ margin: '20px 0 8px' }}>Turn Breakdown</div>
        {scores.map((t, i) => (
          <div key={i} style={{ background: '#14140e', border: '1px solid #2a2a22', padding: '12px 16px', marginBottom: 6, borderRadius: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div className="mono-label" style={{ color: '#a8a594', fontSize: 10 }}>Turn {i + 1}</div>
              <div style={{ color: '#a8a594', fontSize: 11, marginTop: 2 }}>{t.label}</div>
            </div>
            <div style={{ fontSize: 22, fontFamily: 'Anton, sans-serif', color: t.score >= 8 ? '#7aab55' : t.score >= 5 ? '#c9a227' : '#d94a2f' }}>{t.score}/10</div>
          </div>
        ))}
        <div style={{ marginTop: 20, padding: 20, background: 'rgba(201, 162, 39, 0.08)', border: '1px solid rgba(201, 162, 39, 0.3)', borderRadius: 4 }}>
          <div className="mono-label gold" style={{ marginBottom: 8 }}>In The Full App</div>
          <p style={{ fontSize: 14, lineHeight: 1.6, color: '#f5f1e8', marginBottom: 12 }}>OP 09 The Boiler Room includes five scenarios across three difficulty tiers. Emotional meters track prospect Interest, Trust, and Urgency in real time. Manager avatar reacts to every move. Fair housing testers and FCRA compliance under real timer pressure.</p>
          <button className="btn-primary" onClick={retry}>Take Another Call</button>
        </div>
      </div>
    );
  }

  const turn = scenario.turns[currentTurn];
  const warning = timeLeft <= (scenario.baseTime * 0.35);
  const feedbackChoice = selectedIdx !== null ? turn.options[selectedIdx] : null;
  const isLastTurn = currentTurn === scenario.turns.length - 1;

  return (
    <div>
      <div className="mono-label gold" style={{ marginBottom: 8 }}>Boiler Room Demo · Turn {currentTurn + 1} of {scenario.turns.length}</div>
      <h2 style={{ fontSize: 24, marginBottom: 20, fontFamily: 'Anton, sans-serif', textTransform: 'uppercase' }}>{scenario.callerName} on the line</h2>

      <div style={{ marginBottom: 16 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4, fontFamily: 'Manrope, sans-serif', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#a8a594' }}>
          <span>Response Timer</span>
          <span style={{ fontSize: 22, fontFamily: 'Anton, sans-serif', color: warning ? '#ff6b47' : '#c9a227' }}>{Math.ceil(timeLeft)}s</span>
        </div>
        <div style={{ height: 6, background: '#1a1a12', borderRadius: 3, overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${(timeLeft / scenario.baseTime) * 100}%`, background: warning ? 'linear-gradient(90deg, #d94a2f, #ff6b47)' : 'linear-gradient(90deg, #c9a227, #e6b937)', transition: 'width 0.1s linear' }} />
        </div>
      </div>

      <div style={{ background: '#14140e', borderLeft: '3px solid #c9a227', padding: '14px 18px', marginBottom: 16, borderRadius: 2 }}>
        <div className="mono-label gold" style={{ fontSize: 10, marginBottom: 6 }}>📞 {scenario.callerName}</div>
        <div style={{ fontSize: 15, lineHeight: 1.5, color: '#f5f1e8', fontStyle: 'italic' }}>&ldquo;{turn.prospect}&rdquo;</div>
      </div>

      <div className="mono-label" style={{ color: '#a8a594', marginBottom: 10 }}>Your Response</div>
      {turn.options.map((opt, i) => (
        <button key={i} onClick={() => handleChoice(i)} disabled={selectedIdx !== null}
          style={{
            display: 'block', width: '100%',
            background: selectedIdx === i ? 'rgba(201, 162, 39, 0.1)' : '#14140e',
            border: selectedIdx === i ? '1px solid #c9a227' : '1px solid #2a2a22',
            color: '#f5f1e8', padding: '12px 16px', marginBottom: 8, textAlign: 'left',
            fontSize: 14, lineHeight: 1.4, cursor: selectedIdx === null ? 'pointer' : 'not-allowed',
            borderRadius: 2, opacity: selectedIdx !== null && selectedIdx !== i ? 0.5 : 1, fontFamily: 'inherit'
          }}>
          {opt.text}
        </button>
      ))}

      {feedbackChoice && (
        <div style={{
          marginTop: 14, padding: '14px 18px', borderRadius: 2,
          borderLeft: `3px solid ${feedbackChoice.type === 'good' ? '#7aab55' : feedbackChoice.type === 'mid' ? '#c9a227' : '#d94a2f'}`,
          background: feedbackChoice.type === 'good' ? 'rgba(90, 140, 60, 0.12)' : feedbackChoice.type === 'mid' ? 'rgba(201, 162, 39, 0.12)' : 'rgba(200, 60, 40, 0.15)'
        }}>
          <div style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 6, color: feedbackChoice.type === 'good' ? '#a5c576' : feedbackChoice.type === 'mid' ? '#e6b937' : '#f57c5e' }}>
            {feedbackChoice.label} · {feedbackChoice.score}/10
          </div>
          <div style={{ fontSize: 14, lineHeight: 1.5, color: '#f5f1e8' }}>{feedbackChoice.feedback}</div>
          <button className="btn-ghost" onClick={nextTurn} style={{ marginTop: 12, padding: '8px 20px', fontSize: 11 }}>
            {isLastTurn ? 'See Debrief →' : 'Next Turn →'}
          </button>
        </div>
      )}
    </div>
  );
}

// ============================================================================
// SIMPLE DEMO CARDS (Objection Drill, Roleplay, Closes)
// ============================================================================
function DemoDrillCard() {
  const [answered, setAnswered] = useState(null);
  const objection = "The rent is too high compared to what I saw down the street.";
  const options = [
    { text: "Well, our amenities are better than theirs.", score: 3, feedback: "Weak defense. You are conceding the price argument and offering a comparison you cannot substantiate on the phone. Redirect to value discovery, not amenity war." },
    { text: "What did they quote you? Let me see if we can beat it.", score: 6, feedback: "Better, but you skipped the diagnosis. Are they actually comparable or is it a smaller unit? A different neighborhood? A different lease term? Ask before you discount." },
    { text: "Help me understand, are the units comparable in size, location, and included features? Because that changes what fair looks like.", score: 10, feedback: "Textbook. You reframed from price to value discovery in one move. Now she has to justify the comparison or admit it is not apples to apples. Either way you are back in control." }
  ];

  return (
    <div>
      <div className="mono-label gold" style={{ marginBottom: 8 }}>OP 02 · Objection Combat</div>
      <h2 style={{ fontSize: 28, marginBottom: 20, fontFamily: 'Anton, sans-serif', textTransform: 'uppercase' }}>Handle This Objection</h2>
      <div style={{ background: '#14140e', borderLeft: '3px solid #c9a227', padding: '14px 18px', marginBottom: 20, borderRadius: 2 }}>
        <div className="mono-label gold" style={{ fontSize: 10, marginBottom: 6 }}>Prospect Says</div>
        <div style={{ fontSize: 16, lineHeight: 1.5, fontStyle: 'italic' }}>&ldquo;{objection}&rdquo;</div>
      </div>
      <div className="mono-label" style={{ color: '#a8a594', marginBottom: 10 }}>Your Response</div>
      {options.map((opt, i) => (
        <button key={i} onClick={() => setAnswered(i)} disabled={answered !== null}
          style={{
            display: 'block', width: '100%',
            background: answered === i ? 'rgba(201, 162, 39, 0.1)' : '#14140e',
            border: answered === i ? '1px solid #c9a227' : '1px solid #2a2a22',
            color: '#f5f1e8', padding: '12px 16px', marginBottom: 8, textAlign: 'left',
            fontSize: 14, lineHeight: 1.4, cursor: answered === null ? 'pointer' : 'not-allowed',
            borderRadius: 2, opacity: answered !== null && answered !== i ? 0.5 : 1, fontFamily: 'inherit'
          }}>
          {opt.text}
        </button>
      ))}
      {answered !== null && (
        <div style={{
          marginTop: 14, padding: '14px 18px', borderRadius: 2,
          borderLeft: `3px solid ${options[answered].score >= 8 ? '#7aab55' : options[answered].score >= 5 ? '#c9a227' : '#d94a2f'}`,
          background: options[answered].score >= 8 ? 'rgba(90, 140, 60, 0.12)' : options[answered].score >= 5 ? 'rgba(201, 162, 39, 0.12)' : 'rgba(200, 60, 40, 0.15)'
        }}>
          <div style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 6, color: '#c9a227' }}>Score {options[answered].score}/10</div>
          <div style={{ fontSize: 14, lineHeight: 1.5, color: '#f5f1e8' }}>{options[answered].feedback}</div>
        </div>
      )}
    </div>
  );
}

function DemoRoleplayCard() {
  return (
    <div>
      <div className="mono-label gold" style={{ marginBottom: 8 }}>OP 04 · Prospect Roleplay</div>
      <h2 style={{ fontSize: 28, marginBottom: 20, fontFamily: 'Anton, sans-serif', textTransform: 'uppercase' }}>Full Conversation Roleplay</h2>
      <p style={{ color: '#a8a594', marginBottom: 20, lineHeight: 1.6 }}>
        Six prospect archetypes. Each one runs a full conversation from hello to close. Different archetype, different playbook. In the full app you cycle through all six with scored responses at every turn.
      </p>
      <div className="ops-grid" style={{ marginTop: 20 }}>
        {[
          { name: 'The Budget Shopper', desc: 'Price-first, features-second. Wants the deal.' },
          { name: 'The Analytical', desc: 'Comparing spreadsheets, needs data-driven answers.' },
          { name: 'The Urgent', desc: 'Needs a place by Saturday. Hates delay.' },
          { name: 'The Skeptical', desc: 'Has been burned before. Defaults to suspicion.' },
          { name: 'The Undecided', desc: 'Loves everything but cannot commit.' },
          { name: 'The Corporate Relocation', desc: 'Someone else is paying. Different priorities.' }
        ].map((a) => (
          <div key={a.name} className="op-card">
            <div className="op-card-name" style={{ fontSize: 18 }}>{a.name}</div>
            <div className="op-card-desc">{a.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DemoClosesCard() {
  return (
    <div>
      <div className="mono-label gold" style={{ marginBottom: 8 }}>OP 05.5 · Closes Academy</div>
      <h2 style={{ fontSize: 28, marginBottom: 20, fontFamily: 'Anton, sans-serif', textTransform: 'uppercase' }}>Master Ten Closes</h2>
      <p style={{ color: '#a8a594', marginBottom: 20, lineHeight: 1.6 }}>
        Ten scripted closes with the exact language, the psychology behind them, and when to use each one. Sample below.
      </p>
      <div style={{ background: '#14140e', border: '1px solid #2a2a22', borderLeft: '3px solid #c9a227', padding: 24, borderRadius: 2 }}>
        <div className="mono-label gold" style={{ marginBottom: 12 }}>Close 03 · The Assumptive Close</div>
        <div style={{ marginBottom: 16 }}>
          <div style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#a8a594', marginBottom: 8 }}>The Words</div>
          <div style={{ fontSize: 15, lineHeight: 1.6, fontStyle: 'italic', padding: 16, background: '#0f0f0a', borderRadius: 2 }}>
            &ldquo;So we can hold this unit for you today. I just need the deposit and a copy of your ID. Are you paying with card or bank transfer?&rdquo;
          </div>
        </div>
        <div style={{ marginBottom: 16 }}>
          <div style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#a8a594', marginBottom: 8 }}>The Psychology</div>
          <div style={{ fontSize: 14, lineHeight: 1.6 }}>You skip the ask. You act as if the decision is made. Now they have to actively refuse instead of actively agree. Refusal takes effort. Effort creates second-thoughts. Second-thoughts kill deals in the OTHER direction than you want. Use this after clear buying signals, never as a first ask.</div>
        </div>
        <div>
          <div style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#a8a594', marginBottom: 8 }}>When To Use</div>
          <div style={{ fontSize: 14, lineHeight: 1.6 }}>After they say the unit is perfect. After they ask move-in specifics. After they mention deposits or applications on their own. Never on a first-time visitor still browsing.</div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// TAB CONTAINER
// ============================================================================
export default function DemoTabs() {
  const [tab, setTab] = useState('boiler');

  const tabConfig = [
    { id: 'drill', label: 'Objection Drill', Icon: Crosshair },
    { id: 'roleplay', label: 'Roleplay', Icon: Target },
    { id: 'closes', label: 'Closes Academy', Icon: BookOpen },
    { id: 'boiler', label: 'Boiler Room', Icon: Zap },
  ];

  return (
    <>
      <div style={{ display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap', borderBottom: '1px solid #2a2a22', paddingBottom: 8 }}>
        {tabConfig.map(({ id, label, Icon }) => (
          <button key={id} onClick={() => setTab(id)} className="nav-link"
            style={{
              color: tab === id ? '#c9a227' : '#8a8775',
              borderBottom: tab === id ? '2px solid #c9a227' : '2px solid transparent',
              padding: '10px 4px', marginBottom: -9,
              display: 'flex', alignItems: 'center', gap: 8
            }}>
            <Icon size={14} /> {label}
          </button>
        ))}
      </div>

      {tab === 'drill' && <DemoDrillCard />}
      {tab === 'roleplay' && <DemoRoleplayCard />}
      {tab === 'closes' && <DemoClosesCard />}
      {tab === 'boiler' && <DemoBoilerCard />}
    </>
  );
}
