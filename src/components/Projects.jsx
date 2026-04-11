import ProjectCard from './ProjectCard'
import ChessPieceIcon from './ChessPieceIcon'

const projects = [
  {
    title: 'Chess Rules Engine Web App',
    summary:
      'Built an interactive chess application with strict rule enforcement and deterministic state transitions.',
    problem:
      'Most browser chess demos accept inconsistent moves or skip edge-case rule validation, which breaks game trust.',
    systemDesign:
      'React UI components feed a board-state model and move validator; each action passes through a rule engine before state mutation.',
    challenge:
      'Maintaining turn consistency and legal board state across check, checkmate, stalemate, captures, and reset operations.',
    solution:
      'Implemented a validation pipeline that rejects illegal moves before commit, recalculates threatened squares, and enforces game-end conditions.',
    result:
      'The app now blocks invalid transitions and preserves consistent game state across normal and edge-case sequences.',
    stack: ['React', 'JavaScript', 'State Modeling', 'Rule Validation'],
    liveUrl: 'https://chess-puzzle-app-five.vercel.app/',
  },
  {
    title: 'Aura Product Platform',
    summary:
      'Delivered a production-style product website focused on content structure, discoverability, and conversion flow.',
    problem:
      'The business needed a reliable online structure that made products easy to discover and reduced navigation friction.',
    systemDesign:
      'React frontend sections are mapped to structured backend content; routing and component composition prioritize mobile-first navigation paths.',
    challenge:
      'Balancing visual clarity with information density while keeping interactions responsive across small screens.',
    solution:
      'Built reusable UI sections, simplified path-to-product navigation, and applied performance-aware rendering and layout decisions.',
    result:
      'The platform now presents products clearly, shortens the browsing path, and supports maintainable content updates.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Responsive UI'],
    liveUrl: 'https://aura-bakery.vercel.app/en',
  },
  {
    title: 'Systems Security Lab (C + GDB)',
    summary:
      'Built a repeatable workflow for binary analysis and exploit development practice in CTF-style environments.',
    problem:
      'Manual exploit attempts were slow and inconsistent when stack layout and memory offsets changed between runs.',
    systemDesign:
      'C binaries are analyzed with GDB, then scripted with Python/pwntools-style tooling to automate offset discovery and payload construction.',
    challenge:
      'Keeping payloads reliable under crash-prone conditions while validating assumptions about stack and register state.',
    solution:
      'Implemented cyclic-pattern offset checks, scripted memory inspection steps, and iterative payload validation before final execution.',
    result:
      'Reduced debug cycles and solved multiple memory-corruption practice challenges with reproducible exploit steps.',
    stack: ['C', 'GDB', 'Python', 'Memory Debugging'],
  },
]

function Projects() {
  return (
    <section id="projects" className="section-shell py-20 sm:py-24">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent-500">Technical Case Studies</p>
          <h2 className="section-title mt-2">Selected Projects</h2>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-board-600/60 bg-board-800/90 px-4 py-2 text-sm text-board-100">
          <ChessPieceIcon piece="queen" className="h-4 w-4 text-highlight-500" />
          1 flagship + 2 supporting builds
        </div>
      </div>

      <p className="mt-5 max-w-2xl text-sm leading-7 text-board-200 sm:text-base">
        Each project documents the problem, architecture, technical constraints, and implementation decisions.
      </p>

      <div className="board-grid-bg mt-10 rounded-3xl border border-board-600/70 bg-[linear-gradient(160deg,rgba(255,255,255,0.92),rgba(244,239,229,0.88))] p-5 sm:p-7">
        <div className="relative z-10 grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} index={index} isPrimary={index === 0} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
