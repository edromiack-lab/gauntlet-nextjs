'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, BookOpen, Check, Crosshair, Phone, Target, Zap } from 'lucide-react';


// Demo data constants
const DEMO_DRILL = {
  objection: "It's out of my budget.",
  why: "The most common objection in the business. Price resistance before value has been established.",
  master: "Out of your budget at first look. I hear that. But let me tell you something. Every person who signed a lease here in the last 90 days said exactly that on their first walk through. Then they did the math themselves. Listen, if I can show you, in the next 60 seconds, three things this place gives you that the cheaper options do not, do I get a fair shot to earn this?",
  keyMoves: [
    "Acknowledge without flinching or apologizing for price",
    "Drop social proof immediately to break the price frame",
    "Use a fair question close to get back in control",
    "Promise value demonstration, not features"
  ],
  selfCheck: [
    "Did I acknowledge without dropping my shoulders",
    "Did I use social proof to reframe",
    "Did I take control with a forward moving question",
    "Did I pivot to value, not to a cheaper unit"
  ]
};

const DEMO_ROLEPLAY = {
  name: 'Brad',
  turn: {
    prospect: "Hey, I am Brad. I saw the listing online, just wanted to take a quick look. Honestly, the price is more than I planned to spend so I will not waste too much of your time.",
    options: [
      {
        text: "No worries Brad. Let me walk you through what we have. 24 hour gym access, rooftop deck with grills, in unit washer and dryer, smart locks, secure package room, dog park out back, stainless steel appliances. The amenity package is honestly the best at this price point in the neighborhood.",
        score: 3,
        feedback: "Feature dump. The longer you list, the more you sound like you are trying to convince him. He already told you the issue is price. You learned nothing about Brad."
      },
      {
        text: "Brad, what made you click on this listing specifically?",
        score: 10,
        feedback: "Boom. One question. You took control by asking instead of pitching. Discovery first, every time. Belfort straight line."
      },
      {
        text: "Yeah totally understand. The price has been a sticking point for a few people. We do have some smaller units if you want to look at those instead.",
        score: 1,
        feedback: "You just lost the deal in 12 seconds. You agreed the price is wrong and offered to downgrade him. Brad came in willing to spend $2,800. You just talked him out of it."
      }
    ]
  }
};

const DEMO_CLOSE = {
  name: 'The Loop',
  short: 'Reframe the objection as the reason to buy.',
  definition: 'The Belfort signature move. You take their objection, agree with the surface concern, and then use the same fact to argue the opposite conclusion.',
  when: 'Any objection that is really about hesitation or fear, not a hard logical block.',
  examples: [
    'It is too expensive. Response: That is exactly why you should see what you get for it. Cheaper places cost more in the long run through turnover and stress.',
    'I am not ready yet. Response: That is exactly why we should lock something in now. Ready people pay premium because they are competing with each other for what is left.',
    'I need to think about it. Response: That is exactly why I want to answer your questions while we are still standing here. Things you cannot answer at home become reasons not to sign.'
  ]
};



