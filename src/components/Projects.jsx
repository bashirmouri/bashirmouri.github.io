import ProjectCard from './ProjectCard'
import ChessPieceIcon from './ChessPieceIcon'

const projects = [
  {
    title: 'GoChess',
    summary:
      'Interactive chess puzzle platform that delivers structured problem-solving scenarios with strict move validation and progression tracking.',
    problem:
      'Enforce exact solution paths for chess puzzles while preventing illegal moves and valid-but-incorrect alternatives, without corrupting board state or progression logic.',
    systemDesign:
      'Full-stack architecture with a React + Vite frontend using react-chessboard and chess.js for state and rule enforcement. An Express API backed by Supabase serves puzzle data, including FEN positions and normalized solution sequences. Client-side state integrates scoring, timing, and progression, with persistence via localStorage.',
    challenge:
      'Synchronizing frontend state with authoritative move validation, handling edge cases (check, checkmate, stalemate, captures), and ensuring deterministic progression across multi-level gameplay.',
    solution:
      'Implemented a validation pipeline that cross-checks user moves against predefined SAN sequences, rejects invalid transitions pre-commit, auto-executes opponent responses, and recalculates game state after each move. Integrated scoring logic tied to accuracy, time, and streak performance.',
    result:
      'Reliable puzzle engine that enforces strict correctness, maintains consistent game state across edge cases, and supports scalable multi-level gameplay with performance tracking.',
    stack: ['React', 'Vite', 'chess.js', 'Express', 'Supabase', 'State Management', 'API Integration'],
    liveUrl: 'https://chess-puzzle-app-five.vercel.app/',
    liveLabel: 'Play Game',
  },
  {
    title: 'Aura Bakery',
    summary:
      'Gluten-free bakery storefront delivering bilingual navigation, structured menu browsing, and frictionless WhatsApp-based order generation.',
    problem:
      'Enable a lightweight ordering experience without a backend while maintaining accurate cart state, localized content, and enforceable purchase constraints.',
    systemDesign:
      'Single-page React application built with Vite and React Router, using language-prefixed routing for EN/FR localization via i18next. Menu data is sourced from structured JSON and rendered dynamically. Cart state is managed through a global context, with client-side computation of totals and order validation. Checkout is executed through a WhatsApp deep link with encoded order data.',
    challenge:
      'Maintaining consistent cart state across navigation, handling variant-based item uniqueness, enforcing minimum order constraints, and generating correctly formatted multilingual order messages without server support.',
    solution:
      'Implemented a normalized cart model using composite keys (item + variant) to prevent duplication conflicts, integrated client-side validation for minimum order enforcement, and constructed a deterministic encoding pipeline to transform cart data into a WhatsApp-compatible message. Localization is synchronized through route-based language control and persistent preferences.',
    result:
      'Functional storefront that supports bilingual interaction, reliable cart behavior, and seamless external checkout flow without backend dependencies, reducing system complexity while preserving usability.',
    stack: ['React', 'Vite', 'React Router', 'i18next', 'Tailwind CSS', 'Context API', 'Client-Side State Management'],
    liveUrl: 'https://www.aurabakery.shop/en',
    liveLabel: 'Visit Website',
  },
]

function Projects() {
  const isWideLayout = projects.length > 2

  return (
    <section id="projects" className="section-shell py-20 sm:py-24">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent-500">Technical Case Studies</p>
          <h2 className="section-title mt-2">Selected Projects</h2>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-board-600/60 bg-board-800/90 px-4 py-2 text-sm text-board-100">
          <ChessPieceIcon piece="queen" className="h-4 w-4 text-highlight-500" />
          1 flagship + 1 supporting build
        </div>
      </div>

      <p className="mt-5 max-w-2xl text-sm leading-7 text-board-200 sm:text-base">
        Each project serves a purpose, with its specific architecture, technical constraints, and implementation decisions.
      </p>

      <div className="board-grid-bg mt-10 rounded-3xl border border-board-600/70 bg-[linear-gradient(160deg,rgba(255,255,255,0.92),rgba(244,239,229,0.88))] p-5 sm:p-7">
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
