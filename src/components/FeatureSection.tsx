import { Shield, CloudLightning, MemoryStick, Cpu, HardDriveDownload, Target, BookText } from "lucide-react";

const skills = [
  { icon: Shield, title: "Extremely Secure" },
  { icon: CloudLightning, title: "Super-Fast" },
  { icon: MemoryStick, title: "Low Memory Usage" },
  { icon: Cpu, title: "Low Power Usage" },
  { icon: HardDriveDownload, title: "Easy to setup" },
  { icon: BookText, title: "Easy documentations" },
];

const FeatureSection = () => (
  <section id="features" className="section-padding">
    <div className="container mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        <span className="secondary-color-text">Primary</span>
        <span className="glow-text"> Features</span>
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map(({ icon: Icon, title }) => (
          <div key={title} className="glass-card-hover p-6 text-center">
            <Icon className="mx-auto mb-4 text-primary" size={40} />
            <h3 className="text-lg font-semibold">{title}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeatureSection;
