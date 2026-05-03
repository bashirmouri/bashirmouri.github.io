import ChessPieceIcon from './ChessPieceIcon'

function Contact() {
  return (
    <section id="contact" className="section-shell py-20 sm:py-24">
      <div className="board-grid-bg rounded-3xl border border-board-600/70 bg-[linear-gradient(165deg,rgba(255,255,255,0.96),rgba(247,243,233,0.92))] px-6 py-12 shadow-[0_24px_60px_-34px_rgba(31,41,55,0.32)] sm:px-10 sm:py-14">
        <div className="pointer-events-none absolute -right-12 -top-10 h-32 w-32 rounded-full bg-highlight-500/22 blur-3xl" />

        <div className="relative z-10">
          <div className="flex items-center gap-2">
            <ChessPieceIcon piece="king" className="h-5 w-5 text-accent-500" />
            <h2 className="section-title text-board-50">Contact</h2>
          </div>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-board-200 sm:text-base">
            Available for software engineering internships from Summer 2026, with strongest fit in backend,
            full-stack engineering roles.
          </p>

          <p className="mt-2 text-sm text-board-100/90">Response time: within 24 hours.</p>

          <div className="mt-7 space-y-2 text-sm text-board-100 sm:text-base">
            <p>
              Email:{' '}
              <a className="font-semibold text-accent-500 hover:text-accent-700" href="mailto:b.mouri@aui.ma">
                b.mouri@aui.ma
              </a>
            </p>
            <p>
              GitHub:{' '}
              <a
                className="font-semibold text-accent-500 hover:text-accent-700"
                href="https://github.com/bashirmouri"
                target="_blank"
                rel="noreferrer"
              >
                github.com/bashirmouri
              </a>
            </p>
          </div>

          <a
            href="mailto:b.mouri@aui.ma"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-accent-500 px-6 py-3.5 text-sm font-semibold text-board-800 shadow-[0_12px_28px_-18px_rgba(47,110,91,0.6)] hover:bg-accent-700 hover:shadow-[0_18px_34px_-18px_rgba(36,87,71,0.62)] motion-safe:animate-square-pulse"
          >
            Discuss Internship Roles
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
