import type { LucideIcon } from "lucide-react"
import { BadgeCheck, Github, Globe2, Linkedin, Mail, UserCircle2 } from "lucide-react"
import developerImg from "@/assets/saksham-joshi.png"

type ProfileItem = {
  value: string
  href?: string
  icon: LucideIcon
}

const profileItems: ProfileItem[] = [
  { value: "Saksham Joshi", icon: UserCircle2 },
  { value: "Creator of JoxDB and SRON", icon: BadgeCheck },
  {
    value: "sakshamjoshi.vercel.app",
    href: "https://sakshamjoshi.vercel.app",
    icon: Globe2,
  },
  {
    value: "linkedin.com/in/sakshamjoshi27",
    href: "https://linkedin.com/in/sakshamjoshi27",
    icon: Linkedin,
  },
  {
    value: "github.com/saksham-joshi",
    href: "https://github.com/saksham-joshi",
    icon: Github,
  },
  {
    value: "social.sakshamjoshi@gmail.com",
    href: "mailto:social.sakshamjoshi@gmail.com",
    icon: Mail,
  },
]

const DeveloperSection = () => (
  <section id="developer" className="section-padding gradient-bg">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute inset-0 rounded-full bg-primary/40 blur-2xl animate-pulse" />
          <div className="relative glass-card p-2 rounded-full ring-2 ring-primary/60 shadow-[0_0_40px_rgba(var(--primary-rgb,99,102,241),0.5)]">
            <img
              src={developerImg}
              alt="saksham-joshi"
              className="w-full rounded-full object-cover aspect-[1/1]"
            />
          </div>
        </div>
        <div className="text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="secondary-color-text">Meet the </span>
            <span className="glow-text">Developer</span>
          </h2>
          <div className="space-y-3">
            {profileItems.map(({ value, href, icon: Icon }, index: number) => (
              <div
                key={index}
                className="glass-card-hover w-full p-2 rounded-xl flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
              >
                <div className="flex items-center gap-3 min-w-0 w-full">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Icon size={18} />
                  </div>
                  <div className="min-w-0 w-full">
                    <p className="font-medium break-all sm:break-normal sm:truncate">{value}</p>
                  </div>
                </div>
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-primary font-semibold hover:text-primary/80 transition-colors shrink-0"
                  >
                    Open
                  </a>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default DeveloperSection
