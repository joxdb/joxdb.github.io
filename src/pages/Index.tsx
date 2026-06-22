import { useState } from "react"
import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import DeveloperSection from "@/components/DeveloperSection"
import DesignSection from "@/components/DesignSection"
import DownloadSection from "@/components/DownloadSection"
import FAQSection from "@/components/FAQSection"
import FooterSection from "@/components/FooterSection"
import FeatureSection from "@/components/FeatureSection"
import CoreImplementationSection from "@/components/CoreImplementationSection"

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection onOpenModal={() => setModalOpen(true)} />
      <CoreImplementationSection />
      <FeatureSection />
      <DesignSection />
      <DownloadSection />
      <DeveloperSection />
      <FAQSection />
      <FooterSection />
    </div>
  )
}

export default Index
