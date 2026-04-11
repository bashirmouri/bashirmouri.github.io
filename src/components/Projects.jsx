import ProjectCard from './ProjectCard'
import ChessPieceIcon from './ChessPieceIcon'

const projects = [
  {
    title: 'Aura Gluten-Free Website',
    whatItIs:
      'A production-style website project I built to practice full-stack thinking and user-centered design.',
    problemSolved:
      'It demonstrates how I structure real-world content, responsive layouts, and conversion-focused user journeys.',
    highlights: [
      'Key feature: Product browsing experience with clear category flow and mobile-first call-to-actions.',
      'Tech used: React, Node.js, and PostgreSQL-backed content structure.',
      'What I learned: Translating business requirements into scalable frontend and backend decisions.',
    ],
    liveUrl: 'https://aura-bakery.vercel.app/en',
    piece: 'rook',
  },
  {
    title: 'Chess Web App',
    whatItIs:
      'An interactive browser-based chess project that reflects my interest in logic-heavy systems.',
    problemSolved:
      'It showcases handling of rule validation, state management, and real-time board interactions.',
    highlights: [
      'Key feature: Live move validation with game reset and turn tracking.',
      'Tech used: React with custom JavaScript game logic and component-based architecture.',
      'What I learned: Managing edge-case game states while keeping gameplay consistent and intuitive.',
    ],
    liveUrl: 'https://chess-puzzle-app-five.vercel.app/',
    piece: 'knight',
  },
]

function Projects() {
  return (
    <section id="projects" className="section-shell py-20 sm:py-24">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent-500">Selected Work</p>
          <h2 className="section-title mt-2">Featured Projects</h2>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-board-600/60 bg-board-800/90 px-4 py-2 text-sm text-board-100">
          <ChessPieceIcon piece="queen" className="h-4 w-4 text-highlight-500" />
          2 featured projects
        </div>
      </div>

      <p className="mt-5 max-w-2xl text-sm leading-7 text-board-200 sm:text-base">
        A selection of projects that represent my growth as a computer science student through practical development work.
      </p>

      <div className="board-grid-bg mt-10 rounded-3xl border border-board-600/70 bg-[linear-gradient(160deg,rgba(255,255,255,0.92),rgba(244,239,229,0.88))] p-5 sm:p-7">
        <div className="relative z-10 grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} index={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
