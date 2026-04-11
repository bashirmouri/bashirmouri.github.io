import ChessPieceIcon from './ChessPieceIcon'

const services = [
  {
    title: 'Software Engineering Fundamentals',
    piece: 'knight',
    role: 'Knight - problem solving',
    description: 'Strong grounding in data structures, algorithms, and writing readable code for maintainable systems.',
  },
  {
    title: 'Web Application Development',
    piece: 'rook',
    role: 'Rook - system design',
    description: 'Experience building responsive interfaces and connecting them to backend logic and structured data.',
  },
  {
    title: 'AI and Applied Learning',
    piece: 'queen',
    role: 'Queen - intelligence',
    description: 'Focused on AI concepts and using projects to explore practical machine learning applications.',
  },
]

function Services() {
  return (
    <section id="services" className="section-shell py-20 sm:py-24">
      <div className="flex items-center gap-2">
        <ChessPieceIcon piece="rook" className="h-5 w-5 text-accent-500" />
        <h2 className="section-title">Core Skills</h2>
      </div>

      <p className="mt-5 max-w-2xl text-sm leading-7 text-board-200 sm:text-base">
        The technical areas I am developing through coursework, independent study, and project work.
      </p>

      <ul className="mt-10 grid gap-5 md:grid-cols-3">
        {services.map((service) => (
          <li
            key={service.title}
            className="move-tile rounded-2xl border border-board-600/75 bg-board-800/95 p-6 shadow-[0_16px_32px_-24px_rgba(31,41,55,0.32)] hover:ring-1 hover:ring-accent-500/45"
          >
            <div className="flex items-center gap-3">
              <ChessPieceIcon piece={service.piece} className="h-5 w-5 text-highlight-500" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-highlight-500">{service.role}</p>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-board-50">{service.title}</h3>
            <p className="mt-3 text-sm leading-7 text-board-100/90">{service.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Services
