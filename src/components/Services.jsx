import ChessPieceIcon from './ChessPieceIcon'

const services = [
  {
    title: 'Backend and API Engineering',
    piece: 'rook',
    capabilities: [
      'Node.js API design with enforced validation, explicit error handling, and controlled request flow.',
      'PostgreSQL schema design with normalization, foreign keys, and integrity constraints to reinforce consistency.',
      'Cross-layer debugging across API, database, and application boundaries to trace and resolve state issues.',
    ],
  },
  {
    title: 'Frontend Architecture and State Control',
    piece: 'knight',
    capabilities: [
      'React component architecture with predictable data flow and tightly controlled state transitions.',
      'Client-side validation aligned with backend rules to prevent invalid states.',
      'Responsive UI design with interaction hierarchy and performance-aware rendering.',
    ],
  },
  {
    title: 'Security and Validation',
    piece: 'queen',
    capabilities: [
      'Input validation across client and server to prevent invalid and unsafe states.',
      'Schema constraints and controlled API flows to reduce injection and data corruption risks.',
      'Debugging and testing with edge-case and misuse scenarios to enforce robustness under adversarial input.',
    ],
  },
  {
    title: 'Adversarial Thinking',
    piece: 'king',
    capabilities: [
      'Considers how systems can be misused and encodes safeguards directly into logic and data models.',
      'Tests edge cases and abuse scenarios to ensure resilience beyond normal user behavior.',
      'Anticipates failure modes and enforces constraints to prevent unintended state transitions.',
    ],
  },
]

function Services() {
  return (
    <section id="services" className="section-shell py-20 sm:py-24">
      <div>
        <p className="section-kicker">Skills Focus</p>
        <div className="mt-2 flex items-center gap-2">
          <ChessPieceIcon piece="rook" className="h-5 w-5 text-accent-500" />
          <h2 className="section-title">Technical Capabilities</h2>
        </div>
      </div>

      <p className="section-lede mt-5 max-w-2xl">
        Demonstrated through full-stack project implementation, cross-layer debugging, and correctness-driven design.
      </p>

      <div className="section-panel mt-10 p-5 sm:p-7">
        <ul className="grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <li
              key={service.title}
              className="move-tile rounded-2xl border border-board-600/75 bg-board-800/95 p-6 shadow-[0_16px_32px_-24px_rgba(31,41,55,0.32)] hover:ring-1 hover:ring-accent-500/45"
            >
              <div className="flex items-center gap-2">
                <ChessPieceIcon piece={service.piece} className="h-5 w-5 text-highlight-500" />
                <h3 className="text-lg font-semibold text-board-50">{service.title}</h3>
              </div>

              <ul className="mt-4 space-y-2 text-sm leading-7 text-board-100">
                {service.capabilities.map((capability) => (
                  <li key={capability} className="list-inside list-disc">
                    {capability}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Services
