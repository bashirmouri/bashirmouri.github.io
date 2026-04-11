import ChessPieceIcon from './ChessPieceIcon'

const services = [
  {
    title: 'Backend and API Engineering',
    piece: 'rook',
    capabilities: [
      'Node.js REST API design with request validation and explicit error handling.',
      'PostgreSQL schema design with normalization, foreign keys, and integrity constraints.',
      'Structured debugging across API, database, and application boundaries.',
    ],
  },
  {
    title: 'Frontend Architecture and State Flow',
    piece: 'knight',
    capabilities: [
      'React component isolation with predictable data flow between views and stateful logic.',
      'Client-side validation patterns for forms and interaction-heavy interfaces.',
      'Responsive UI implementation with clear interaction hierarchy and performance awareness.',
    ],
  },
  {
    title: 'Systems and Security Foundations',
    piece: 'queen',
    capabilities: [
      'C memory-level debugging using step-through analysis and register/stack inspection.',
      'CTF-oriented binary analysis workflow for exploit reasoning and payload iteration.',
      'Defensive mindset for input validation, failure-path handling, and predictable program behavior.',
    ],
  },
]

function Services() {
  return (
    <section id="services" className="section-shell py-20 sm:py-24">
      <div className="flex items-center gap-2">
        <ChessPieceIcon piece="rook" className="h-5 w-5 text-accent-500" />
        <h2 className="section-title">Technical Capabilities</h2>
      </div>

      <p className="mt-5 max-w-2xl text-sm leading-7 text-board-200 sm:text-base">
        Capabilities demonstrated through project implementation, debugging work, and systems-focused practice.
      </p>

      <ul className="mt-10 grid gap-5 md:grid-cols-3">
        {services.map((service) => (
          <li
            key={service.title}
            className="move-tile rounded-2xl border border-board-600/75 bg-board-800/95 p-6 shadow-[0_16px_32px_-24px_rgba(31,41,55,0.32)] hover:ring-1 hover:ring-accent-500/45"
          >
            <div className="flex items-center gap-2">
              <ChessPieceIcon piece={service.piece} className="h-5 w-5 text-highlight-500" />
              <h3 className="text-lg font-semibold text-board-50">{service.title}</h3>
            </div>

            <ul className="mt-4 space-y-2 text-sm leading-7 text-board-100/90">
              {service.capabilities.map((capability) => (
                <li key={capability} className="list-inside list-disc">
                  {capability}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Services
