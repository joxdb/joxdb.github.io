import { Bot, Code2, ShieldCheck, UserRoundCheck } from "lucide-react";

const implementationStats = [
  {
    label: "Human written code",
    value: "99%",
    icon: UserRoundCheck,
    accent: "text-primary",
    bar: "bg-primary",
  },
  {
    label: "AI-assisted code",
    value: "1%",
    icon: Bot,
    accent: "text-secondary",
    bar: "bg-secondary"
  },
];

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
                <p className="text-lg font-semibold">99% of it's <strong className="tracking-wider">'core implementation'</strong> is written by a Human</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {implementationStats.map(({ label, value, icon: Icon, accent, bar }) => (
              <div key={label} className="rounded-xl border border-primary/15 bg-background/30 p-5">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <Icon className={accent} size={30} />
                  <span className={`text-4xl font-extrabold ${accent}`}>{value}</span>
                </div>
                <p className="font-semibold">{label}</p>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-muted">
                  <div className={`h-full ${bar}`} style={{ width: value }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CoreImplementationSection;