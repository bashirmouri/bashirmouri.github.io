import ProjectCard from './ProjectCard'
import ChessPieceIcon from './ChessPieceIcon'

const projects = [
  {
    title: 'GoChess - Full-Stack Chess Puzzle Platform',
    summary:
      'Full-stack chess puzzle platform focused on deterministic SAN validation, API-driven puzzle data, and repeatable training metrics.',
    highlights: [
      'Deterministic SAN validation with chess.js to block illegal or out-of-sequence solutions.',
      'Express + Supabase REST APIs serving FEN positions and normalized puzzle data.',
      'Real-time accuracy, timing, and streak tracking with session-based resets.',
      'Puzzle state management tuned for responsive play and consistent validation across sessions.',
      'Local persistence for progress and high-score tracking without authentication.',
    ],
    problem:
      'Ensure puzzles accept only the intended move sequence while keeping training attempts repeatable and metrics accurate without requiring user accounts.',
    systemDesign:
      'React + Vite frontend using chess.js for SAN validation and board state. Express + Supabase backend serves FEN positions and normalized solution data via REST APIs. Client state tracks timing, accuracy, and streaks with localStorage persistence.',
    challenge:
      'Keeping validation deterministic while coordinating rapid state updates, enforcing sequence order, and supporting session resets for repeatable training.',
    solution:
      'Built a SAN-driven validation pipeline that rejects invalid or out-of-order moves, synchronizes puzzle state, and records accuracy, timing, and streak metrics with session-aware resets.',
    result:
      'Consistent, repeatable puzzle training with reliable validation, responsive gameplay, and persistent progress tracking.',
    stack: ['React', 'Vite', 'chess.js', 'Express', 'Supabase', 'REST APIs', 'Local Storage'],
    liveUrl: 'https://chess-puzzle-app-five.vercel.app/',
    liveLabel: 'Play Puzzles',
    githubUrl: 'https://github.com/bashirmouri/chess-puzzle-app.git',
  },
  {
    title: 'Aura Bakery - Bilingual Bakery Web Platform',
    summary:
      'Bilingual React storefront with localized routing, structured catalog rendering, and WhatsApp-based checkout.',
    highlights: [
      'Integrated AI assistant for guided storefront navigation and ordering support.',
      'Route-based EN/FR localization powered by i18next.',
      'Normalized cart model enforcing variants and minimum-order rules.',
      'WhatsApp deep-link checkout that formats full orders without a payment backend.',
      'Reusable UI components with JSON-driven product rendering for fast catalog updates.',
      'Responsive layouts and streamlined ordering across desktop and mobile.',
    ],
    problem:
      'Provide a lightweight ordering flow without backend infrastructure while maintaining accurate cart logic and bilingual content.',
    systemDesign:
      'React + Vite single-page app with React Router and i18next language-prefixed routes. Products render from structured JSON, and a global cart context enforces variant and minimum-order rules. Checkout uses a WhatsApp deep link that encodes the full order.',
    challenge:
      'Synchronizing localization with cart state, enforcing product constraints, and generating consistent order messages for two languages.',
    solution:
      'Implemented a normalized cart schema with validation, connected it to route-based localization, and built deterministic order message generation for WhatsApp checkout.',
    result:
      'Reliable bilingual storefront with accurate cart behavior and a frictionless WhatsApp ordering flow for small-business customers.',
    stack: ['React', 'Vite', 'React Router', 'i18next', 'Tailwind CSS', 'Context API', 'Client-Side State Management'],
    liveUrl: 'https://www.aurabakery.shop',
    liveLabel: 'Visit Website',
    repoNote: 'Client-owned repository available on request.',
  },
]

function Projects() {
  const isWideLayout = projects.length > 2

  return (
    <section id="projects" className="section-shell py-20 sm:py-24">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="section-kicker">Technical Case Studies</p>
          <h2 className="section-title mt-2">Selected Projects</h2>
        </div>

        <div className="coord-chip px-4 py-2 text-sm font-semibold text-board-50">
          <ChessPieceIcon piece="queen" className="h-4 w-4 text-highlight-500" />
          1 flagship + 1 supporting build
        </div>
      </div>

      <p className="section-lede mt-5 max-w-2xl">
        Each project serves a purpose, with its specific architecture, technical constraints, and implementation decisions.
      </p>

      <div className="section-panel mt-10 p-5 sm:p-7">
        <div className="relative z-10 grid gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              index={index}
              isPrimary={index === 0}
              isWide={isWideLayout}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
