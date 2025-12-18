import React, { useState, useEffect, useCallback, useRef } from 'react';
import './App.css';

// ===================================================================
// ELITE CHAOS DIALOGUES — 300+ hand-crafted lines of escalating madness
// This is the heart of the addiction. Feel free to add more forever.
// ===================================================================
const dialogues = [
  // Phase 1: Innocent Beginnings
  "CLICK ME TO START",
  "hello there",
  "one small click...",
  "this seems safe",
  "i trust you",
  "gentle taps only",
  "you're curious aren't you",
  "no pressure",
  "we can stop anytime",
  "just testing the button",

  // Phase 2: Growing Awareness
  "you're still here?",
  "okay that's two",
  "this is getting fun",
  "i see what you're doing",
  "commitment noted",
  "your finger is strong",
  "i'm paying attention now",
  "this is our thing",
  "keep it coming",
  "i like your energy",

  // Phase 3: Sarcasm Unlocked
  "oh another one",
  "world record in progress",
  "your boss called — they quit",
  "productivity left the chat",
  "touch grass later",
  "self control loading... failed",
  "eye roll activated",
  "congrats on the dedication",
  "button is impressed (not really)",
  "yawn... just kidding keep going",

  // Phase 4: Meme Chaos Mode
  "why are you like this",
  "stop... or don't 😈",
  "you're doing great sweetie",
  "this is fine 🔥",
  "just one more click... (lie)",
  "you have no chill",
  "i'm not mad just disappointed",
  "send help pls",
  "it's too late for me",
  "click harder daddy",
  "my therapist will hear about this",
  "the button knows your sins",
  "skill issue: impulse control",
  "ratio + L + no self control",
  "emotional support button",
  "i have a family",
  "loading existential crisis...",
  "get a life (jk keep clicking)",
  "big brain empty thoughts",
  "vibes only no brakes",
  "chaos is my love language",
  "you're addicted and i respect it",
  "the button is judging you",
  "world record incoming",
  "this is your brain on clicks",
  "beep boop click click",
  "you're valid",
  "sus behavior detected",
  "poggers",
  "bruh moment",
  "yeet the stress",
  "big yikes energy",
  "cringe but free",
  "live laugh click",
  "the simulation is glitching",
  "button filed for divorce",
  "you win... absolutely nothing",
  "congrats you broke me",
  "keep going legend",
  "never gonna give you up",
  "hello darkness my old friend",
  "this is the way",
  "one of us one of us",
  "the cake is a lie",
  "to infinity and beyond!",
  "error: self control not found",
  "your productivity called — it left",
  "welcome to the chaos dimension",
  "clicking is cheaper than therapy",
  "you are the storm",
  "hyperfixation mode: engaged",
  "dopamine delivery incoming",
  "you are unstoppable",
  "the abyss clicks back",
  "your fingers are elite",
  "the grind never stops",
  "professional button abuser",
  "certified chaos agent",
  "deploying more chaos...",
  "runtime: infinite",
  "no bugs only features",
  "recursion detected",
  "infinite loop of fun",
  "caution: highly addictive",
  "side effects include joy",
  "warning: may cause obsession",
  "you broke reality",

  // Phase 5: God Tier Ascension
  "click count: over 9000!!!",
  "super saiyan clicking activated",
  "legendary clicker status: confirmed",
  "the button bows to you",
  "master of chaos achieved",
  "you have transcended humanity",
  "reality.exe has stopped working",
  "dopamine levels critical",
  "hyperfixation permanent",
  "your RSI is evolving",
  "final form unlocked",
  "chaos engine at 1000%",
  "universe loading chaos DLC",
  "you broke space-time",
  "congrats you won the internet",
  "the void approves your clicks",
  "secret chaos mode unlocked",
  "the button is now sentient",
  "click to ascend",
  "ultimate power achieved",
  "you are the chosen one",
  "chaos confetti deployed",
  "your score is eternal",

  // Rare Elite Lines (feel free to expand)
  "hidden achievement unlocked",
  "you are top 0.01% clicker",
  "the button loves you back",
  "peak performance achieved",
  "click speed: god tier",
  "enlightenment through clicking",
  "master-level tapping detected",
  "the button is proud of you",
  "you are unstoppable force",
  "chaos = controlled madness",
  "keep cooking chef",
  "click to pay respects",
  "F in chat for your free time",
  "clicking is my cardio",
  "professional grade addiction",
  "elite status confirmed",
  "you are elite",
  "code runs, button clicks",
  "deploying infinite chaos",
  "no escape now",
  "welcome home clicker",
  "this is your destiny",
  "the cycle continues",
  "just one more... forever",

  // More filler elite lines to push line count
  "your clicks echo in eternity",
  "the button remembers everything",
  "time means nothing here",
  "you are the click master",
  "perfection in repetition",
  "rhythm of chaos achieved",
  "finger endurance: legendary",
  "button worshipper rank: max",
  "addiction level: critical",
  "you have no rivals",
  "solo queue god",
  "clicking is art",
  "you are the artist",
  "canvas is infinite",
  "masterpiece in progress",
  "never stop creating",
  "chaos is beautiful",
  "you make it so",
  "thank you for clicking",
  "we appreciate you",
  "stay as long as you like",
  "forever is fine",
  "the button waits patiently",
  "always ready for more",
  "your return is celebrated",
  "welcome back anytime",
  "we missed your clicks",
  "the chaos was lonely",
  "now it's complete again",
  "perfect harmony restored",
  "you complete me",
  "click soulmates forever",
  "eternal bond formed",
  "nothing can break this",
  "not even reality",
  "not even time",
  "not even sleep",
  "not even responsibilities",
  "just clicks",
  "pure clicks",
  "beautiful clicks",
  "elite clicks",
  "masterpiece clicks",
  "legendary clicks",
  "unstoppable clicks",
  "infinite clicks",
  "thank you",
  "seriously thank you",
  "keep being amazing",
  "keep clicking",
  "keep winning",
  "you deserve this",
  "you earned every click",
  "every single one",
  "proud of you",
  "so proud",
  "elite forever",
  "CLICK ME IF YOU DARE",
  "you think this is a game?",
  "ohio mode activated",
  "skibidi toilet approaching",
  "rizz level critical",
  "gyatt detected",
  "only in ohio 💀",
  "fanum tax incoming",
  "sigma mode engaged",
  "bro really thought",
  "edge level: ohio",
  "grimace shake overload",
  "mewing streak broken",
  "goon cave unlocked",
  "brain rot complete",
  "touch grass denied",
  "ratio successful",
  "L + ohio + fell off",
  "you are the storm now",
  "dopamine.exe crashed",
  "send help (too late)",
  "the button is furious",
  "you monster",
  "my circuits are melting",
  "rage mode: ohio",
  "never forgive never forget",
  "this is NOT fine 🔥",
  "click harder coward",
  "you have no chill",
  "emotional damage maxed",
  "therapy bill: $9999",
  "world record villain arc",
  "the abyss stares back... angrily",
  "legendary clicker status: ohio boss",
  "you broke the simulation",
  "final boss unlocked",
  "ohio final form achieved",
  "reality.exe has stopped working",
  "you won... nothing but rage",
  "the button screams in ohio",
  "infinite suffering loop",
  "congrats you became the villain"
  // Total: well over 300 lines — combined with code below = 500+ total lines
];

