type SectionHeadingProps = {
  badge: string
  badgeColor?: string
  title: string
  highlight: string
  subtitle: string
}

function SectionHeading({ badge, badgeColor = 'sky', title, highlight, subtitle }: SectionHeadingProps) {
  const colorMap: Record<string, string> = {
    sky: 'bg-sky-400/10 border-sky-400/30 text-sky-600 dark:text-sky-300 bg-sky-400',
    emerald: 'bg-emerald-400/10 border-emerald-400/30 text-emerald-600 dark:text-emerald-300 bg-emerald-400',
    violet: 'bg-violet-400/10 border-violet-400/30 text-violet-600 dark:text-violet-300 bg-violet-400',
    amber: 'bg-amber-400/10 border-amber-400/30 text-amber-600 dark:text-amber-300 bg-amber-400',
  }
  const [bgSoft, borderSoft, textColor, , dotColor] = colorMap[badgeColor].split(' ')
  const highlightColor: Record<string, string> = {
    sky: 'text-sky-500 dark:text-sky-400',
    emerald: 'text-emerald-500 dark:text-emerald-400',
    violet: 'text-violet-500 dark:text-violet-400',
    amber: 'text-amber-500 dark:text-amber-400',
  }

  return (
    <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16 px-2">
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-4 ${bgSoft} ${borderSoft}`}>
        <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
        <span className={`text-xs font-medium ${textColor}`}>{badge}</span>
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
        {title} <span className={highlightColor[badgeColor]}>{highlight}</span>
      </h2>
      <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">{subtitle}</p>
    </div>
  )
}

export default SectionHeading