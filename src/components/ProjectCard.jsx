function ProjectCard({
  title,
  summary,
  problem,
  systemDesign,
  challenge,
  solution,
  result,
  stack,
  liveUrl,
  githubUrl,
  index = 0,
  isPrimary = false,
  isWide = false,
}) {
  const isDarkTile = index % 2 === 1

  const cardTone = isPrimary
    ? 'border-accent-500/45 bg-[linear-gradient(165deg,rgba(255,255,255,0.99),rgba(237,246,242,0.92))] text-board-50 shadow-[0_24px_42px_-28px_rgba(31,41,55,0.36)]'
    : isDarkTile
      ? 'border-highlight-500/45 bg-[linear-gradient(165deg,rgba(255,255,255,0.98),rgba(249,240,223,0.9))] text-board-50 shadow-[0_20px_38px_-28px_rgba(31,41,55,0.34)]'
      : 'border-board-600/75 bg-[linear-gradient(165deg,rgba(255,255,255,0.98),rgba(242,248,245,0.9))] text-board-50 shadow-[0_20px_38px_-28px_rgba(31,41,55,0.3)]'

  const paragraphTone = isDarkTile ? 'text-board-100/95' : 'text-board-100/90'

  const liveButtonTone = isDarkTile
    ? 'bg-accent-500 text-board-800 shadow-[0_10px_24px_-16px_rgba(47,110,91,0.55)] hover:bg-accent-700 hover:shadow-[0_14px_26px_-16px_rgba(36,87,71,0.55)]'
    : 'bg-accent-500 text-board-800 shadow-[0_10px_24px_-16px_rgba(47,110,91,0.5)] hover:bg-accent-700 hover:shadow-[0_14px_26px_-16px_rgba(36,87,71,0.5)]'

  const githubButtonTone = isDarkTile
    ? 'border-board-600/80 bg-board-800/70 text-board-100 hover:border-highlight-500 hover:text-highlight-700'
    : 'border-board-600/80 bg-board-800/70 text-board-100 hover:border-highlight-500 hover:text-highlight-700'

  const detailSections = [
    { label: 'Problem', value: problem },
    { label: 'System Design', value: systemDesign },
    { label: 'Technical Challenge', value: challenge },
    { label: 'Solution', value: solution },
    { label: 'Result', value: result },
  ]

  return (
    <article
      className={`move-tile relative flex h-full flex-col rounded-2xl border p-6 shadow-lg hover:ring-1 hover:ring-accent-500/45 sm:p-7 ${isPrimary && isWide ? 'md:col-span-2' : ''} ${cardTone}`}
    >
      {isPrimary && (
        <p className="inline-flex w-fit items-center rounded-full border border-accent-500/40 bg-accent-100/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent-700">
          Flagship Project
        </p>
      )}

      <h3 className={`${isPrimary ? 'mt-5 text-2xl' : 'mt-4 text-xl'} font-semibold text-board-50`}>{title}</h3>
      <p className={`mt-3 text-sm leading-7 ${paragraphTone}`}>{summary}</p>

      {stack?.length > 0 && (
        <ul className="mt-5 flex flex-wrap gap-2">
          {stack.map((item) => (
            <li
              key={item}
              className="rounded-full border border-board-600/75 bg-board-800/80 px-3 py-1 text-xs font-semibold text-board-100"
            >
              {item}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-6 space-y-3">
        {detailSections.map((section) => (
          <div key={section.label} className="rounded-lg border border-board-600/65 bg-board-800/70 p-3.5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent-500">{section.label}</p>
            <p className="mt-1.5 text-sm leading-6 text-board-100/95">{section.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-7 flex flex-wrap gap-3">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold ${liveButtonTone}`}
          >
            Live Demo
          </a>
        )}
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
        {!liveUrl && !githubUrl && (
          <p className="inline-flex items-center rounded-md border border-board-600/70 bg-board-800/75 px-4 py-2 text-sm text-board-200">
            Private build details available on request.
          </p>
        )}
      </div>
    </article>
  )
}

export default ProjectCard
