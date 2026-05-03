import ChessPieceIcon from './ChessPieceIcon'

const navItems = [
  { label: 'About', href: '#hero' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-board-600/70 bg-board-800/95 shadow-[0_10px_24px_-20px_rgba(31,41,55,0.5)] backdrop-blur-xl supports-[backdrop-filter]:bg-board-800/90">
      <nav className="section-shell flex flex-wrap items-center justify-between gap-3 py-4 sm:py-5">
        <a href="#hero" className="group flex items-center gap-3">
          <img
            src="/bashirlogo.png"
            alt="Bashir logo"
            className="h-10 w-10 rounded-lg border border-board-600/70 object-cover shadow-sm"
          />
          <div className="leading-none">
            <p className="font-heading text-lg font-semibold text-board-50">Bashir</p>
            <p className="text-xs uppercase tracking-[0.18em] text-accent-700">CS Student | Systems + AI</p>
          </div>
          <ChessPieceIcon
            piece="king"
            className="h-5 w-5 text-highlight-500 transition group-hover:-translate-y-0.5 motion-safe:animate-piece-slide"
          />
        </a>

        <ul className="flex flex-wrap items-center justify-end gap-2 sm:gap-3">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                className="coord-chip group hover:border-highlight-500/70 hover:bg-board-700"
                href={item.href}
              >
                <span className="text-sm font-semibold text-board-50">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
