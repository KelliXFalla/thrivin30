import { useState, useRef, useEffect } from “react”;

const C = {
bg: “#0c0b09”, surface: “#161412”, card: “#1e1b16”,
border: “#2c2820”, accent: “#e8915a”, accentD: “#c46e38”, gold: “#d4a843”,
sand: “#c4b090”, text: “#f0ebe3”, muted: “#6e6354”, green: “#5fb882”,
blue: “#5ba8d4”, lavender: “#9b8ec4”,
};

const DAILY_CELEBRATIONS = [
“YOU ARE ON FIRE! 🔥 80%+ today — this is what transformation looks like!”,
“YES!! 🎉 Look at you showing up! This is the version of you that changes everything!”,
“CRUSHING IT! ⚡ 80%+ habits done — your future self is cheering you on!”,
“THIS IS IT! 🏆 This is exactly what becoming her/him looks like. You’re doing it!”,
“LEGENDARY! 🔥 80%+ today — not everyone does this. But YOU do. Keep going!”,
“THAT’S WHAT WE’RE TALKING ABOUT! 🎊 80%+ — you are unstoppable!”,
];

const WEEKLY_CELEBRATIONS = [
“WHAT A WEEK! 🏆 80%+ average — you didn’t just survive the week, you OWNED it!”,
“WEEKLY WARRIOR! 🔥 You showed up 80%+ this week. This is your new identity now!”,
“7 DAYS STRONGER! ⚡ 80%+ weekly average — Bali is getting closer with every day like this!”,
“YOU ARE THE PROGRAM! 🎊 80%+ this week — this is what Rise. Reset. Thrive. looks like in action!”,
];