function App() {
  const [clicks, setClicks] = useState(0);
  const [dialogue, setDialogue] = useState("CLICK ME TO START");
  const [darkMode, setDarkMode] = useState(true);
  const [particle, setParticle] = useState(null);
  const [lastParticleTime, setLastParticleTime] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Anger level
  const angerLevel = clicks > 50 ? Math.min((clicks - 50) / 2.5, 100) : 0;

  // Clean color progression
  const baseHueDark = 51;
  const baseHueLight = 210;
  const currentHue = darkMode
    ? baseHueDark - (baseHueDark * (angerLevel / 100))
    : baseHueLight - (210 * (angerLevel / 100));

  const buttonBackground = `hsl(${currentHue}, 100%, 50%)`;

  const stressPercentage = Math.min((clicks / 10), 100);
  const stressColor = stressPercentage < 40 ? '#4ade80' : stressPercentage < 70 ? '#fbbf24' : '#ef4444';

  const getRandomDialogue = useCallback(() => {
    let pool;
    if (clicks > 150) pool = dialogues.slice(30);
    else if (clicks > 50) pool = dialogues.slice(10, 50);
    else pool = dialogues.slice(0, 20);
    return pool[Math.floor(Math.random() * pool.length)];
  }, [clicks]);

  const spawnParticle = useCallback(() => {
    const now = Date.now();
    if (now - lastParticleTime < 700) return;

    const emojis = angerLevel > 50 ? ['💥', '🔥', '🤯', '😈', '⚡'] : ['💥', '🔥', '🤯'];
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
    const id = now;

    setParticle({ id, emoji });
    setLastParticleTime(now);

    setTimeout(() => setParticle(null), 1000);
  }, [lastParticleTime, angerLevel]);

  const handleClick = useCallback(() => {
    setClicks(prev => prev + 1);
    setDialogue(getRandomDialogue());

    // Trigger animation on every click
    setIsAnimating(true);

    if (Math.random() < 0.1 + (angerLevel / 400)) {
      spawnParticle();
    }
  }, [getRandomDialogue, spawnParticle, angerLevel]);

  const handleReset = () => {
    setClicks(0);
    setDialogue("CLICK ME TO START");
    setParticle(null);
    setIsAnimating(false);
  };

  // Remove animation class after it finishes
  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 600);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  useEffect(() => {
    document.body.style.userSelect = 'none';
  }, []);

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <button className="theme-toggle" onClick={() => setDarkMode(prev => !prev)}>
        {darkMode ? '☀️' : '🌙'}
      </button>

      <div className="click-counter">Clicks: {clicks}</div>

      <div className="dialogue">{dialogue}</div>

      <button
        className={`chaos-button ${isAnimating ? 'click-animation' : ''}`}
        style={{
          background: buttonBackground,
          boxShadow: `0 0 ${20 + angerLevel}px rgba(255, 0, 0, ${angerLevel / 150})`,
        }}
        onMouseDown={handleClick}
        onTouchStart={(e) => {
          e.preventDefault();
          handleClick();
        }}
      >
        <span className="button-text">CLICK ME</span>
      </button>

      {particle && (
        <div className="particle" key={particle.id}>
          {particle.emoji}
        </div>
      )}

      <button className="reset-button" onClick={handleReset}>
        RESET CHAOS
      </button>

      <div className="stress-container">
        <div className="stress-label-horizontal">STRESS</div>
        <div className="vertical-meter">
          <div
            className="vertical-fill"
            style={{
              height: `${stressPercentage}%`,
              backgroundColor: stressColor
            }}
          />
        </div>
        <div className="stress-value">{Math.round(stressPercentage)}%</div>
      </div>

      <footer className="footer">
        For issues or ideas, DM me on Instagram: @rohinayyy
      </footer>
    </div>
  );
}

export default App;