function DemoDrillCard() {
  const [phase, setPhase] = useState('respond');
  const [response, setResponse] = useState('');
  const [checks, setChecks] = useState([false, false, false, false]);

  const score = (checks.filter(Boolean).length * 2.5).toFixed(1);

  const reset = () => {
    setPhase('respond');
    setResponse('');
    setChecks([false, false, false, false]);
  };

  return (
    <div className="card" style={{ padding: 32 }}>
      <div style={{ marginBottom: 24 }}>
        <div className="mono-label gold" style={{ marginBottom: 8 }}>OP 02 · Objection Drill · Sample</div>
        <div className="display" style={{ fontSize: 28 }}>Handle This Objection</div>
      </div>

      <div className="card" style={{ padding: 20, marginBottom: 20, borderLeft: '3px solid #c9a227' }}>
        <div className="mono-label gold" style={{ marginBottom: 10 }}>Incoming Objection</div>
        <div className="display" style={{ fontSize: 20, lineHeight: 1.3 }}>"{DEMO_DRILL.objection}"</div>
        <div className="paper-dim" style={{ fontSize: 12, marginTop: 12, lineHeight: 1.5, fontStyle: 'italic' }}>{DEMO_DRILL.why}</div>
      </div>

      {phase === 'respond' && (
        <>
          <div className="mono-label gold" style={{ marginBottom: 10 }}>Your Response</div>
          <textarea
            value={response}
            onChange={(e) => setResponse(e.target.value)}
            placeholder="Type your response. Say it out loud first."
            className="input-field"
            style={{ resize: 'vertical', minHeight: 100, fontFamily: 'inherit' }}
          />
          <button
            onClick={() => setPhase('reveal')}
            className="btn-primary"
            style={{ width: '100%', marginTop: 14, justifyContent: 'center' }}
            disabled={!response.trim()}
          >
            Reveal Master Response
          </button>
        </>
      )}

      {phase === 'reveal' && (
        <>
          <div className="card" style={{ padding: 16, marginBottom: 14 }}>
            <div className="mono-label paper-dim" style={{ marginBottom: 6 }}>Your Response</div>
            <div style={{ fontSize: 14, lineHeight: 1.55, fontStyle: 'italic' }}>{response}</div>
          </div>
          <div className="card" style={{ padding: 16, marginBottom: 14, borderLeft: '3px solid #c9a227' }}>
            <div className="mono-label gold" style={{ marginBottom: 10 }}>Master Response</div>
            <div style={{ fontSize: 14, lineHeight: 1.6 }}>{DEMO_DRILL.master}</div>
          </div>
          <div className="card" style={{ padding: 16, marginBottom: 14 }}>
            <div className="mono-label gold" style={{ marginBottom: 10 }}>Key Moves</div>
            {DEMO_DRILL.keyMoves.map((m, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 6, fontSize: 13 }}>
                <span className="display gold" style={{ fontSize: 12, minWidth: 16 }}>{i + 1}.</span>
                <span>{m}</span>
              </div>
            ))}
          </div>
          <button
            onClick={() => setPhase('assess')}
            className="btn-primary"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            Score Yourself
          </button>
        </>
      )}

      {phase === 'assess' && (
        <>
          <div className="paper-dim" style={{ fontSize: 12, marginBottom: 14 }}>
            Check each box that honestly applies to your response. Be brutal.
          </div>
          {DEMO_DRILL.selfCheck.map((q, i) => (
            <button
              key={i}
              onClick={() => {
                const c = [...checks];
                c[i] = !c[i];
                setChecks(c);
              }}
              className="card"
              style={{ width: '100%', padding: 14, marginBottom: 8, display: 'flex', gap: 12, alignItems: 'center', cursor: 'pointer', textAlign: 'left', color: '#f5f1e8', border: '1px solid #2a2a22', borderRadius: 2 }}
            >
              <span style={{ width: 22, height: 22, border: '1px solid #2a2a22', borderRadius: 2, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: checks[i] ? '#c9a227' : '#0a0a0a', flexShrink: 0 }}>
                {checks[i] && <Check size={14} color="#0a0a0a" />}
              </span>
              <span style={{ fontSize: 13, lineHeight: 1.5, flex: 1 }}>{q}</span>
            </button>
          ))}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '16px 0', padding: '14px 16px', background: '#0a0a0a', borderRadius: 2, border: '1px solid #2a2a22' }}>
            <div className="mono-label paper-dim">Your Score</div>
            <div className="display gold" style={{ fontSize: 24 }}>{score}<span className="paper-dim" style={{ fontSize: 14 }}>/10</span></div>
          </div>
          <button onClick={reset} className="btn-ghost" style={{ width: '100%', justifyContent: 'center' }}>
            Try Another Response
          </button>
        </>
      )}
    </div>
  );
}

