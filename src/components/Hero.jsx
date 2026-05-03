import ChessPieceIcon from './ChessPieceIcon'

const strengths = [
  {
    piece: 'rook',
    title: 'Project-Based Strengths',
    text: 'Builds full-stack systems with backend correctness, relational data modeling, and strict state control using React, Node.js, and PostgreSQL.',
  },
  {
    piece: 'knight',
    title: 'Security and Systems Depth',
    text: 'Develops security-aware and low-level understanding through CTF work, debugging, and analysis of program behavior and vulnerabilities.',
  },
]

function Hero() {
  return (
    <section id="hero" className="section-shell pt-16 sm:pt-20">
      <div className="section-panel px-6 py-14 text-center sm:px-12 sm:py-20">
        <div className="relative z-10">
          <p className="section-kicker">Full-Stack Portfolio</p>
          <h1 className="mt-4 text-5xl font-bold text-board-50 sm:text-7xl">Bashir Mouri</h1>
          <p className="section-lede mx-auto mt-7 max-w-3xl sm:text-xl">
            Builds full-stack systems focused on backend correctness, relational data modeling, and strict state control, with security-aware and low-level system insight.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-board-100 sm:text-base">
            Built React, Node.js, and PostgreSQL applications with enforced state transitions, explicit validation, and structured schemas, ensuring integrity in complex interactions.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
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

          <ul className="mt-12 grid gap-4 text-left sm:grid-cols-2">
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
      </div>
    </section>
  )
}

export default Hero
