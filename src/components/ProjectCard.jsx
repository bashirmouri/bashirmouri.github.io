import ChessPieceIcon from './ChessPieceIcon'

const tileCoordinates = ['B2', 'E4', 'G6', 'H7']

function ProjectCard({
  title,
  whatItIs,
  problemSolved,
  highlights,
  liveUrl,
  githubUrl,
  piece = 'queen',
  index = 0,
}) {
  const isDarkTile = index % 2 === 1

  const cardTone = isDarkTile
    ? 'border-highlight-500/45 bg-[linear-gradient(165deg,rgba(255,255,255,0.98),rgba(249,240,223,0.9))] text-board-50 shadow-[0_20px_38px_-28px_rgba(31,41,55,0.34)]'
    : 'border-board-600/75 bg-[linear-gradient(165deg,rgba(255,255,255,0.98),rgba(242,248,245,0.9))] text-board-50 shadow-[0_20px_38px_-28px_rgba(31,41,55,0.3)]'

  const paragraphTone = isDarkTile ? 'text-board-100/95' : 'text-board-100/90'
  const listTone = isDarkTile ? 'text-board-100/95' : 'text-board-100/90'

  const liveButtonTone = isDarkTile
    ? 'bg-accent-500 text-board-800 shadow-[0_10px_24px_-16px_rgba(47,110,91,0.55)] hover:bg-accent-700 hover:shadow-[0_14px_26px_-16px_rgba(36,87,71,0.55)]'
    : 'bg-accent-500 text-board-800 shadow-[0_10px_24px_-16px_rgba(47,110,91,0.5)] hover:bg-accent-700 hover:shadow-[0_14px_26px_-16px_rgba(36,87,71,0.5)]'

  const githubButtonTone = isDarkTile
    ? 'border-board-600/80 bg-board-800/70 text-board-100 hover:border-highlight-500 hover:text-highlight-700'
    : 'border-board-600/80 bg-board-800/70 text-board-100 hover:border-highlight-500 hover:text-highlight-700'

  return (
    <article
      className={`move-tile relative flex h-full flex-col rounded-2xl border p-6 shadow-lg hover:ring-1 hover:ring-accent-500/45 sm:p-7 ${cardTone}`}
    >
      <div className="absolute right-4 top-4 flex items-center gap-2">
        <ChessPieceIcon piece={piece} className={`h-4 w-4 ${isDarkTile ? 'text-highlight-500' : 'text-accent-500'}`} />
        <span
          className={`text-[10px] font-semibold uppercase tracking-[0.22em] ${
            isDarkTile ? 'text-board-200' : 'text-board-200'
          }`}
        >
          {tileCoordinates[index] || 'A1'}
        </span>
      </div>

      <h3 className="pr-14 text-xl font-semibold text-board-50">{title}</h3>
      <p className={`mt-4 text-sm leading-7 ${paragraphTone}`}>{whatItIs}</p>
      <p className={`mt-3 text-sm leading-7 ${paragraphTone}`}>{problemSolved}</p>

      <ul className={`mt-5 space-y-2 text-sm leading-7 ${listTone}`}>
        {highlights.map((item) => (
          <li key={item} className="list-inside list-disc">
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-7 flex flex-wrap gap-3">
        <a
          href={liveUrl}
          target="_blank"
          rel="noreferrer"
          className={`inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold ${liveButtonTone}`}
        >
          Live Demo
        </a>
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center justify-center rounded-md border px-5 py-2.5 text-sm font-semibold ${githubButtonTone}`}
          >
            GitHub
          </a>
        )}
      </div>
    </article>
  )
}

export default ProjectCard
