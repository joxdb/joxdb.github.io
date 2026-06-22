interface HeroSectionProps {
  onOpenModal?: () => void
}

const floatingLogos = [
  { top: "8%", left: "10%", size: 34, duration: 14, delay: -2 },
  { top: "14%", left: "27%", size: 42, duration: 16, delay: -6 },
  { top: "10%", left: "44%", size: 32, duration: 13, delay: -1 },
  { top: "20%", left: "61%", size: 38, duration: 17, delay: -7 },
  { top: "11%", left: "79%", size: 30, duration: 15, delay: -3 },
  { top: "18%", left: "92%", size: 36, duration: 18, delay: -4 },
  { top: "34%", left: "16%", size: 40, duration: 19, delay: -9 },
  { top: "38%", left: "35%", size: 30, duration: 12, delay: -5 },
  { top: "30%", left: "53%", size: 44, duration: 15, delay: -10 },
  { top: "42%", left: "72%", size: 34, duration: 14, delay: -8 },
  { top: "35%", left: "88%", size: 28, duration: 16, delay: -2 },
  { top: "56%", left: "8%", size: 32, duration: 17, delay: -6 },
  { top: "66%", left: "24%", size: 46, duration: 20, delay: -11 },
  { top: "62%", left: "43%", size: 36, duration: 14, delay: -4 },
  { top: "70%", left: "60%", size: 30, duration: 13, delay: -3 },
  { top: "63%", left: "78%", size: 40, duration: 18, delay: -9 },
  { top: "74%", left: "92%", size: 34, duration: 15, delay: -7 },
  { top: "88%", left: "14%", size: 30, duration: 16, delay: -5 },
  { top: "86%", left: "39%", size: 38, duration: 19, delay: -12 },
  { top: "90%", left: "69%", size: 32, duration: 14, delay: -1 },
] as const

const HeroSection = ({ onOpenModal }: HeroSectionProps) => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding pt-32">
    <div className="hero-logo-cloud" aria-hidden="true">
      {floatingLogos.map((logo, index) => (
        <img
          key={`${logo.top}-${logo.left}-${index}`}
          src="/logo/joxdb-square-logo-bg-removed.png"
          alt=""
          className="hero-floating-logo"
          style={{
            top: logo.top,
            left: logo.left,
            width: `${logo.size}px`,
            animationDuration: `${logo.duration}s`,
            animationDelay: `${logo.delay}s`,
          }}
        />
      ))}
    </div>

    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />

    <div className="relative z-10 text-center max-w-3xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-12 mt-24">
        <span className="secondary-color-text">JoxDB</span>{" "}
        <span className="primary-color-text">: an In-memory NoSQL DBMS</span>
      </h1>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
        <a href="#download" className="glow-button text-lg px-8 py-4">
          Download
        </a>
        <button
          onClick={() => {
            window.open("https://github.com/saksham-joshi/JoxDB", "_blank", "noopener,noreferrer")
          }}
          className="px-8 py-4 rounded-lg border border-primary/30 text-foreground font-semibold hover:bg-primary/10 transition-all duration-300"
        >
          View on GitHub
        </button>
      </div>
      <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto tracking-widest">
        Fastest + Free + Open Source
      </p>
    </div>
  </section>
)

export default HeroSection
