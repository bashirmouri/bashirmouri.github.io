const piecePaths = {
  king: (
    <>
      <path d="M12 3.5v3.2" />
      <path d="M10.4 5.1h3.2" />
      <path d="M8.2 10.1h7.6" />
      <path d="M9 10.1l-1.1 4.2h8.2L15 10.1" />
      <rect x="7.3" y="14.3" width="9.4" height="2.6" rx="0.8" />
      <path d="M6.6 19.2h10.8" />
    </>
  ),
  queen: (
    <>
      <circle cx="8" cy="7" r="1" />
      <circle cx="12" cy="6" r="1" />
      <circle cx="16" cy="7" r="1" />
      <path d="M7.2 10.1l1.3 4.2h7l1.3-4.2" />
      <rect x="7.3" y="14.3" width="9.4" height="2.6" rx="0.8" />
      <path d="M6.6 19.2h10.8" />
    </>
  ),
  knight: (
    <>
      <path d="M9 18.9h8.5" />
      <path d="M9.5 18.9v-4.1l1.9-1.6 1.2-3.3 4.2 1.6-1.1 2.2 1.1 1.3-1.5 1.8v2.1" />
      <path d="M12.9 11.2h1.8" />
      <path d="M11.4 13.3h2.1" />
    </>
  ),
  rook: (
    <>
      <rect x="8" y="4.2" width="8" height="3.2" rx="0.7" />
      <path d="M9.4 4.2v-1h1.8v1" />
      <path d="M12.8 4.2v-1h1.8v1" />
      <path d="M8.4 7.4h7.2l-1 6.8H9.4z" />
      <rect x="7.2" y="14.2" width="9.6" height="2.8" rx="0.8" />
      <path d="M6.6 19.2h10.8" />
    </>
  ),
}

function ChessPieceIcon({ piece = 'king', className = '' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {piecePaths[piece] || piecePaths.king}
    </svg>
  )
}

export default ChessPieceIcon