function DemoRoleplayCard() {
  const [pick, setPick] = useState(null);

  const picked = pick !== null ? DEMO_ROLEPLAY.turn.options[pick] : null;

  return (
    <div className="card" style={{ padding: 32 }}>
      <div style={{ marginBottom: 24 }}>
        <div className="mono-label gold" style={{ marginBottom: 8 }}>OP 01 · Roleplay · Sample Turn</div>
        <div className="display" style={{ fontSize: 28 }}>Handle This Prospect</div>
      </div>

      <div className="card" style={{ padding: 16, marginBottom: 20, borderLeft: '2px solid #c9a227' }}>
        <div className="mono-label paper-dim" style={{ marginBottom: 6 }}>Prospect: {DEMO_ROLEPLAY.name}</div>
        <div style={{ fontSize: 15, lineHeight: 1.55 }}>"{DEMO_ROLEPLAY.turn.prospect}"</div>
      </div>

      <div className="mono-label gold" style={{ marginBottom: 12 }}>Your Move</div>

      {DEMO_ROLEPLAY.turn.options.map((opt, idx) => {
        const isSelected = pick === idx;
        const otherSelected = pick !== null && pick !== idx;
        const scoreColor = opt.score >= 8 ? '#c9a227' : opt.score >= 5 ? '#8a8775' : '#c44536';
        return (
          <button
            key={idx}
            onClick={() => pick === null && setPick(idx)}
            disabled={pick !== null}
            style={{
              display: 'block',
              width: '100%',
              padding: 16,
              marginBottom: 10,
              background: isSelected ? `${scoreColor}15` : '#14140e',
              border: `1px solid ${isSelected ? scoreColor : '#2a2a22'}`,
              borderRadius: 2,
              textAlign: 'left',
              color: '#f5f1e8',
              fontSize: 14,
              lineHeight: 1.55,
              fontFamily: 'inherit',
              cursor: pick === null ? 'pointer' : 'default',
              opacity: otherSelected ? 0.4 : 1,
              transition: 'all 0.15s'
            }}
          >
            {opt.text}
          </button>
        );
      })}

      {picked && (
        <div className="card fade-in" style={{ padding: 18, marginTop: 16, borderLeft: `3px solid ${picked.score >= 8 ? '#c9a227' : picked.score >= 5 ? '#8a8775' : '#c44536'}` }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <div className="mono-label gold">Score On This Move</div>
            <div className="display" style={{ fontSize: 28 }}>{picked.score}<span className="paper-dim" style={{ fontSize: 14 }}>/10</span></div>
          </div>
          <div style={{ fontSize: 14, lineHeight: 1.55 }}>{picked.feedback}</div>
          <button onClick={() => setPick(null)} className="btn-ghost" style={{ width: '100%', marginTop: 14, justifyContent: 'center' }}>
            Try A Different Move
          </button>
        </div>
      )}
    </div>
  );
}

function DemoClosesCard() {
  return (
    <div className="card" style={{ padding: 32 }}>
      <div style={{ marginBottom: 24 }}>
        <div className="mono-label gold" style={{ marginBottom: 8 }}>OP 04 · Closes Academy · Sample</div>
        <div className="display" style={{ fontSize: 28 }}>{DEMO_CLOSE.name}</div>
        <div className="paper-dim" style={{ fontSize: 14, marginTop: 6 }}>{DEMO_CLOSE.short}</div>
      </div>

      <div className="card" style={{ padding: 18, marginBottom: 14, borderLeft: '3px solid #c9a227' }}>
        <div className="mono-label gold" style={{ marginBottom: 10 }}>What It Is</div>
        <div style={{ fontSize: 14, lineHeight: 1.6 }}>{DEMO_CLOSE.definition}</div>
      </div>

      <div className="card" style={{ padding: 18, marginBottom: 14 }}>
        <div className="mono-label gold" style={{ marginBottom: 10 }}>When To Use It</div>
        <div style={{ fontSize: 14, lineHeight: 1.55 }}>{DEMO_CLOSE.when}</div>
      </div>

      <div className="card" style={{ padding: 18 }}>
        <div className="mono-label gold-bright" style={{ marginBottom: 12 }}>In The Field</div>
        {DEMO_CLOSE.examples.map((ex, i) => (
          <div key={i} style={{ padding: '10px 0', borderBottom: i < DEMO_CLOSE.examples.length - 1 ? '1px solid #2a2a22' : 'none', display: 'flex', gap: 10 }}>
            <span className="display gold" style={{ fontSize: 12, minWidth: 16 }}>{i + 1}.</span>
            <span style={{ fontSize: 13, lineHeight: 1.55, fontStyle: 'italic' }}>"{ex}"</span>
          </div>
        ))}
      </div>
    </div>
  );
}

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
        <p style={{ color: '#a8a594', marginBottom: 32, fontSize: 15, lineHeight: 1.6 }}>A real internet lead is calling. You have {scenario.baseTime} seconds to respond each turn. Take too long and she hangs up. This is what your team practices in the full app.</p>
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
          <button className="btn-primary" onClick={retry} style={{ marginRight: 8 }}>Take The Call Again</button>
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
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={retry}>Take Another Call</button>
          </div>
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
          <div style={{ height: '100%', width: `${(timeLeft / scenario.baseTime) * 100}%`, background: warning ? 'linear-gradient(90deg, #d94a2f, #ff6b47)' : 'linear-gradient(90deg, #c9a227, #e6b937)', transition: 'width 0.1s linear' }}></div>
        </div>
      </div>

      <div style={{ background: '#14140e', borderLeft: '3px solid #c9a227', padding: '14px 18px', marginBottom: 16, borderRadius: 2 }}>
        <div className="mono-label gold" style={{ fontSize: 10, marginBottom: 6 }}>📞 {scenario.callerName}</div>
        <div style={{ fontSize: 15, lineHeight: 1.5, color: '#f5f1e8', fontStyle: 'italic' }}>"{turn.prospect}"</div>
      </div>

      <div className="mono-label" style={{ color: '#a8a594', marginBottom: 10 }}>Your Response</div>
      {turn.options.map((opt, i) => (
        <button
          key={i}
          onClick={() => handleChoice(i)}
          disabled={selectedIdx !== null}
          style={{
            display: 'block',
            width: '100%',
            background: selectedIdx === i ? 'rgba(201, 162, 39, 0.1)' : '#14140e',
            border: selectedIdx === i ? '1px solid #c9a227' : '1px solid #2a2a22',
            color: '#f5f1e8',
            padding: '12px 16px',
            marginBottom: 8,
            textAlign: 'left',
            fontSize: 14,
            lineHeight: 1.4,
            cursor: selectedIdx === null ? 'pointer' : 'not-allowed',
            borderRadius: 2,
            opacity: selectedIdx !== null && selectedIdx !== i ? 0.5 : 1,
            fontFamily: 'inherit'
          }}
        >
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

export default function DemoPage() {
  const router = useRouter();
  const [tab, setTab] = useState('drill');

  return (
    <div className="fade-in">
      <section className="hero" style={{ padding: '80px 0 40px' }}>
        <div className="container">
          <div className="hero-eyebrow">Try It Live</div>
          <h1 className="hero-title">Experience The <span className="accent">Gauntlet.</span></h1>
          <p className="hero-sub">Four interactive samples from the real app. Handle an objection. Roleplay a prospect. Learn a close. Take a call with a live countdown timer. This is exactly what your team gets, only better with full unlocked content.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container-narrow">
          {/* TABS */}
          <div style={{ display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap', borderBottom: '1px solid #2a2a22', paddingBottom: 8 }}>
            <button
              onClick={() => setTab('drill')}
              className="nav-link"
              style={{
                color: tab === 'drill' ? '#c9a227' : '#8a8775',
                borderBottom: tab === 'drill' ? '2px solid #c9a227' : '2px solid transparent',
                padding: '10px 4px',
                marginBottom: -9,
                display: 'flex',
                alignItems: 'center',
                gap: 8
              }}
            >
              <Crosshair size={14} /> Objection Drill
            </button>
            <button
              onClick={() => setTab('roleplay')}
              className="nav-link"
              style={{
                color: tab === 'roleplay' ? '#c9a227' : '#8a8775',
                borderBottom: tab === 'roleplay' ? '2px solid #c9a227' : '2px solid transparent',
                padding: '10px 4px',
                marginBottom: -9,
                display: 'flex',
                alignItems: 'center',
                gap: 8
              }}
            >
              <Target size={14} /> Roleplay
            </button>
            <button
              onClick={() => setTab('closes')}
              className="nav-link"
              style={{
                color: tab === 'closes' ? '#c9a227' : '#8a8775',
                borderBottom: tab === 'closes' ? '2px solid #c9a227' : '2px solid transparent',
                padding: '10px 4px',
                marginBottom: -9,
                display: 'flex',
                alignItems: 'center',
                gap: 8
              }}
            >
              <BookOpen size={14} /> Closes Academy
            </button>
            <button
              onClick={() => setTab('boiler')}
              className="nav-link"
              style={{
                color: tab === 'boiler' ? '#c9a227' : '#8a8775',
                borderBottom: tab === 'boiler' ? '2px solid #c9a227' : '2px solid transparent',
                padding: '10px 4px',
                marginBottom: -9,
                display: 'flex',
                alignItems: 'center',
                gap: 8
              }}
            >
              <Zap size={14} /> Boiler Room
            </button>
          </div>

          {tab === 'drill' && <DemoDrillCard />}
          {tab === 'roleplay' && <DemoRoleplayCard />}
          {tab === 'closes' && <DemoClosesCard />}
          {tab === 'boiler' && <DemoBoilerCard />}

          <div style={{ marginTop: 40, padding: 24, background: '#14140e', border: '1px solid #2a2a22', borderLeft: '3px solid #c9a227', borderRadius: 2 }}>
            <div className="mono-label gold" style={{ marginBottom: 8 }}>What Your Team Gets In The Full App</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 12, marginTop: 16 }}>
              <div style={{ fontSize: 13 }}><span className="display gold" style={{ fontSize: 18, marginRight: 6 }}>8</span>Tour scenarios</div>
              <div style={{ fontSize: 13 }}><span className="display gold" style={{ fontSize: 18, marginRight: 6 }}>8</span>Sit-down scenarios</div>
              <div style={{ fontSize: 13 }}><span className="display gold" style={{ fontSize: 18, marginRight: 6 }}>8</span>Fair housing scenarios</div>
              <div style={{ fontSize: 13 }}><span className="display gold" style={{ fontSize: 18, marginRight: 6 }}>5</span>Boiler Room calls</div>
              <div style={{ fontSize: 13 }}><span className="display gold" style={{ fontSize: 18, marginRight: 6 }}>6</span>Prospect archetypes</div>
              <div style={{ fontSize: 13 }}><span className="display gold" style={{ fontSize: 18, marginRight: 6 }}>18</span>Real objections</div>
              <div style={{ fontSize: 13 }}><span className="display gold" style={{ fontSize: 18, marginRight: 6 }}>10</span>Master closes</div>
              <div style={{ fontSize: 13 }}><span className="display gold" style={{ fontSize: 18, marginRight: 6 }}>12</span>Coach situations</div>
              <div style={{ fontSize: 13 }}><span className="display gold" style={{ fontSize: 18, marginRight: 6 }}>4</span>Phone scenarios</div>
              <div style={{ fontSize: 13 }}><span className="display gold" style={{ fontSize: 18, marginRight: 6 }}>1</span>Real Gauntlet mode</div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container-narrow">
          <h2 className="cta-title">Ready For The Full Experience?</h2>
          <p style={{ color: '#a8a594', fontSize: 18, marginBottom: 32 }}>Get a live walkthrough with your team. Deploy to your properties within a week.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={() => router.push('/contact')}>
              Request Full Access <ArrowRight size={16} />
            </button>
            <button className="btn-ghost" onClick={() => router.push('/pricing')}>See Pricing</button>
          </div>
        </div>
      </section>
    </div>
  );
}