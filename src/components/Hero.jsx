import ChessPieceIcon from './ChessPieceIcon'

const strengths = [
  {
    piece: 'rook',
    title: 'Correctness-first systems',
    text: 'Backend validation, relational schemas, and strict state control across web applications.',
  },
  {
    piece: 'knight',
    title: 'Security-aware engineering',
    text: 'CTF-driven analysis, debugging, and failure-mode testing to harden system behavior.',
  },
]

const projectSignals = [
  {
    title: 'GoChess',
    piece: 'queen',
    metric: 'Strict state enforcement',
    detail: 'Validated moves · Controlled progression',
  },
  {
    title: 'Aura Bakery',
    piece: 'rook',
    metric: '100+ real orders',
    detail: 'Stable checkout · Cart integrity',
  },
]

function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden border-b border-board-600/70">
      <div className="hero-grid" aria-hidden="true" />
      <div className="section-shell relative z-10 py-16 sm:py-24 lg:py-28">
        <div className="grid items-start gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="section-kicker text-highlight-500">Systems-Focused Full-Stack</p>
            <h1 className="mt-4 text-5xl font-bold text-board-50 sm:text-7xl lg:text-8xl">Bashir Mouri</h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-board-100 sm:text-xl">
              Systems-focused full-stack engineer building correctness-first web apps with validated data flows and
              controlled state transitions.
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-board-100 sm:text-base">
              Project work centers on React, Node.js, and PostgreSQL with security-aware design and traceable logic.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-md bg-accent-500 px-6 py-3.5 text-sm font-semibold text-board-800 shadow-[0_12px_28px_-18px_rgba(47,110,91,0.62)] hover:bg-accent-700 hover:shadow-[0_18px_32px_-16px_rgba(36,87,71,0.62)]"
              >
                Review Technical Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md border border-board-600/90 bg-board-800/80 px-6 py-3.5 text-sm font-semibold text-board-100 hover:border-accent-500 hover:bg-board-700/80 hover:text-board-50"
              >
                Discuss Internship Fit
              </a>
            </div>

            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {strengths.map((strength, index) => (
                <li
                  key={strength.title}
                  className="move-tile rounded-xl border border-board-600/75 bg-board-800/95 p-5 shadow-[0_16px_30px_-24px_rgba(31,41,55,0.32)] motion-safe:animate-move-in"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <div className="flex items-center gap-2">
                    <ChessPieceIcon piece={strength.piece} className="h-4 w-4 text-highlight-500" />
                    <p className="text-base font-semibold text-board-50">{strength.title}</p>
                  </div>
                  <p className="mt-2 text-sm leading-7 text-board-100">{strength.text}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="section-panel p-6 sm:p-7">
            <div className="flex items-center gap-2">
              <ChessPieceIcon piece="queen" className="h-5 w-5 text-highlight-500" />
              <p className="section-kicker text-accent-700">Project Signals</p>
            </div>
            <ul className="mt-5 space-y-4">
              {projectSignals.map((signal) => (
                <li
                  key={signal.title}
                  className="rounded-2xl border border-board-600/70 bg-board-800/90 p-4 shadow-[0_16px_30px_-24px_rgba(31,41,55,0.24)]"
                >
                  <div className="flex items-center gap-2 text-sm font-semibold text-board-50">
                    <ChessPieceIcon piece={signal.piece} className="h-4 w-4 text-accent-500" />
                    {signal.title}
                  </div>
                  <p className="mt-2 text-2xl font-semibold text-board-50">{signal.metric}</p>
                  <p className="mt-1 text-sm text-board-100">{signal.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
