import { Check } from "lucide-react";
import WindowsIcon from "@/assets/windows.png"
import LinuxIcon from "@/assets/linux.png"

const plans = [
  {
    os: "Windows",
    arch: "x64",
    icon: WindowsIcon,
    downloadLink: ""
  },
  {
    os: "Linux",
    arch: "x64",
    icon: LinuxIcon,
    downloadLink: ""
  },
];

const DownloadSection = () => (
  <section id="download" className="section-padding gradient-bg">
    <div className="container mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        <span className="secondary-color-text">Download</span>
        <span className="glow-text"> JoxDB</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {plans.map((p) => (
          <div
            key={p.os}
            className="glass-card-hover p-8 flex flex-col relative"
          >
            <h2 className="text-xl font-bold mb-2 secondary-color-text">{p.os}</h2>
            <p className="text-3xl font-extrabold glow-text mb-6">{p.arch}</p>
            <img className="w-48 h-48 ml-auto mr-auto" src={p.icon} />
            <a
              href={p.downloadLink}
              className="text-center rounded-lg py-3 mt-4 font-semibold transition-all duration-300 glow-button"
            >
              Download
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DownloadSection;
