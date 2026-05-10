interface HeroSectionProps {
  onOpenModal?: () => void;
}

const HeroSection = ({ onOpenModal }: HeroSectionProps) => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding pt-32">
    {/* Background */}
    {/* <div className="absolute inset-0">
      <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
    </div> */}
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
          onClick={() => { window.open("https://github.com/saksham-joshi/JoxDB", "_blank", "noopener,noreferrer")}}
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
);

export default HeroSection;
