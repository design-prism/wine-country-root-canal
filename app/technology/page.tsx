import React from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { PageShell } from "@/components/page-shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Microscope, ScanSearch, Wind, RadioTower } from "lucide-react" // RadioTower for Digital X-ray
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
      <PageShell
        title="Advanced Endodontic Technology"
        description="Investing in the latest technology for superior patient care and treatment success."
        heroImageUrl="/placeholder.svg?width=1200&height=400"
      >
        <FadeInSection className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {technologies.map((tech) => (
              <Card key={tech.name} className="bg-white shadow-lg flex flex-col">
                <CardHeader className="flex-row items-center space-x-4 pb-4">
                  <div className="p-3 rounded-full bg-brand-cream text-brand-merlot">
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
      </PageShell>
      <Footer />
    </>
  )
}
