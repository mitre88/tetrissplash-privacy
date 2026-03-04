import Link from "next/link";

// Tetris block shapes as simple colored divs
function TetrisBlock({ color }: { color: string }) {
  return (
    <div
      className={`w-8 h-8 rounded-sm border border-white/10 ${color} opacity-80`}
    />
  );
}

// Decorative falling blocks for hero visual
function TetrisDecoration() {
  const blocks = [
    { color: "bg-cyan-400", top: "10%", left: "5%", delay: "0s" },
    { color: "bg-yellow-400", top: "25%", left: "88%", delay: "0.3s" },
    { color: "bg-purple-500", top: "60%", left: "3%", delay: "0.6s" },
    { color: "bg-green-400", top: "70%", left: "92%", delay: "0.9s" },
    { color: "bg-red-400", top: "40%", left: "90%", delay: "0.2s" },
    { color: "bg-blue-400", top: "80%", left: "8%", delay: "0.5s" },
    { color: "bg-orange-400", top: "15%", left: "92%", delay: "0.8s" },
    { color: "bg-cyan-300", top: "50%", left: "6%", delay: "0.4s" },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {blocks.map((block, i) => (
        <div
          key={i}
          className={`absolute w-8 h-8 rounded-sm ${block.color} opacity-20 animate-pulse-slow`}
          style={{
            top: block.top,
            left: block.left,
            animationDelay: block.delay,
          }}
        />
      ))}
    </div>
  );
}

// Tetris I-piece visual representation
function TetrisPiece() {
  return (
    <div className="flex flex-col gap-1 items-center">
      <div className="flex gap-1">
        <TetrisBlock color="bg-cyan-400" />
        <TetrisBlock color="bg-cyan-400" />
        <TetrisBlock color="bg-cyan-400" />
        <TetrisBlock color="bg-cyan-400" />
      </div>
      <div className="flex gap-1">
        <div className="w-8 h-8" />
        <TetrisBlock color="bg-yellow-400" />
        <TetrisBlock color="bg-yellow-400" />
        <div className="w-8 h-8" />
      </div>
      <div className="flex gap-1">
        <div className="w-8 h-8" />
        <TetrisBlock color="bg-yellow-400" />
        <TetrisBlock color="bg-yellow-400" />
        <div className="w-8 h-8" />
      </div>
      <div className="flex gap-1">
        <TetrisBlock color="bg-purple-500" />
        <TetrisBlock color="bg-purple-500" />
        <TetrisBlock color="bg-purple-500" />
        <div className="w-8 h-8" />
      </div>
      <div className="flex gap-1">
        <TetrisBlock color="bg-purple-500" />
        <div className="w-8 h-8" />
        <TetrisBlock color="bg-green-400" />
        <TetrisBlock color="bg-green-400" />
      </div>
      <div className="flex gap-1">
        <TetrisBlock color="bg-red-400" />
        <TetrisBlock color="bg-red-400" />
        <TetrisBlock color="bg-green-400" />
        <TetrisBlock color="bg-green-400" />
      </div>
    </div>
  );
}

