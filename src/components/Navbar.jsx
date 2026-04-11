import ChessPieceIcon from './ChessPieceIcon'

const navItems = [
  { label: 'About', href: '#hero', coord: 'E4', piece: 'king' },
  { label: 'Projects', href: '#projects', coord: 'C3', piece: 'queen' },
  { label: 'Skills', href: '#services', coord: 'F6', piece: 'rook' },
  { label: 'Contact', href: '#contact', coord: 'H1', piece: 'knight' },
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
            <p className="text-[11px] uppercase tracking-[0.24em] text-highlight-500">CS Student</p>
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
                <ChessPieceIcon
                  piece={item.piece}
                  className="h-3.5 w-3.5 text-highlight-500 transition group-hover:-translate-y-0.5"
                />
                <span className="font-heading text-[10px] uppercase tracking-[0.18em] text-highlight-500">
                  {item.coord}
                </span>
                <span className="hidden text-xs text-board-50 sm:inline">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
