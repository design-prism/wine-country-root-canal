import React from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Microscope, ScanSearch, Wind, RadioTower, Zap, Eye } from "lucide-react"
import { FadeInSection } from "@/components/fade-in-section"

export default function TechnologyPage() {
  const technologies = [
    {
      name: "CBCT Scanner",
      icon: <ScanSearch />,
      benefit:
        "Provides detailed 3D images for precise diagnosis and treatment planning, enhancing patient safety and outcomes.",
    },
    {
      name: "Surgical Operating Microscope",
      icon: <Microscope />,
      benefit:
        "Magnifies treatment areas, allowing for highly accurate procedures and preservation of tooth structure.",
    },
    {
      name: "Digital X-rays",
      icon: <RadioTower />,
      benefit:
        "Offers instant images with significantly less radiation exposure compared to traditional X-rays, improving diagnostic speed.",
    },
    {
      name: "Advanced Air Purification",
      icon: <Wind />,
      benefit:
        "Ensures a clean and safe environment by removing airborne particles and pathogens, prioritizing patient health.",
    },
  ]

  return (
    <>
      <Navbar />
      
      {/* Custom Technology Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-brand-cream via-white to-brand-cream/50 text-brand-dark-text overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(139, 69, 19, 0.3) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}></div>
        
        {/* Main hero content */}
        <div className="relative z-10 container mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="max-w-5xl mx-auto text-center">
            {/* Animated technology icons */}
            <div className="flex justify-center items-center gap-6 md:gap-8 mb-8 animate-fade-in">
              <div className="bg-brand-merlot/10 p-4 rounded-full">
                <Microscope className="w-12 h-12 md:w-16 md:h-16 text-brand-merlot" />
              </div>
              <div className="bg-brand-rose-beige/20 p-4 rounded-full">
                <ScanSearch className="w-12 h-12 md:w-16 md:h-16 text-brand-merlot" />
              </div>
              <div className="bg-brand-merlot/10 p-4 rounded-full">
                <Zap className="w-12 h-12 md:w-16 md:h-16 text-brand-merlot" />
              </div>
            </div>
            
            {/* Title and description */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-merlot leading-tight mb-6 animate-fade-in">
              Advanced Endodontic Technology
            </h1>
            <p className="text-lg md:text-xl text-brand-dark-text/80 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
              Investing in the latest technology for superior patient care and treatment success. Our cutting-edge equipment ensures precise diagnosis, comfortable procedures, and optimal outcomes.
            </p>
            
            {/* Technology highlights */}
            <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto mt-12">
              <div className="bg-white/60 backdrop-blur-sm p-6 rounded-sm shadow-md">
                <Eye className="w-8 h-8 text-brand-merlot mx-auto mb-3" />
                <h3 className="font-serif text-lg font-semibold text-brand-merlot mb-2">Enhanced Precision</h3>
                <p className="text-sm text-brand-dark-text/70">Microscopic accuracy for complex procedures</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm p-6 rounded-sm shadow-md">
                <Zap className="w-8 h-8 text-brand-merlot mx-auto mb-3" />
                <h3 className="font-serif text-lg font-semibold text-brand-merlot mb-2">Advanced Imaging</h3>
                <p className="text-sm text-brand-dark-text/70">3D visualization for optimal treatment planning</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm p-6 rounded-sm shadow-md">
                <Wind className="w-8 h-8 text-brand-merlot mx-auto mb-3" />
                <h3 className="font-serif text-lg font-semibold text-brand-merlot mb-2">Clean Environment</h3>
                <p className="text-sm text-brand-dark-text/70">State-of-the-art air purification systems</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeInSection>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-merlot mb-12 text-center">
              Our Technology Arsenal
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {technologies.map((tech) => (
                <Card key={tech.name} className="bg-white shadow-lg flex flex-col border-t-4 border-brand-rose-beige">
                  <CardHeader className="flex-row items-center space-x-4 pb-4">
                    <div className="p-3 rounded-full bg-brand-merlot/10 text-brand-merlot">
                      {React.cloneElement(tech.icon, { className: "w-8 h-8" })}
                    </div>
                    <CardTitle className="font-serif text-2xl text-brand-merlot">{tech.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-brand-dark-text/80">{tech.benefit}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>
      <Footer />
    </>
  )
}
