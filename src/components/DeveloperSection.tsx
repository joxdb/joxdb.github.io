import type { LucideIcon } from "lucide-react";
import { BadgeCheck, Github, Globe2, Linkedin, Mail, UserCircle2 } from "lucide-react";
import developerImg from "@/assets/saksham-joshi.png";

type ProfileItem = {
  label: string;
  value: string;
  href?: string;
  icon: LucideIcon;
};

const profileItems: ProfileItem[] = [
  { label: "Name", value: "Saksham Joshi", icon: UserCircle2 },
  { label: "Brief", value: "Creator of JoxDB and SRON", icon: BadgeCheck },
  {
    label: "Portfolio",
    value: "sakshamjoshi.vercel.app",
    href: "https://sakshamjoshi.vercel.app",
    icon: Globe2,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/sakshamjoshi27",
    href: "https://linkedin.com/in/sakshamjoshi27",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/saksham-joshi",
    href: "https://github.com/saksham-joshi",
    icon: Github,
  },
  {
    label: "Email",
    value: "social.sakshamjoshi@gmail.com",
    href: "mailto:social.sakshamjoshi@gmail.com",
    icon: Mail,
  },
];

const DeveloperSection = () => (
  <section id="developer" className="section-padding gradient-bg">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="glass-card p-2 rounded-2xl">
          <img
            src={developerImg}
            alt="saksham-joshi"
            className="w-full rounded-xl object-cover aspect-[4/5]"
          />
        </div>
        <div className="text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="secondary-color-text">Meet the </span>
            <span className="glow-text">Developer</span>
          </h2>
          <div className="space-y-3">
            {profileItems.map(({ label, value, href, icon: Icon }) => (
              <div
                key={label}
                className="glass-card-hover w-full p-2 rounded-xl flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
              >
                <div className="flex items-center gap-3 min-w-0 w-full">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Icon size={18} />
                  </div>
                  <div className="min-w-0 w-full">
                    <p className="text-sm text-muted-foreground">{label}</p>
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
);

export default DeveloperSection;
