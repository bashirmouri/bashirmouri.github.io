import ChessPieceIcon from './ChessPieceIcon'

const strengths = [
  {
    piece: 'knight',
    title: 'Algorithmic Thinking',
    text: 'I enjoy solving structured problems and turning logic into clean, maintainable code.',
  },
  {
    piece: 'rook',
    title: 'Full-Stack Development',
    text: 'I build complete web applications with React on the frontend and Node.js-based backend flows.',
  },
  {
    piece: 'queen',
    title: 'AI-Focused Learning',
    text: 'My studies focus on applying AI concepts through practical experiments and real projects.',
  },
]

function Hero() {
  return (
    <section id="hero" className="section-shell pt-16 sm:pt-20">
      <div className="board-grid-bg rounded-3xl border border-board-600/80 bg-[linear-gradient(165deg,rgba(255,255,255,0.97),rgba(247,243,233,0.94))] px-6 py-14 text-center shadow-[0_30px_64px_-42px_rgba(31,41,55,0.34)] sm:px-12 sm:py-20">
        <div className="pointer-events-none absolute -left-10 top-0 h-36 w-36 rounded-full bg-highlight-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-8 -right-8 h-44 w-44 rounded-full bg-accent-500/15 blur-3xl" />

        <div className="relative z-10">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-accent-500">Computer Science Portfolio</p>
          <h1 className="mt-4 text-5xl font-bold text-board-50 sm:text-7xl">Bashir</h1>
          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-board-100/95 sm:text-xl">
            I am a senior Computer Science student focused on AI and software engineering, building
            project-based solutions that combine strong fundamentals with practical implementation.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-md bg-accent-500 px-6 py-3.5 text-sm font-semibold text-board-800 shadow-[0_12px_28px_-18px_rgba(47,110,91,0.62)] hover:bg-accent-700 hover:shadow-[0_18px_32px_-16px_rgba(36,87,71,0.62)]"
            >
              View Featured Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border border-board-600/90 bg-board-800/80 px-6 py-3.5 text-sm font-semibold text-board-100 hover:border-accent-500 hover:bg-board-700/80 hover:text-board-50"
            >
              Contact Me
            </a>
          </div>

          <ul className="mt-12 grid gap-4 text-left sm:grid-cols-3">
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
                <p className="mt-2 text-sm leading-7 text-board-100/90">{strength.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Hero
