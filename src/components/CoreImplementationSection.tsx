import { Bot, Code2, UserRoundCheck } from "lucide-react"

const implementationStats = [
  {
    label: "Human written code",
    value: "99%",
    accent: "text-primary",
    bar: "bg-primary",
  },
  {
    label: "AI-assisted code",
    value: "1%",
    accent: "text-secondary",
    bar: "bg-secondary",
  },
]

const CoreImplementationSection = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <div className="glass-card-hover overflow-hidden p-6 md:p-8 lg:p-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              <span className="secondary-color-text">Human written</span>
              <span className="glow-text"> not Vibe-coded</span>
            </h2>

            <div className="mb-8 flex items-center gap-4 rounded-xl border border-primary/15 bg-background/35 p-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Code2 size={24} />
              </div>
              <div>
                <p className="text-lg font-semibold">
                  99% of it's <strong className="tracking-wider">'core implementation'</strong> is
                  written by a Human
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-primary/15 bg-background/30 p-5">
            {/* Labels row: icon + value on each end */}
            <div className="mb-3 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <UserRoundCheck className={implementationStats[0].accent} size={22} />
                <span className={`text-2xl font-extrabold ${implementationStats[0].accent}`}>
                  {implementationStats[0].value}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-2xl font-extrabold ${implementationStats[1].accent}`}>
                  {implementationStats[1].value}
                </span>
                <Bot className={implementationStats[1].accent} size={22} />
              </div>
            </div>

            {/* Single continuous split bar */}
            <div className="flex h-3 w-full overflow-hidden rounded-full bg-muted">
              {implementationStats.map(({ label, value, bar }) => (
                <div
                  key={label}
                  className={bar}
                  style={{ width: value }}
                  title={`${label}: ${value}`}
                />
              ))}
            </div>

            {/* Labels below the bar */}
            <div className="mt-3 flex items-center justify-between gap-4 text-xs text-muted-foreground">
              <span>{implementationStats[0].label}</span>
              <span>{implementationStats[1].label}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default CoreImplementationSection