const features = [
  {
    icon: "◈",
    title: "Classic Gameplay",
    description:
      "Faithful Tetris-style mechanics you know and love, reimagined for modern iPhones.",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10 border-cyan-400/20",
  },
  {
    icon: "◉",
    title: "Local High Scores",
    description:
      "Your scores stay on your device. No account needed, no cloud sync, total privacy.",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10 border-yellow-400/20",
  },
  {
    icon: "✦",
    title: "No Ads, Ever",
    description:
      "Zero advertisements, zero in-app purchases. Just pure, uninterrupted gameplay.",
    color: "text-purple-400",
    bg: "bg-purple-400/10 border-purple-400/20",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] font-sans tetris-grid-bg">
      {/* Navigation */}
      <nav className="border-b border-white/5 px-6 py-4">
        <div className="mx-auto max-w-5xl flex items-center justify-between">
          <span className="text-lg font-bold text-white tracking-tight">
            Tetris<span className="text-cyan-400">Splash</span>
          </span>
          <Link
            href="/privacy"
            className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
          >
            Privacy Policy
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 pt-20 pb-24 sm:pt-32 sm:pb-32 overflow-hidden">
        <TetrisDecoration />
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <div className="animate-slide-up">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-1.5 text-xs font-medium text-cyan-400 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400"></span>
                </span>
                Available on the App Store
              </div>

              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Tetris
                <span className="text-cyan-400 text-glow-cyan">Splash</span>
              </h1>

              <p className="mt-6 text-xl text-gray-300 leading-relaxed">
                The classic block-stacking puzzle game, beautifully redesigned
                for iPhone. Stack pieces, clear lines, and chase your personal
                best.
              </p>

              <ul className="mt-6 space-y-2">
                {[
                  "No account required",
                  "No ads, no in-app purchases",
                  "High scores saved locally on your device",
                  "Your data never leaves your phone",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-400 text-sm">
                    <span className="text-cyan-400 text-xs">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 items-start">
                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-2xl bg-white px-6 py-3.5 text-gray-900 font-semibold text-sm hover:bg-gray-100 transition-colors duration-200 glow-cyan"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  Download on the App Store
                </a>
                <Link
                  href="/privacy"
                  className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-200 pt-3.5"
                >
                  Privacy Policy
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* Right: Game Visual */}
            <div className="flex justify-center lg:justify-end animate-fade-in">
              <div className="relative">
                {/* Phone frame */}
                <div className="w-[260px] h-[520px] rounded-[3rem] border-2 border-white/10 bg-gray-950/80 backdrop-blur-xl flex flex-col items-center justify-center p-4 shadow-2xl">
                  {/* Screen header */}
                  <div className="w-full flex justify-between items-center mb-4 px-2">
                    <span className="text-xs text-cyan-400 font-mono font-bold">SCORE</span>
                    <span className="text-xs text-yellow-400 font-mono font-bold">LEVEL 5</span>
                    <span className="text-xs text-green-400 font-mono font-bold">LINES</span>
                  </div>
                  <div className="w-full flex justify-between items-center mb-6 px-2">
                    <span className="text-lg text-white font-mono font-bold">24800</span>
                    <span className="text-lg text-white font-mono font-bold">42</span>
                  </div>
                  {/* Game board */}
                  <TetrisPiece />
                  <div className="mt-4 w-full border-t border-white/5 pt-3 text-center">
                    <span className="text-xs text-gray-600 font-mono">HIGH SCORE: 48200</span>
                  </div>
                </div>
                {/* Glow behind phone */}
                <div className="absolute inset-0 rounded-[3rem] bg-cyan-400/5 blur-2xl -z-10 scale-110" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-24 border-t border-white/5">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
            Pure gameplay. Nothing else.
          </h2>
          <p className="mt-4 text-center text-gray-400 max-w-xl mx-auto">
            TetrisSplash is focused on one thing — giving you the best Tetris experience on iPhone.
          </p>

          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className={`rounded-2xl border p-6 ${feature.bg} transition-transform duration-200 hover:-translate-y-1`}
              >
                <div className={`text-3xl mb-4 ${feature.color}`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy callout */}
      <section className="px-6 py-16 border-t border-white/5">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-green-400/5 px-4 py-1.5 text-xs font-medium text-green-400 mb-6">
            <span>Privacy First</span>
          </div>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            We collect zero personal data.
          </h2>
          <p className="mt-4 text-gray-400 leading-relaxed max-w-xl mx-auto">
            TetrisSplash stores your high scores locally on your device using standard iOS storage.
            No accounts, no servers, no analytics, no tracking. Your data is yours.
          </p>
          <Link
            href="/privacy"
            className="mt-8 inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
          >
            Read our full Privacy Policy
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 px-6 py-10">
        <div className="mx-auto max-w-5xl flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} TetrisSplash. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-600">
            <Link href="/privacy" className="hover:text-white transition-colors duration-200">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