function CelebrationPopup({ message, onClose }) {
useEffect(() => {
const timer = setTimeout(onClose, 5000);
return () => clearTimeout(timer);
}, [onClose]);

return (
<div style={{
position: “fixed”, top: 0, left: 0, right: 0, bottom: 0,
background: “#000000aa”, zIndex: 9999,
display: “flex”, alignItems: “center”, justifyContent: “center”, padding: 24,
}} onClick={onClose}>
<div style={{
background: “linear-gradient(145deg,#1e1b16,#2a2010)”,
border: “2px solid “ + C.gold,
borderRadius: 24, padding: 32, textAlign: “center”, maxWidth: 340,
boxShadow: “0 0 60px “ + C.gold + “40”,
}}>
<div style={{ fontSize: 52, marginBottom: 16 }}>🎉</div>
<div style={{ color: C.gold, fontWeight: 800, fontSize: 18, fontFamily: “‘Cormorant Garamond’,serif”, lineHeight: 1.4, marginBottom: 16 }}>
{message}
</div>
<div style={{ color: C.muted, fontSize: 12 }}>Tap anywhere to close</div>
</div>
</div>
);
}

const PHASES = [
{ id: 1, days: “Days 1–10”, name: “CLEANSE”, color: C.accent, desc: “10-day Tolman colon cleanse & fast prep — detox, reset your gut, ignite cellular renewal” },
{ id: 2, days: “Days 11–40”, name: “THRIVE”, color: C.gold, desc: “30-day mind, body & soul identity shift — Become Her / Him. New habits. New self.” },
];

const HABITS_CORE = [
{ id: “morning_ritual”, label: “Morning Ritual”, icon: “🌅”, unit: “✓”, max: 1, step: 1, desc: “500ml water + lemon + Salts of the Earth on waking” },
{ id: “water”, label: “Clean Water”, icon: “💧”, unit: “L”, max: 3, step: 0.5, desc: “3L minimum daily” },
{ id: “greens”, label: “Greens Powder”, icon: “🌿”, unit: “✓”, max: 1, step: 1, desc: “Daily greens in water — non-negotiable” },
{ id: “sleep”, label: “Sleep”, icon: “🌙”, unit: “hrs”, max: 10, step: 0.5, desc: “8+ hrs minimum” },
{ id: “gratitude”, label: “Gratitudes”, icon: “🙏”, unit: “written”, max: 10, step: 1, desc: “5–10 per day” },
{ id: “cold”, label: “Cold Shower”, icon: “🚿”, unit: “sec”, max: 120, step: 30, desc: “30 sec – 2 min daily” },
{ id: “wholefoods”, label: “Whole Foods”, icon: “🥗”, unit: “✓”, max: 1, step: 1, desc: “No alcohol · No processed · 1 cheat meal/wk” },
{ id: “noalcohol”, label: “No Alcohol”, icon: “🚫”, unit: “✓”, max: 1, step: 1, desc: “Alcohol-free today” },
{ id: “pd”, label: “Personal Dev”, icon: “📚”, unit: “min”, max: 30, step: 5, desc: “Podcast or read — 15 min daily” },
{ id: “dream”, label: “Dream Building”, icon: “✨”, unit: “tasks”, max: 3, step: 1, desc: “2–3 tasks · 6 days/wk” },
];

const HABITS_OPTIONAL = [
{ id: “sauna”, label: “Sauna”, icon: “🔥”, unit: “min”, max: 45, step: 5, note: null },
{ id: “drybrushing”, label: “Dry Body Brushing”, icon: “🪮”, unit: “✓”, max: 1, step: 1, note: null },
{ id: “enema”, label: “Coffee Enema”, icon: “☕”, unit: “✓”, max: 1, step: 1, note: null },
{ id: “wimhof”, label: “Wim Hof Breathwork”, icon: “🫁”, unit: “✓”, max: 1, step: 1, note: “11 min · 3 rounds · breath holds” },
];

const WORKOUTS = [
{ id: “resistance”, label: “Resistance”, icon: “🏋️”, color: C.accent, target: “3×/week”, desc: “Strength training” },
{ id: “hybrid”, label: “Hybrid”, icon: “⚡”, color: C.gold, target: “2×/week”, desc: “Cardio + bodyweight 30 min” },
];

const SOUL_IDEAS = [
{ icon: “🌿”, label: “Nature”, ideas: [“Barefoot walk on grass or sand”, “Sit by water — river, ocean, lake”, “Forest bath — no phone, just presence”, “Watch a sunrise or sunset fully”] },
{ icon: “🚗”, label: “A Drive”, ideas: [“No destination — just go where the road takes you”, “Music up, windows down”, “Drive somewhere you’ve never been”, “Stop whenever something feels good”] },
{ icon: “✍️”, label: “Download & Journal”, ideas: [“Stream of consciousness — write without editing”, “What’s been wanting to come through?”, “Vision pages — what does your life look like?”, “Letters to your future self”] },
{ icon: “🎨”, label: “Create”, ideas: [“Make something with your hands”, “Cook a new recipe just for joy”, “Paint, draw, doodle — no outcome needed”, “Rearrange a space to feel more you”] },
{ icon: “📖”, label: “Rest & Nourish”, ideas: [“Read for pure pleasure — no self-improvement”, “Netflix guilt-free”, “Nap without an alarm”, “Lie in the sun and do absolutely nothing”] },
{ icon: “🌱”, label: “Learn for Joy”, ideas: [“Deep dive a topic that lights you up”, “Watch a documentary on a passion”, “A skill just for fun — no goal attached”, “A language, an instrument, anything”] },
];

const WEEK6 = [“Mo”,“Tu”,“We”,“Th”,“Fr”,“Sa”];
const WEEK7 = [“Mo”,“Tu”,“We”,“Th”,“Fr”,“Sa”,“Su”];
const DEMO_MEMBERS = [
{ name: “Sarah M.”, day: 14, score: 87, phase: “Thrive” },
{ name: “Lisa T.”, day: 7, score: 72, phase: “Cleanse” },
{ name: “Rachel B.”, day: 28, score: 95, phase: “Thrive” },
{ name: “Jenny K.”, day: 3, score: 60, phase: “Cleanse” },
{ name: “Mel & Craig”, day: 19, score: 83, phase: “Thrive” },
];

// ── Atoms ─────────────────────────────────────────────────────────────────────

function Tag({ text, color }) {
return (
<span style={{ fontSize: 10, fontWeight: 700, color, background: color + “22”, padding: “2px 8px”, borderRadius: 99, textTransform: “uppercase”, letterSpacing: 1 }}>
{text}
</span>
);
}

function Toggle({ value, onChange, color }) {
const col = color || C.green;
return (
<div onClick={() => onChange(!value)} style={{ width: 44, height: 24, borderRadius: 99, cursor: “pointer”, background: value ? col : C.border, transition: “background 0.25s”, position: “relative”, flexShrink: 0 }}>
<div style={{ position: “absolute”, top: 3, left: value ? 23 : 3, width: 18, height: 18, borderRadius: “50%”, background: “#fff”, transition: “left 0.25s”, boxShadow: “0 1px 4px #0006” }} />
</div>
);
}

function StepCounter({ value, onChange, min, max, step, unit, color }) {
const mn = min || 0;
const col = color || C.accent;
const pct = Math.min(((value - mn) / Math.max(max - mn, 0.01)) * 100, 100);
return (
<div style={{ display: “flex”, flexDirection: “column”, gap: 8 }}>
<div style={{ display: “flex”, alignItems: “center”, gap: 10 }}>
<button onClick={() => onChange(Math.max(mn, +(value - step).toFixed(2)))} style={{ width: 32, height: 32, borderRadius: 9, border: “1px solid “ + C.border, background: C.surface, color: C.text, fontSize: 18, cursor: “pointer”, lineHeight: 1 }}>−</button>
<div style={{ flex: 1, textAlign: “center” }}>
<span style={{ color: col, fontWeight: 800, fontSize: 22 }}>{value}</span>
<span style={{ color: C.muted, fontSize: 12, marginLeft: 4 }}>{unit}</span>
</div>
<button onClick={() => onChange(Math.min(max, +(value + step).toFixed(2)))} style={{ width: 32, height: 32, borderRadius: 9, border: “1px solid “ + C.border, background: C.surface, color: col, fontSize: 18, cursor: “pointer”, fontWeight: 700, lineHeight: 1 }}>+</button>
</div>
<div style={{ height: 4, borderRadius: 99, background: C.border }}>
<div style={{ height: “100%”, borderRadius: 99, width: pct + “%”, background: pct >= 100 ? C.green : “linear-gradient(90deg,” + C.accentD + “,” + col + “)”, transition: “width 0.35s” }} />
</div>
</div>
);
}

function PhotoSlot({ label, slot, photos, setPhotos }) {
const ref = useRef();
const src = photos[slot];
return (
<div style={{ display: “flex”, flexDirection: “column”, gap: 5 }}>
<div style={{ color: C.muted, fontSize: 10, textTransform: “uppercase”, letterSpacing: 1.5 }}>{label}</div>
<div onClick={() => ref.current.click()} style={{ height: 105, borderRadius: 12, border: “2px dashed “ + (src ? C.accent + “70” : C.border), background: src ? “transparent” : C.surface, cursor: “pointer”, overflow: “hidden”, display: “flex”, alignItems: “center”, justifyContent: “center” }}>
{src
? <img src={src} alt={label} style={{ width: “100%”, height: “100%”, objectFit: “cover” }} />
: <div style={{ textAlign: “center”, color: C.muted }}><div style={{ fontSize: 24 }}>📸</div><div style={{ fontSize: 10, marginTop: 2 }}>Tap to upload</div></div>
}
</div>
<input ref={ref} type=“file” accept=“image/*” capture=“environment” style={{ display: “none” }} onChange={e => {
const file = e.target.files[0];
if (!file) return;
const reader = new FileReader();
reader.onload = ev => setPhotos(p => ({ …p, [slot]: ev.target.result }));
reader.readAsDataURL(file);
}} />
</div>
);
}

// ── Dashboard ─────────────────────────────────────────────────────────────────

function Dashboard({ member, day, habitValues, workoutLog }) {
const phase = day <= 10 ? PHASES[0] : PHASES[1];
const done = HABITS_CORE.filter(h => {
const v = habitValues[h.id] || 0;
return h.max === 1 ? v >= 1 : v >= h.max * 0.75;
}).length;
const score = Math.round((done / HABITS_CORE.length) * 100);
const [celebration, setCelebration] = useState(null);
const [celebratedToday, setCelebratedToday] = useState(false);

useEffect(() => {
if (score >= 80 && !celebratedToday) {
const msg = DAILY_CELEBRATIONS[Math.floor(Math.random() * DAILY_CELEBRATIONS.length)];
setCelebration(msg);
setCelebratedToday(true);
}
}, [score]);

return (
<div style={{ display: “flex”, flexDirection: “column”, gap: 18 }}>
{celebration && <CelebrationPopup message={celebration} onClose={() => setCelebration(null)} />}
<div style={{ background: “linear-gradient(145deg,#1e1b16,#27200e)”, borderRadius: 20, padding: 22, border: “1px solid “ + C.border, position: “relative”, overflow: “hidden” }}>
<div style={{ position: “absolute”, top: -60, right: -50, width: 190, height: 190, borderRadius: “50%”, background: “radial-gradient(circle,” + C.accent + “18,transparent 65%)” }} />
<div style={{ color: C.muted, fontSize: 11, textTransform: “uppercase”, letterSpacing: 2 }}>Good morning</div>
<div style={{ color: C.text, fontSize: 26, fontWeight: 800, fontFamily: “‘Cormorant Garamond’,serif”, marginBottom: 16 }}>{member} 🔥</div>
<div style={{ display: “grid”, gridTemplateColumns: “1fr 1fr 1fr”, gap: 10 }}>
{[[“Day “ + day, “of 40”, C.accent], [phase.name, phase.id === 1 ? “Cleanse” : “Thrive”, phase.color], [score + “%”, “today”, score >= 80 ? C.green : C.gold]].map((item, i) => (
<div key={i} style={{ background: C.bg + “90”, borderRadius: 12, padding: “10px 8px”, textAlign: “center” }}>
<div style={{ color: item[2], fontSize: 20, fontWeight: 900, lineHeight: 1 }}>{item[0]}</div>
<div style={{ color: C.muted, fontSize: 10, marginTop: 2 }}>{item[1]}</div>
</div>
))}
</div>
</div>

```
<div style={{ background: C.card, borderLeft: "3px solid " + phase.color, borderRadius: 12, padding: 14 }}>
<div style={{ color: phase.color, fontWeight: 800, fontSize: 12, textTransform: "uppercase", letterSpacing: 1.5 }}>{phase.name} PHASE · {phase.days}</div>
<div style={{ color: C.sand, fontSize: 13, marginTop: 4, lineHeight: 1.5 }}>{phase.desc}</div>
</div>

{day <= 10 && (
<div style={{ background: C.card, border: "1px solid " + C.accent + "30", borderRadius: 14, padding: 16 }}>
<div style={{ color: C.accent, fontWeight: 800, fontSize: 13, marginBottom: 10 }}>🫧 Today's Cleanse Protocol</div>
{[["🌅","On waking","500ml water + lemon + Salts of the Earth"],["🌿","Morning","Greens powder in water"],["🫧","×5 today","Colon cleanse drink (Days 1–4)"],["🧂","Throughout","Salts of the Earth — couple of pinches"]].map((row, i) => (
<div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: i < 3 ? 8 : 0 }}>
<span style={{ fontSize: 16, flexShrink: 0 }}>{row[0]}</span>
<div><span style={{ color: C.accent, fontSize: 11, fontWeight: 700 }}>{row[1]} · </span><span style={{ color: C.sand, fontSize: 12 }}>{row[2]}</span></div>
</div>
))}
</div>
)}

<div>
<div style={{ color: C.muted, fontSize: 11, textTransform: "uppercase", letterSpacing: 2, marginBottom: 10 }}>Today's Habits</div>
<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
{HABITS_CORE.map(h => {
const v = habitValues[h.id] || 0;
const isDone = h.max === 1 ? v >= 1 : v >= h.max * 0.75;
return (
<div key={h.id} style={{ background: C.card, borderRadius: 12, padding: "10px 12px", border: "1px solid " + (isDone ? C.green + "50" : C.border), display: "flex", alignItems: "center", gap: 8 }}>
<span style={{ fontSize: 17 }}>{h.icon}</span>
<div style={{ flex: 1, minWidth: 0 }}>
<div style={{ color: C.muted, fontSize: 10, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{h.label}</div>
<div style={{ color: isDone ? C.green : C.text, fontWeight: 700, fontSize: 14 }}>{v}<span style={{ fontSize: 10, color: C.muted }}> {h.unit}</span></div>
</div>
{isDone && <span style={{ fontSize: 13 }}>✅</span>}
</div>
);
})}
</div>
</div>

<div style={{ background: "linear-gradient(135deg,#1a1408,#201a0b)", border: "1px solid " + C.gold + "40", borderRadius: 14, padding: 16, textAlign: "center" }}>
<div style={{ fontSize: 22 }}>🏖</div>
<div style={{ color: C.gold, fontWeight: 800, fontSize: 15, fontFamily: "'Cormorant Garamond',serif" }}>SOULFIRE Retreat · Bali</div>
<div style={{ color: C.muted, fontSize: 12, marginTop: 4 }}>Founding Members · Dates TBA · Complete your 40 days ✨</div>
</div>
</div>
```

);
}

// ── My Day ────────────────────────────────────────────────────────────────────

function MyDay({ habitValues, setHabitValues, workoutLog, setWorkoutLog, optionals, setOptionals }) {
const today = new Date().toLocaleDateString(“en-AU”, { weekday: “long”, day: “numeric”, month: “long” });
const done = HABITS_CORE.filter(h => {
const v = habitValues[h.id] || 0;
return h.max === 1 ? v >= 1 : v >= h.max * 0.75;
}).length;
const score = Math.round((done / HABITS_CORE.length) * 100);
const [celebration, setCelebration] = useState(null);
const [celebratedToday, setCelebratedToday] = useState(false);

useEffect(() => {
if (score >= 80 && !celebratedToday) {
const msg = DAILY_CELEBRATIONS[Math.floor(Math.random() * DAILY_CELEBRATIONS.length)];
setCelebration(msg);
setCelebratedToday(true);
}
}, [score]);

return (
<div style={{ display: “flex”, flexDirection: “column”, gap: 16 }}>
{celebration && <CelebrationPopup message={celebration} onClose={() => setCelebration(null)} />}
<div>
<div style={{ color: C.muted, fontSize: 11, textTransform: “uppercase”, letterSpacing: 2 }}>Daily Check-In</div>
<div style={{ color: C.text, fontSize: 22, fontWeight: 800, fontFamily: “‘Cormorant Garamond’,serif” }}>{today}</div>
</div>

```
<div style={{ color: C.muted, fontSize: 11, textTransform: "uppercase", letterSpacing: 2 }}>Core Habits</div>
{HABITS_CORE.map(h => (
<div key={h.id} style={{ background: C.card, border: "1px solid " + C.border, borderRadius: 14, padding: 16 }}>
<div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: h.max !== 1 ? 14 : 0 }}>
<div style={{ display: "flex", gap: 10, alignItems: "center" }}>
<span style={{ fontSize: 22 }}>{h.icon}</span>
<div>
<div style={{ color: C.text, fontWeight: 700, fontSize: 14 }}>{h.label}</div>
<div style={{ color: C.muted, fontSize: 11, marginTop: 1 }}>{h.desc}</div>
</div>
</div>
{h.max === 1 && <Toggle value={(habitValues[h.id] || 0) >= 1} onChange={v => setHabitValues(p => ({ ...p, [h.id]: v ? 1 : 0 }))} />}
</div>
{h.max !== 1 && (
<StepCounter value={habitValues[h.id] || 0} onChange={v => setHabitValues(p => ({ ...p, [h.id]: v }))} min={0} max={h.max} step={h.step} unit={h.unit} />
)}
</div>
))}

<div style={{ color: C.muted, fontSize: 11, textTransform: "uppercase", letterSpacing: 2, marginTop: 4 }}>Weekly Workouts</div>
{WORKOUTS.map(w => {
const done = workoutLog[w.id] || [];
return (
<div key={w.id} style={{ background: C.card, border: "1px solid " + C.border, borderRadius: 14, padding: 16 }}>
<div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
<span style={{ fontSize: 22 }}>{w.icon}</span>
<div style={{ flex: 1 }}>
<div style={{ color: w.color, fontWeight: 700, fontSize: 14 }}>{w.label} Training</div>
<div style={{ color: C.muted, fontSize: 11 }}>{w.target} · {w.desc}</div>
</div>
<Tag text={done.length + " done"} color={w.color} />
</div>
<div style={{ display: "flex", gap: 6 }}>
{WEEK6.map(day => {
const on = done.includes(day);
return (
<button key={day} onClick={() => setWorkoutLog(p => {
const arr = p[w.id] || [];
return { ...p, [w.id]: on ? arr.filter(d => d !== day) : [...arr, day] };
})} style={{ flex: 1, height: 34, borderRadius: 8, background: on ? w.color : C.surface, border: "1px solid " + (on ? w.color : C.border), color: on ? C.bg : C.muted, fontSize: 10, fontWeight: 700, cursor: "pointer" }}>{day}</button>
);
})}
</div>
</div>
);
})}

<div style={{ background: C.card, border: "1px solid " + C.border, borderRadius: 14, padding: 16 }}>
<div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
<span style={{ fontSize: 22 }}>🚶‍♀️</span>
<div style={{ flex: 1 }}>
<div style={{ color: C.green, fontWeight: 700, fontSize: 14 }}>30–45 Min Walk</div>
<div style={{ color: C.muted, fontSize: 11 }}>6 days per week</div>
</div>
<Tag text={(workoutLog.walk || []).length + "/6"} color={C.green} />
</div>
<div style={{ display: "flex", gap: 5 }}>
{WEEK7.map(day => {
const on = (workoutLog.walk || []).includes(day);
return (
<button key={day} onClick={() => setWorkoutLog(p => {
const arr = p.walk || [];
return { ...p, walk: on ? arr.filter(d => d !== day) : [...arr, day] };
})} style={{ flex: 1, height: 34, borderRadius: 8, background: on ? C.green : C.surface, border: "1px solid " + (on ? C.green : C.border), color: on ? C.bg : C.muted, fontSize: 10, fontWeight: 700, cursor: "pointer" }}>{day}</button>
);
})}
</div>
</div>

<div style={{ color: C.muted, fontSize: 11, textTransform: "uppercase", letterSpacing: 2, marginTop: 4 }}>Optional Extras</div>
{HABITS_OPTIONAL.map(h => (
<div key={h.id} style={{ background: C.card, border: "1px solid " + C.border, borderRadius: 14, padding: 16 }}>
<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: h.max !== 1 && (optionals[h.id] || 0) >= 1 ? 12 : 0 }}>
<div style={{ display: "flex", gap: 10, alignItems: "center" }}>
<span style={{ fontSize: 22 }}>{h.icon}</span>
<div>
<div style={{ color: C.text, fontWeight: 700, fontSize: 14 }}>{h.label}</div>
{h.note && <div style={{ color: C.muted, fontSize: 11, marginTop: 1 }}>{h.note}</div>}
</div>
<Tag text="optional" color={C.lavender} />
</div>
<Toggle value={(optionals[h.id] || 0) >= 1} onChange={v => setOptionals(p => ({ ...p, [h.id]: v ? (h.max === 1 ? 1 : 5) : 0 }))} color={C.lavender} />
</div>
{h.max !== 1 && (optionals[h.id] || 0) >= 1 && (
<StepCounter value={optionals[h.id] || 0} onChange={v => setOptionals(p => ({ ...p, [h.id]: v }))} min={0} max={h.max} step={h.step} unit={h.unit} color={C.lavender} />
)}
</div>
))}

<div style={{ background: C.card, border: "1px solid " + C.border, borderRadius: 14, padding: 16 }}>
<div style={{ color: C.text, fontWeight: 700, marginBottom: 10, fontSize: 14 }}>📝 Today's Wins & Reflections</div>
<textarea placeholder="Wins, energy, shifts, observations, gratitude overflow..." style={{ width: "100%", minHeight: 90, background: C.surface, border: "1px solid " + C.border, borderRadius: 10, padding: 12, color: C.text, fontSize: 14, resize: "none", outline: "none", fontFamily: "inherit", boxSizing: "border-box" }} />
</div>
</div>
```

);
}

// ── Cleanse ───────────────────────────────────────────────────────────────────

function CleanseScreen({ habitValues, setHabitValues }) {
const colonCleanse = habitValues.colon_cleanse || 0;
const fastDays = habitValues.fast_days || 0;

return (
<div style={{ display: “flex”, flexDirection: “column”, gap: 16 }}>
<div>
<div style={{ color: C.muted, fontSize: 11, textTransform: “uppercase”, letterSpacing: 2 }}>Phase 1 · Days 1–10</div>
<div style={{ color: C.text, fontSize: 22, fontWeight: 800, fontFamily: “‘Cormorant Garamond’,serif” }}>Colon Cleanse Protocol</div>
<div style={{ color: C.muted, fontSize: 13, marginTop: 2 }}>Tolman Health · Deep gut reset · Cellular renewal</div>
</div>

```
<div style={{ background: "linear-gradient(135deg,#1e1a0e,#261f10)", border: "1px solid " + C.gold + "40", borderRadius: 16, padding: 18 }}>
<div style={{ color: C.gold, fontWeight: 800, fontSize: 12, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 14 }}>🌅 Every Morning — Non-Negotiable</div>
{[["🥤","On waking","500ml water + juice of ½ lemon + 2 pinches Salts of the Earth","morning_0"],["🌿","Within first hour","Greens powder in water","morning_1"],["🧂","Throughout the day","Salts of the Earth — couple of pinches","morning_2"]].map((row, i) => (
<div key={i} style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: i < 2 ? 14 : 0 }}>
<div style={{ width: 36, height: 36, borderRadius: 10, background: C.gold + "22", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>{row[0]}</div>
<div style={{ flex: 1 }}>
<div style={{ color: C.text, fontSize: 13, fontWeight: 600 }}>{row[2]}</div>
<div style={{ color: C.muted, fontSize: 11, marginTop: 1 }}>{row[1]}</div>
</div>
<Toggle value={(habitValues[row[3]] || 0) >= 1} onChange={v => setHabitValues(p => ({ ...p, [row[3]]: v ? 1 : 0 }))} color={C.gold} />
</div>
))}
</div>

<div style={{ background: C.card, border: "1px solid " + C.accent + "40", borderRadius: 16, padding: 18 }}>
<div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
<div>
<div style={{ color: C.accent, fontWeight: 800, fontSize: 13, textTransform: "uppercase", letterSpacing: 1.5 }}>🫧 Colon Cleanse Drinks</div>
<div style={{ color: C.muted, fontSize: 12, marginTop: 2 }}>5 times per day · Days 1–4</div>
</div>
<Tag text={colonCleanse + "/5 today"} color={colonCleanse >= 5 ? C.green : C.accent} />
</div>
<div style={{ display: "flex", gap: 7, marginBottom: 12 }}>
{[1,2,3,4,5].map(n => (
<div key={n} onClick={() => setHabitValues(p => ({ ...p, colon_cleanse: colonCleanse === n ? n - 1 : n }))} style={{ flex: 1, height: 44, borderRadius: 10, cursor: "pointer", background: colonCleanse >= n ? C.accent : C.surface, border: "1px solid " + (colonCleanse >= n ? C.accent : C.border), display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: colonCleanse >= n ? C.bg : C.muted, transition: "all 0.2s" }}>{colonCleanse >= n ? "✓" : n}</div>
))}
</div>
<div style={{ color: C.muted, fontSize: 12, lineHeight: 1.6 }}>Space evenly: morning · mid-morning · midday · afternoon · evening</div>
</div>

<div style={{ background: C.card, border: "1px solid " + C.blue + "30", borderRadius: 16, padding: 18 }}>
<div style={{ color: C.blue, fontWeight: 800, fontSize: 13, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 4 }}>⚡ Fasting Option</div>
<div style={{ color: C.muted, fontSize: 12, marginBottom: 14 }}>Days 1–3 · Water, lemon water and fresh juices only</div>
<StepCounter value={fastDays} onChange={v => setHabitValues(p => ({ ...p, fast_days: v }))} min={0} max={3} step={1} unit="fast days" color={C.blue} />
</div>

<div style={{ background: C.card, border: "1px solid " + C.border, borderRadius: 16, padding: 18 }}>
<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
<div style={{ display: "flex", gap: 10, alignItems: "center" }}>
<span style={{ fontSize: 22 }}>☕</span>
<div>
<div style={{ color: C.text, fontWeight: 700, fontSize: 14 }}>Coffee Enema</div>
<div style={{ color: C.muted, fontSize: 12 }}>Deeper detox · Liver support</div>
</div>
<Tag text="optional" color={C.lavender} />
</div>
<Toggle value={(habitValues.enema || 0) >= 1} onChange={v => setHabitValues(p => ({ ...p, enema: v ? 1 : 0 }))} color={C.lavender} />
</div>
</div>

<div style={{ background: C.card, border: "1px solid " + C.border, borderRadius: 16, padding: 18 }}>
<div style={{ color: C.gold, fontWeight: 700, fontSize: 13, marginBottom: 12 }}>💡 Cleanse Support Tips</div>
{["Headaches and fatigue on days 1–3 are normal — your body is detoxing","Stay close to home on colon cleanse days — bathroom access needed","Kangen ionised water amplifies the cleanse — use if you have it","Rest more than usual — this is deep cellular work","Symptoms easing by day 4–5 signals the detox is working","Greens powder daily helps mineralise and support elimination"].map((tip, i) => (
<div key={i} style={{ display: "flex", gap: 8, marginBottom: i < 5 ? 8 : 0 }}>
<span style={{ color: C.accent, fontSize: 12, flexShrink: 0, marginTop: 1 }}>→</span>
<span style={{ color: C.sand, fontSize: 13 }}>{tip}</span>
</div>
))}
</div>
</div>
```

);
}

// ── Soul Day ──────────────────────────────────────────────────────────────────

function SoulDay({ soulDay, setSoulDay }) {
const [expanded, setExpanded] = useState(null);

return (
<div style={{ display: “flex”, flexDirection: “column”, gap: 18 }}>
<div style={{ background: “linear-gradient(145deg,#141018,#1c1528)”, borderRadius: 20, padding: 24, border: “1px solid “ + C.lavender + “30”, position: “relative”, overflow: “hidden” }}>
<div style={{ position: “absolute”, top: -50, right: -40, width: 160, height: 160, borderRadius: “50%”, background: “radial-gradient(circle,” + C.lavender + “20,transparent 65%)” }} />
<div style={{ position: “absolute”, bottom: -40, left: -30, width: 130, height: 130, borderRadius: “50%”, background: “radial-gradient(circle,” + C.green + “15,transparent 65%)” }} />
<div style={{ color: C.lavender, fontSize: 11, textTransform: “uppercase”, letterSpacing: 2.5, marginBottom: 6 }}>Freedom lifestyle · Weekly ritual</div>
<div style={{ color: C.text, fontSize: 28, fontWeight: 800, fontFamily: “‘Cormorant Garamond’,serif”, lineHeight: 1.1, marginBottom: 12 }}>Soul Day 🌙</div>
<div style={{ color: C.sand, fontSize: 14, lineHeight: 1.75 }}>
Half to a full day just for <em>you</em>. No agenda. No productivity. Space to be, to nourish, to let whatever wants to come through — come through.
</div>
</div>

```
<div style={{ background: C.lavender + "15", border: "1px solid " + C.lavender + "30", borderRadius: 14, padding: 16 }}>
<div style={{ color: C.lavender, fontWeight: 800, fontSize: 13, marginBottom: 10 }}>💜 Your permission slip</div>
{["You are allowed to rest without earning it","You are allowed to do things that have no outcome","You are allowed to just BE — not do","This IS part of the program. It's not a skip day — it's a sacred day"].map((line, i) => (
<div key={i} style={{ display: "flex", gap: 8, marginBottom: i < 3 ? 7 : 0 }}>
<span style={{ color: C.lavender, fontSize: 12, flexShrink: 0, marginTop: 1 }}>✦</span>
<span style={{ color: C.sand, fontSize: 13 }}>{line}</span>
</div>
))}
</div>

<div style={{ background: C.card, border: "1px solid " + C.border, borderRadius: 14, padding: 16 }}>
<div style={{ color: C.text, fontWeight: 700, fontSize: 14, marginBottom: 12 }}>This week — did you take your Soul Day?</div>
<div style={{ display: "flex", gap: 8 }}>
{[["Half Day", "half"], ["Full Day", "full"], ["Not yet", "none"]].map(item => (
<button key={item[1]} onClick={() => setSoulDay(item[1])} style={{ flex: 1, padding: "10px 6px", borderRadius: 10, cursor: "pointer", fontFamily: "inherit", background: soulDay === item[1] ? (item[1] === "none" ? C.border : C.lavender) : C.surface, border: "1px solid " + (soulDay === item[1] ? C.lavender : C.border), color: soulDay === item[1] ? (item[1] === "none" ? C.muted : C.bg) : C.muted, fontSize: 12, fontWeight: 700, transition: "all 0.2s" }}>{item[0]}</button>
))}
</div>
{soulDay && soulDay !== "none" && (
<div style={{ marginTop: 12, color: C.green, fontSize: 13, fontWeight: 600 }}>
✨ Beautiful. That time fills you back up so you can pour from a full cup.
</div>
)}
</div>

<div style={{ color: C.muted, fontSize: 11, textTransform: "uppercase", letterSpacing: 2 }}>Ideas — what lights you up?</div>
{SOUL_IDEAS.map((cat, i) => (
<div key={i} style={{ background: C.card, border: "1px solid " + (expanded === i ? C.lavender + "60" : C.border), borderRadius: 14, overflow: "hidden", transition: "border 0.2s" }}>
<div onClick={() => setExpanded(expanded === i ? null : i)} style={{ padding: "14px 16px", display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }}>
<span style={{ fontSize: 22 }}>{cat.icon}</span>
<div style={{ color: C.text, fontWeight: 700, fontSize: 14, flex: 1 }}>{cat.label}</div>
<span style={{ color: C.muted, fontSize: 18, display: "inline-block", transform: expanded === i ? "rotate(90deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>›</span>
</div>
{expanded === i && (
<div style={{ padding: "0 16px 16px", display: "flex", flexDirection: "column", gap: 8 }}>
{cat.ideas.map((idea, j) => (
<div key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
<span style={{ color: C.lavender, fontSize: 12, flexShrink: 0, marginTop: 2 }}>→</span>
<span style={{ color: C.sand, fontSize: 13 }}>{idea}</span>
</div>
))}
</div>
)}
</div>
))}

<div style={{ background: C.card, border: "1px solid " + C.border, borderRadius: 14, padding: 16 }}>
<div style={{ color: C.text, fontWeight: 700, marginBottom: 6, fontSize: 14 }}>🌙 Soul Day reflections</div>
<div style={{ color: C.muted, fontSize: 12, marginBottom: 10 }}>What came through? Any downloads, ideas, clarity, feelings?</div>
<textarea placeholder="Write freely — no editing, no filters. This is just for you..." style={{ width: "100%", minHeight: 100, background: C.surface, border: "1px solid " + C.border, borderRadius: 10, padding: 12, color: C.text, fontSize: 14, resize: "none", outline: "none", fontFamily: "inherit", boxSizing: "border-box" }} />
</div>
</div>
```

);
}

// ── Photos ────────────────────────────────────────────────────────────────────

function Photos({ photos, setPhotos }) {
const slots = [
{ slot: “d1_front”, label: “Day 1 — Front” }, { slot: “d1_side”, label: “Day 1 — Side” },
{ slot: “w1”, label: “Week 1 Check-In” }, { slot: “w2”, label: “Week 2 Check-In” },
{ slot: “w3”, label: “Week 3 Check-In” }, { slot: “w4”, label: “Week 4 Check-In” },
{ slot: “d40_front”, label: “Day 40 — Front” }, { slot: “d40_side”, label: “Day 40 — Side” },
];
return (
<div style={{ display: “flex”, flexDirection: “column”, gap: 16 }}>
<div>
<div style={{ color: C.muted, fontSize: 11, textTransform: “uppercase”, letterSpacing: 2 }}>Progress Journey</div>
<div style={{ color: C.text, fontSize: 22, fontWeight: 800, fontFamily: “‘Cormorant Garamond’,serif” }}>Photo Check-Ins</div>
<div style={{ color: C.muted, fontSize: 13, marginTop: 2 }}>Document your transformation ✨</div>
</div>
<div style={{ background: C.card, border: “1px solid “ + C.gold + “30”, borderRadius: 12, padding: 14 }}>
<div style={{ color: C.gold, fontSize: 12, fontWeight: 700, marginBottom: 4 }}>📌 Consistency tips</div>
<div style={{ color: C.muted, fontSize: 12 }}>Same time · Same location · Same outfit · Same angle — every check-in</div>
</div>
<div style={{ display: “grid”, gridTemplateColumns: “1fr 1fr”, gap: 12 }}>
{slots.map(s => <PhotoSlot key={s.slot} label={s.label} slot={s.slot} photos={photos} setPhotos={setPhotos} />)}
</div>
</div>
);
}

// ── Timeline ──────────────────────────────────────────────────────────────────

function Timeline({ day }) {
return (
<div style={{ display: “flex”, flexDirection: “column”, gap: 16 }}>
<div>
<div style={{ color: C.muted, fontSize: 11, textTransform: “uppercase”, letterSpacing: 2 }}>Your Journey</div>
<div style={{ color: C.text, fontSize: 22, fontWeight: 800, fontFamily: “‘Cormorant Garamond’,serif” }}>40-Day Timeline</div>
</div>
{PHASES.map(ph => {
const start = ph.id === 1 ? 1 : 11;
const end = ph.id === 1 ? 10 : 40;
return (
<div key={ph.id} style={{ background: C.card, border: “1px solid “ + C.border, borderRadius: 16, padding: 20 }}>
<div style={{ display: “flex”, gap: 12, marginBottom: 14 }}>
<div style={{ width: 4, borderRadius: 99, background: ph.color, flexShrink: 0 }} />
<div>
<div style={{ color: ph.color, fontWeight: 800, fontSize: 14, textTransform: “uppercase”, letterSpacing: 1 }}>Phase {ph.id}: {ph.name}</div>
<div style={{ color: C.muted, fontSize: 12 }}>{ph.days}</div>
<div style={{ color: C.sand, fontSize: 13, marginTop: 4, lineHeight: 1.5 }}>{ph.desc}</div>
</div>
</div>
<div style={{ display: “flex”, flexWrap: “wrap”, gap: 5 }}>
{Array.from({ length: end - start + 1 }, (_, i) => {
const d = start + i;
const done = d < day;
const cur = d === day;
return (
<div key={d} style={{ width: 30, height: 30, borderRadius: 8, background: done ? ph.color : cur ? ph.color + “30” : C.surface, border: “1px solid “ + (cur ? ph.color : done ? ph.color : C.border), display: “flex”, alignItems: “center”, justifyContent: “center”, fontSize: 10, fontWeight: cur || done ? 700 : 400, color: done ? C.bg : cur ? ph.color : C.muted }}>
{done ? “✓” : d}
</div>
);
})}
</div>
</div>
);
})}
</div>
);
}

// ── Nutrition ─────────────────────────────────────────────────────────────────

function NutritionCalc() {
const [form, setForm] = useState({ weight: “”, height: “”, age: “”, sex: “female”, goal: “maintain”, activity: “moderate” });
const [result, setResult] = useState(null);
const [loading, setLoading] = useState(false);
const set = (k, v) => setForm(p => ({ …p, [k]: v }));

const calculate = async () => {
if (!form.weight || !form.height || !form.age) return;
setLoading(true);
try {
const res = await fetch(“https://api.anthropic.com/v1/messages”, {
method: “POST”,
headers: { “Content-Type”: “application/json” },
body: JSON.stringify({
model: “claude-sonnet-4-20250514”,
max_tokens: 1000,
system: “You are a nutrition expert for THRIVIN30, a longevity whole-foods reset. Respond ONLY with valid JSON, no markdown, no extra text. Keys: calories(number), protein_g(number), carbs_g(number), fats_g(number), protein_note(string max 55 chars), carbs_note(string max 55 chars), fats_note(string max 55 chars), summary(string max 130 chars), meal_tip(string max 110 chars).”,
messages: [{ role: “user”, content: “Calculate daily macros. Weight:” + form.weight + “kg, Height:” + form.height + “cm, Age:” + form.age + “, Sex:” + form.sex + “, Goal:” + form.goal + “, Activity:” + form.activity + “. Whole foods focus. Return ONLY JSON.” }],
}),
});
const data = await res.json();
const text = (data.content && data.content[0] && data.content[0].text) || “{}”;
setResult(JSON.parse(text.replace(/`json|`/g, “”).trim()));
} catch (e) {
setResult(null);
}
setLoading(false);
};

const inputStyle = { padding: “11px 14px”, borderRadius: 10, background: C.surface, border: “1px solid “ + C.border, color: C.text, fontSize: 15, outline: “none”, fontFamily: “inherit”, width: “100%”, boxSizing: “border-box” };

return (
<div style={{ display: “flex”, flexDirection: “column”, gap: 16 }}>
<div>
<div style={{ color: C.muted, fontSize: 11, textTransform: “uppercase”, letterSpacing: 2 }}>AI-Powered</div>
<div style={{ color: C.text, fontSize: 22, fontWeight: 800, fontFamily: “‘Cormorant Garamond’,serif” }}>Nutrition Calculator</div>
<div style={{ color: C.muted, fontSize: 13, marginTop: 2 }}>Daily protein, carbs and fats — tailored to you</div>
</div>
<div style={{ display: “grid”, gridTemplateColumns: “1fr 1fr”, gap: 12 }}>
{[[“Weight (kg)”,“weight”,“e.g. 65”],[“Height (cm)”,“height”,“e.g. 168”],[“Age”,“age”,“e.g. 48”]].map(row => (
<div key={row[1]} style={{ display: “flex”, flexDirection: “column”, gap: 5 }}>
<label style={{ color: C.muted, fontSize: 11, textTransform: “uppercase”, letterSpacing: 1 }}>{row[0]}</label>
<input type=“number” value={form[row[1]]} onChange={e => set(row[1], e.target.value)} placeholder={row[2]} style={inputStyle} />
</div>
))}
<div style={{ display: “flex”, flexDirection: “column”, gap: 5 }}>
<label style={{ color: C.muted, fontSize: 11, textTransform: “uppercase”, letterSpacing: 1 }}>Sex</label>
<select value={form.sex} onChange={e => set(“sex”, e.target.value)} style={inputStyle}>
<option value="female">Female</option>
<option value="male">Male</option>
</select>
</div>
</div>
<div style={{ display: “flex”, flexDirection: “column”, gap: 5 }}>
<label style={{ color: C.muted, fontSize: 11, textTransform: “uppercase”, letterSpacing: 1 }}>Your Goal</label>
<select value={form.goal} onChange={e => set(“goal”, e.target.value)} style={inputStyle}>
<option value="lose">Lose body fat</option>
<option value="maintain">Maintain and optimise</option>
<option value="gain">Build muscle</option>
<option value="longevity">Longevity and vitality</option>
</select>
</div>
<div style={{ display: “flex”, flexDirection: “column”, gap: 5 }}>
<label style={{ color: C.muted, fontSize: 11, textTransform: “uppercase”, letterSpacing: 1 }}>Activity Level</label>
<select value={form.activity} onChange={e => set(“activity”, e.target.value)} style={inputStyle}>
<option value="sedentary">Sedentary (desk job)</option>
<option value="light">Light (walks and gentle exercise)</option>
<option value="moderate">Moderate (THRIVIN30 active)</option>
<option value="active">Very active (daily hard training)</option>
</select>
</div>
<button onClick={calculate} disabled={loading || !form.weight || !form.height || !form.age} style={{ padding: “14px”, borderRadius: 12, background: “linear-gradient(135deg,” + C.accentD + “,” + C.accent + “)”, border: “none”, color: C.bg, fontWeight: 800, cursor: “pointer”, fontSize: 15, opacity: loading || !form.weight ? 0.55 : 1, fontFamily: “inherit” }}>
{loading ? “Calculating…” : “Calculate My Macros ✨”}
</button>
{result && (
<div style={{ background: C.card, border: “1px solid “ + C.border, borderRadius: 16, padding: 20, display: “flex”, flexDirection: “column”, gap: 14 }}>
<div style={{ textAlign: “center” }}>
<div style={{ color: C.muted, fontSize: 11, textTransform: “uppercase”, letterSpacing: 2 }}>Daily Target</div>
<div style={{ color: C.accent, fontSize: 40, fontWeight: 900, fontFamily: “‘Cormorant Garamond’,serif”, lineHeight: 1 }}>{result.calories}<span style={{ fontSize: 16, color: C.muted }}> kcal</span></div>
</div>
<div style={{ display: “grid”, gridTemplateColumns: “1fr 1fr 1fr”, gap: 10 }}>
{[[“Protein”, result.protein_g, “g”, C.green, result.protein_note], [“Carbs”, result.carbs_g, “g”, C.gold, result.carbs_note], [“Fats”, result.fats_g, “g”, C.blue, result.fats_note]].map(row => (
<div key={row[0]} style={{ background: C.surface, borderRadius: 12, padding: “14px 10px”, textAlign: “center”, border: “1px solid “ + row[3] + “30” }}>
<div style={{ color: row[3], fontSize: 24, fontWeight: 900 }}>{row[1]}<span style={{ fontSize: 11 }}>{row[2]}</span></div>
<div style={{ color: C.text, fontSize: 12, fontWeight: 700 }}>{row[0]}</div>
<div style={{ color: C.muted, fontSize: 10, marginTop: 3 }}>{row[4]}</div>
</div>
))}
</div>
<div style={{ color: C.sand, fontSize: 13, background: C.surface, borderRadius: 10, padding: 12, borderLeft: “3px solid “ + C.accent, lineHeight: 1.6 }}>{result.summary}</div>
<div style={{ color: C.muted, fontSize: 12, background: C.surface, borderRadius: 10, padding: 12 }}>🍽 <strong style={{ color: C.gold }}>Meal tip:</strong> {result.meal_tip}</div>
</div>
)}
</div>
);
}

// ── AI Coach ──────────────────────────────────────────────────────────────────

function AICoach() {
const [msgs, setMsgs] = useState([
{ role: “assistant”, text: “Hey! I’m your THRIVIN30 coach 🔥 Ask me anything — cleanse symptoms, what to eat, cold showers, workouts, mindset, dream building, or what’s coming next in your program.” }
]);
const [input, setInput] = useState(””);
const [loading, setLoading] = useState(false);

const send = async () => {
if (!input.trim() || loading) return;
const userMsg = input.trim();
setInput(””);
setMsgs(p => […p, { role: “user”, text: userMsg }]);
setLoading(true);
try {
const res = await fetch(“https://api.anthropic.com/v1/messages”, {
method: “POST”,
headers: { “Content-Type”: “application/json” },
body: JSON.stringify({
model: “claude-sonnet-4-20250514”,
max_tokens: 1000,
system: “You are the THRIVIN30 wellness coach — warm, direct, results-focused. THRIVIN30 is a 40-day longevity reset by Kelli and Andrew. Phase 1 (Days 1–10): Tolman colon cleanse. Morning: 500ml water + lemon + Salts of the Earth. Greens powder daily. Colon cleanse drink x5/day for 4 days. Optional 1–3 day fast. Optional coffee enemas. Phase 2 (Days 11–40): 30-day THRIVE — mind, body, soul identity shift. Become Her/Him. Daily habits: 3L clean water, 8+ hrs sleep, 5–10 gratitudes, 30sec–2min cold shower, whole foods (no alcohol/processed, 1 cheat/wk), 2–3 dream building tasks, 15min personal development. Workouts: 3x resistance + 2x hybrid per week. 6 days/week 30–45min walk. Weekly Soul Day — half to full day of rest and nourishment. Optional: sauna, dry brushing, Wim Hof breathwork 11min. Be warm, fierce, direct. Keep replies concise. Use occasional emojis.”,
messages: […msgs.slice(1).map(m => ({ role: m.role, content: m.text })), { role: “user”, content: userMsg }],
}),
});
const data = await res.json();
const reply = (data.content && data.content[0] && data.content[0].text) || “Try again 🙏”;
setMsgs(p => […p, { role: “assistant”, text: reply }]);
} catch (e) {
setMsgs(p => […p, { role: “assistant”, text: “Connection hiccup — try again.” }]);
}
setLoading(false);
};

const QUICK = [“I feel headachy on Day 2”, “What can I eat in Phase 1?”, “Cold shower beginner tips”, “Colon cleanse — what to expect?”, “Best mindset podcasts?”, “What is a Soul Day?”];

return (
<div style={{ display: “flex”, flexDirection: “column”, gap: 14 }}>
<div>
<div style={{ color: C.muted, fontSize: 11, textTransform: “uppercase”, letterSpacing: 2 }}>AI-Powered</div>
<div style={{ color: C.text, fontSize: 22, fontWeight: 800, fontFamily: “‘Cormorant Garamond’,serif” }}>THRIVIN30 Coach</div>
</div>
<div style={{ maxHeight: 370, overflowY: “auto”, display: “flex”, flexDirection: “column”, gap: 10 }}>
{msgs.map((m, i) => (
<div key={i} style={{ display: “flex”, justifyContent: m.role === “user” ? “flex-end” : “flex-start”, gap: 8 }}>
{m.role === “assistant” && (
<div style={{ width: 30, height: 30, borderRadius: “50%”, background: “linear-gradient(135deg,” + C.accent + “,” + C.gold + “)”, display: “flex”, alignItems: “center”, justifyContent: “center”, fontSize: 14, flexShrink: 0 }}>🔥</div>
)}
<div style={{ maxWidth: “82%”, padding: “11px 15px”, fontSize: 14, lineHeight: 1.55, borderRadius: m.role === “user” ? “16px 16px 4px 16px” : “16px 16px 16px 4px”, background: m.role === “user” ? “linear-gradient(135deg,” + C.accentD + “,” + C.accent + “)” : C.card, border: m.role === “user” ? “none” : “1px solid “ + C.border, color: m.role === “user” ? C.bg : C.text, fontWeight: m.role === “user” ? 600 : 400 }}>{m.text}</div>
</div>
))}
{loading && (
<div style={{ display: “flex”, gap: 8 }}>
<div style={{ width: 30, height: 30, borderRadius: “50%”, background: “linear-gradient(135deg,” + C.accent + “,” + C.gold + “)”, display: “flex”, alignItems: “center”, justifyContent: “center”, fontSize: 14 }}>🔥</div>
<div style={{ padding: “11px 15px”, borderRadius: “16px 16px 16px 4px”, background: C.card, border: “1px solid “ + C.border, color: C.muted, fontSize: 14 }}>Thinking…</div>
</div>
)}
</div>
<div style={{ display: “flex”, gap: 8 }}>
<input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === “Enter” && send()} placeholder=“Ask your coach anything…” style={{ flex: 1, padding: “12px 16px”, borderRadius: 12, background: C.card, border: “1px solid “ + C.border, color: C.text, fontSize: 14, outline: “none”, fontFamily: “inherit” }} />
<button onClick={send} disabled={loading || !input.trim()} style={{ padding: “12px 18px”, borderRadius: 12, background: “linear-gradient(135deg,” + C.accentD + “,” + C.accent + “)”, border: “none”, color: C.bg, fontWeight: 800, cursor: “pointer”, opacity: loading || !input.trim() ? 0.5 : 1, fontSize: 18 }}>→</button>
</div>
<div style={{ display: “flex”, flexWrap: “wrap”, gap: 7 }}>
{QUICK.map(q => (
<button key={q} onClick={() => setInput(q)} style={{ padding: “6px 12px”, borderRadius: 20, background: C.surface, border: “1px solid “ + C.border, color: C.muted, fontSize: 11, cursor: “pointer” }}>{q}</button>
))}
</div>
</div>
);
}

// ── Admin ─────────────────────────────────────────────────────────────────────

function Admin() {
const [msg, setMsg] = useState(””);
const [sent, setSent] = useState(false);

const copyMessage = () => {
if (!msg.trim()) return;
navigator.clipboard.writeText(msg).then(() => {
setSent(true);
setTimeout(() => setSent(false), 3000);
});
};
return (
<div style={{ display: “flex”, flexDirection: “column”, gap: 16 }}>
<div>
<div style={{ color: C.muted, fontSize: 11, textTransform: “uppercase”, letterSpacing: 2 }}>Admin View</div>
<div style={{ color: C.text, fontSize: 22, fontWeight: 800, fontFamily: “‘Cormorant Garamond’,serif” }}>Member Overview</div>
</div>
<div style={{ display: “grid”, gridTemplateColumns: “1fr 1fr 1fr”, gap: 10 }}>
{[[“Members”, DEMO_MEMBERS.length, C.accent], [“Avg Score”, “79%”, C.gold], [“Bali Spots”, “24 left”, C.green]].map(row => (
<div key={row[0]} style={{ background: C.card, border: “1px solid “ + C.border, borderRadius: 12, padding: “14px 10px”, textAlign: “center” }}>
<div style={{ color: row[2], fontSize: 20, fontWeight: 900 }}>{row[1]}</div>
<div style={{ color: C.muted, fontSize: 10 }}>{row[0]}</div>
</div>
))}
</div>
{DEMO_MEMBERS.map(m => (
<div key={m.name} style={{ background: C.card, border: “1px solid “ + C.border, borderRadius: 14, padding: 14, display: “flex”, alignItems: “center”, gap: 12 }}>
<div style={{ width: 38, height: 38, borderRadius: “50%”, flexShrink: 0, background: “linear-gradient(135deg,” + C.accent + “,” + C.gold + “)”, display: “flex”, alignItems: “center”, justifyContent: “center”, fontWeight: 800, fontSize: 13, color: C.bg }}>{m.name.split(” “).map(w => w[0]).join(””).slice(0, 2)}</div>
<div style={{ flex: 1 }}>
<div style={{ color: C.text, fontWeight: 700, fontSize: 14 }}>{m.name}</div>
<div style={{ color: C.muted, fontSize: 11 }}>Day {m.day} · {m.phase}</div>
</div>
<div style={{ textAlign: “right” }}>
<div style={{ color: m.score >= 85 ? C.green : m.score >= 70 ? C.gold : C.accent, fontWeight: 900, fontSize: 18 }}>{m.score}%</div>
<div style={{ color: C.muted, fontSize: 10 }}>today</div>
</div>
<div style={{ width: 8, height: 8, borderRadius: “50%”, background: m.score >= 80 ? C.green : C.gold, flexShrink: 0 }} />
</div>
))}
<div style={{ background: C.card, border: “1px solid “ + C.border, borderRadius: 14, padding: 16 }}>
<div style={{ color: C.text, fontWeight: 700, marginBottom: 6 }}>📨 Message All Members</div>
<div style={{ color: C.muted, fontSize: 12, marginBottom: 10 }}>Write your message → copy it → paste into Instagram, WhatsApp or email to send to your group</div>
<textarea value={msg} onChange={e => { setMsg(e.target.value); setSent(false); }} placeholder=“Motivation, protocol reminders, updates, encouragement…” style={{ width: “100%”, minHeight: 100, background: C.surface, border: “1px solid “ + C.border, borderRadius: 10, padding: 12, color: C.text, fontSize: 14, resize: “none”, outline: “none”, fontFamily: “inherit”, boxSizing: “border-box”, marginBottom: 10 }} />
<button onClick={copyMessage} disabled={!msg.trim()} style={{ padding: “10px 20px”, borderRadius: 10, background: sent ? “linear-gradient(135deg,#3a7a4a,#5fb882)” : “linear-gradient(135deg,” + C.accentD + “,” + C.accent + “)”, border: “none”, color: C.bg, fontWeight: 800, cursor: “pointer”, fontSize: 14, transition: “background 0.3s”, opacity: !msg.trim() ? 0.5 : 1 }}>
{sent ? “✅ Copied! Now paste to your group” : “Copy Message 📋”}
</button>
</div>
</div>
);
}

// ── App Shell ─────────────────────────────────────────────────────────────────

const NAV = [
{ icon: “🏠”, label: “Home” }, { icon: “☀️”, label: “My Day” }, { icon: “🫧”, label: “Cleanse” },
{ icon: “🌙”, label: “Soul Day” }, { icon: “📸”, label: “Photos” }, { icon: “📅”, label: “Timeline” },
{ icon: “🥗”, label: “Nutrition” }, { icon: “🤖”, label: “Coach” }, { icon: “⚙️”, label: “Admin” },
];

export default function App() {
const [tab, setTab] = useState(0);
const [habitValues, setHabitValues] = useState({ water: 0, sleep: 0, gratitude: 0, cold: 0, pd: 0, dream: 0, morning_ritual: 0, greens: 0, wholefoods: 0, noalcohol: 0 });
const [workoutLog, setWorkoutLog] = useState({});
const [optionals, setOptionals] = useState({});
const [photos, setPhotos] = useState({});
const [soulDay, setSoulDay] = useState(null);
const [member, setMember] = useState(() => localStorage.getItem(“thrivin30_name”) || “”);
const [nameInput, setNameInput] = useState(””);
const [startDateInput, setStartDateInput] = useState(””);
const [startDate, setStartDate] = useState(() => localStorage.getItem(“thrivin30_start”) || “”);

const currentDay = startDate
? Math.min(40, Math.max(1, Math.floor((Date.now() - new Date(startDate).getTime()) / 86400000) + 1))
: 1;

const handleStart = () => {
if (!nameInput.trim() || !startDateInput) return;
localStorage.setItem(“thrivin30_name”, nameInput.trim());
localStorage.setItem(“thrivin30_start”, startDateInput);
setMember(nameInput.trim());
setStartDate(startDateInput);
};

if (!member) {
return (
<div style={{ minHeight: “100vh”, background: C.bg, display: “flex”, flexDirection: “column”, alignItems: “center”, justifyContent: “center”, padding: 30, fontFamily: “‘DM Sans’,‘Segoe UI’,sans-serif”, maxWidth: 480, margin: “0 auto” }}>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700;800&family=DM+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
<div style={{ textAlign: “center”, marginBottom: 32 }}>
<div style={{ fontFamily: “‘Cormorant Garamond’,serif”, fontWeight: 800, fontSize: 42, color: C.accent, letterSpacing: -1 }}>THRIVIN<span style={{ color: C.gold }}>30</span></div>
<div style={{ fontSize: 12, color: C.muted, textTransform: “uppercase”, letterSpacing: 3, marginTop: 4 }}>Rise. Reset. Thrive.</div>
</div>
<div style={{ background: “linear-gradient(145deg,#1e1b16,#27200e)”, borderRadius: 20, padding: 30, width: “100%”, border: “1px solid “ + C.border, textAlign: “center” }}>
<div style={{ fontSize: 36, marginBottom: 12 }}>🔥</div>
<div style={{ color: C.text, fontSize: 22, fontWeight: 800, fontFamily: “‘Cormorant Garamond’,serif”, marginBottom: 8 }}>Welcome to your 40-day reset</div>
<div style={{ color: C.muted, fontSize: 14, marginBottom: 24, lineHeight: 1.6 }}>You made a powerful decision. Let’s make it official!</div>
<input
value={nameInput}
onChange={e => setNameInput(e.target.value)}
placeholder=“Your first name…”
style={{ width: “100%”, padding: “14px 16px”, borderRadius: 12, background: C.surface, border: “1px solid “ + C.border, color: C.text, fontSize: 16, outline: “none”, fontFamily: “inherit”, boxSizing: “border-box”, textAlign: “center”, marginBottom: 12 }}
/>
<div style={{ color: C.muted, fontSize: 12, marginBottom: 8, textAlign: “left” }}>Your program start date:</div>
<input
type=“date”
value={startDateInput}
onChange={e => setStartDateInput(e.target.value)}
style={{ width: “100%”, padding: “14px 16px”, borderRadius: 12, background: C.surface, border: “1px solid “ + C.border, color: C.text, fontSize: 15, outline: “none”, fontFamily: “inherit”, boxSizing: “border-box”, textAlign: “center”, marginBottom: 20 }}
/>
<button
onClick={handleStart}
disabled={!nameInput.trim() || !startDateInput}
style={{ width: “100%”, padding: “14px”, borderRadius: 12, background: “linear-gradient(135deg,” + C.accentD + “,” + C.accent + “)”, border: “none”, color: C.bg, fontWeight: 800, cursor: “pointer”, fontSize: 16, opacity: !nameInput.trim() || !startDateInput ? 0.5 : 1, fontFamily: “inherit” }}
>
Start My Journey 🔥
</button>
</div>
<div style={{ color: C.muted, fontSize: 12, marginTop: 20, textAlign: “center” }}>40 days · Mind, Body & Soul · Become Her / Him</div>
</div>
);
}

return (
<div style={{ minHeight: “100vh”, background: C.bg, color: C.text, fontFamily: “‘DM Sans’,‘Segoe UI’,sans-serif”, display: “flex”, flexDirection: “column”, maxWidth: 480, margin: “0 auto” }}>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700;800&family=DM+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

```
<div style={{ padding: "18px 20px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
<div>
<div style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 800, fontSize: 26, color: C.accent, letterSpacing: -0.5 }}>THRIVIN<span style={{ color: C.gold }}>30</span></div>
<div style={{ fontSize: 10, color: C.muted, textTransform: "uppercase", letterSpacing: 2.5 }}>40-Day Longevity Reset</div>
</div>
<div onClick={() => {
if (window.confirm("Reset your THRIVIN30 journey? This will clear your name and start date so you can begin a new round!")) {
localStorage.removeItem("thrivin30_name");
localStorage.removeItem("thrivin30_start");
setMember("");
setStartDate("");
setNameInput("");
setStartDateInput("");
setHabitValues({ water: 0, sleep: 0, gratitude: 0, cold: 0, pd: 0, dream: 0, morning_ritual: 0, greens: 0, wholefoods: 0, noalcohol: 0 });
setWorkoutLog({});
setOptionals({});
setPhotos({});
setSoulDay(null);
setTab(0);
}
}} style={{ width: 38, height: 38, borderRadius: "50%", background: "linear-gradient(135deg," + C.accent + "," + C.gold + ")", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 15, color: C.bg, fontFamily: "'Cormorant Garamond',serif", cursor: "pointer" }}>{member.charAt(0).toUpperCase()}</div>
</div>

<div style={{ display: "flex", gap: 4, padding: "14px 16px 0", overflowX: "auto", scrollbarWidth: "none" }}>
{NAV.map((n, i) => (
<button key={i} onClick={() => setTab(i)} style={{ flexShrink: 0, padding: "7px 13px", borderRadius: 20, cursor: "pointer", background: tab === i ? "linear-gradient(135deg," + C.accentD + "," + C.accent + ")" : C.surface, border: "1px solid " + (tab === i ? C.accent : C.border), color: tab === i ? C.bg : C.muted, fontSize: 12, fontWeight: tab === i ? 800 : 500, fontFamily: "inherit", display: "flex", alignItems: "center", gap: 5, transition: "all 0.2s" }}>
<span style={{ fontSize: 14 }}>{n.icon}</span>{n.label}
</button>
))}
</div>

<div style={{ flex: 1, padding: "20px 18px 40px", overflowY: "auto" }}>
{tab === 0 && <Dashboard member={member} day={currentDay} habitValues={habitValues} workoutLog={workoutLog} />}
{tab === 1 && <MyDay habitValues={habitValues} setHabitValues={setHabitValues} workoutLog={workoutLog} setWorkoutLog={setWorkoutLog} optionals={optionals} setOptionals={setOptionals} />}
{tab === 2 && <CleanseScreen habitValues={habitValues} setHabitValues={setHabitValues} />}
{tab === 3 && <SoulDay soulDay={soulDay} setSoulDay={setSoulDay} />}
{tab === 4 && <Photos photos={photos} setPhotos={setPhotos} />}
{tab === 5 && <Timeline day={currentDay} />}
{tab === 6 && <NutritionCalc />}
{tab === 7 && <AICoach />}
{tab === 8 && <Admin />}
</div>
</div>
```

);
}
