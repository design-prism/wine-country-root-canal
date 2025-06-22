"use client"

import React from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { PageShell } from "@/components/page-shell"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Download, Send, Users, Microscope, Zap, ArrowRight } from "lucide-react"
import { FadeInSection } from "@/components/fade-in-section"
import Link from "next/link"

export default function ForDentistsPage() {
  const valueProps = [
    {
      title: "Seamless Collaboration",
      description: "We prioritize clear communication and timely updates for you and your patients.",
      icon: <Users />,
    },
    {
      title: "Advanced Diagnostics",
      description: "Utilizing CBCT and operating microscopes for precise treatment planning and execution.",
      icon: <Microscope />,
    },
    {
      title: "Efficient Turnaround",
      description: "Prompt scheduling for your referred patients, especially urgent cases.",
      icon: <Zap />,
    },
    {
      title: "Exceptional Patient Care",
      description: "Ensuring your patients receive compassionate, high-quality endodontic treatment.",
      icon: <CheckCircle />,
    },
  ]

  const scrollToReferral = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    const referralSection = document.getElementById("referral-process")
    if (referralSection) {
      referralSection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const vimeoVideoId = "1095456147"

  return (
    <>
      <Navbar />

      {/* Updated Custom Hero Section for Dentists Page with Video Background */}
      <section className="relative w-full bg-brand-cream text-brand-dark-text overflow-hidden">
        {/* Video Background Container - This div fills the section */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <iframe
            src={`https://player.vimeo.com/video/${vimeoVideoId}?autoplay=1&loop=1&muted=1&background=1&autopause=0&controls=0&title=0&byline=0&portrait=0`}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            title="Wine Country Vineyards Background Video - Rolling Hills"
            className="opacity-15" // For subtlety
            style={{
              position: "absolute", // Positioned within the parent div
              top: 0,
              left: 0,
              width: "100%", // Fill parent div's width
              height: "100%", // Fill parent div's height
            }}
          ></iframe>
        </div>
        {/* Gradient overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-cream via-brand-cream/80 to-brand-cream/50 z-10" />

        <div className="relative z-20 container mx-auto px-4 md:px-6 min-h-[450px] md:min-h-[500px] flex flex-col justify-center">
          <div className="max-w-2xl py-12 md:py-16 animate-fade-in">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-merlot leading-tight mb-6">
              Elevating Endodontic Care, Together.
            </h1>
            <p className="text-lg md:text-xl text-brand-dark-text/80 mb-10 leading-relaxed">
              Partner with Wine Country Root Canal for advanced diagnostics, seamless referrals, and exceptional
              outcomes for your patients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-brand-merlot text-brand-cream hover:bg-brand-merlot/90 px-8 py-3 text-base font-semibold shadow-md transition-transform hover:scale-105"
                asChild
              >
                <Link href="#referral-process" onClick={scrollToReferral}>
                  Make a Referral <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-brand-merlot text-brand-merlot hover:bg-brand-merlot/5 px-8 py-3 text-base font-semibold shadow-md transition-transform hover:scale-105"
                asChild
              >
                <Link href="/technology">Explore Our Technology</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <PageShell
        title="Partnering with Dental Professionals"
        description="Providing exceptional endodontic care for your patients in Santa Rosa and beyond."
        hideTitleSection={true}
      >
        <div className="container mx-auto px-4 md:px-6 space-y-16 md:space-y-24">
          {/* Value Propositions */}
          <FadeInSection>
            <h2 className="font-serif text-3xl text-brand-merlot mb-8 text-center">
              Your Trusted Partner in Endodontics
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {valueProps.map((prop) => (
                <Card key={prop.title} className="bg-white shadow-lg border-l-4 border-brand-rose-beige">
                  <CardHeader>
                    <div className="flex items-center text-brand-merlot mb-2">
                      {React.cloneElement(prop.icon, { className: "w-7 h-7 mr-3" })}
                      <CardTitle className="font-serif text-2xl">{prop.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-brand-dark-text/80">{prop.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </FadeInSection>

          {/* Technology Highlights */}
          <FadeInSection className="text-center">
            <h2 className="font-serif text-3xl text-brand-merlot mb-4">Leveraging Advanced Technology</h2>
            <p className="text-lg text-brand-dark-text/80 mb-8 max-w-2xl mx-auto">
              Our investment in cutting-edge technology like Cone Beam CT (CBCT) and surgical operating microscopes
              allows for superior diagnostics and treatment outcomes.
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="bg-brand-cream p-6 rounded-sm shadow-md">
                <Microscope className="w-10 h-10 text-brand-merlot mx-auto mb-2" />
                <h3 className="font-semibold text-xl text-brand-dark-text">Surgical Microscopes</h3>
                <p className="text-sm text-brand-dark-text/70">Enhanced visualization for complex cases.</p>
              </div>
              <div className="bg-brand-cream p-6 rounded-sm shadow-md">
                <Zap className="w-10 h-10 text-brand-merlot mx-auto mb-2" /> {/* Placeholder for CBCT */}
                <h3 className="font-semibold text-xl text-brand-dark-text">CBCT Imaging</h3>
                <p className="text-sm text-brand-dark-text/70">Detailed 3D views for accurate diagnosis.</p>
              </div>
            </div>
            <Button
              variant="outline"
              className="mt-8 border-brand-merlot text-brand-merlot hover:bg-brand-merlot hover:text-brand-cream"
              asChild
            >
              <Link href="/technology">Learn More About Our Technology</Link>
            </Button>
          </FadeInSection>

          {/* Referral Process */}
          <FadeInSection id="referral-process" className="bg-white p-8 md:p-12 rounded-sm shadow-xl scroll-mt-20">
            <h2 className="font-serif text-3xl text-brand-merlot mb-6 text-center">Easy Referral Process</h2>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="font-semibold text-xl text-brand-dark-text mb-3">Online Referral Form</h3>
                <p className="text-brand-dark-text/80 mb-4">
                  Submit referrals quickly and securely through our online portal (Coming Soon).
                </p>
                <Button className="bg-brand-merlot text-brand-cream hover:bg-brand-merlot/90 w-full md:w-auto" disabled>
                  <Send className="w-4 h-4 mr-2" /> Online Referral (Coming Soon)
                </Button>
              </div>
              <div>
                <h3 className="font-semibold text-xl text-brand-dark-text mb-3">Downloadable Referral Form</h3>
                <p className="text-brand-dark-text/80 mb-4">
                  Alternatively, download our PDF referral form and email or fax it to our office.
                </p>
                <Button
                  variant="outline"
                  className="border-brand-merlot text-brand-merlot hover:bg-brand-merlot hover:text-brand-cream w-full md:w-auto"
                  asChild
                >
                  <a href="/placeholder-referral-form.pdf" download>
                    <Download className="w-4 h-4 mr-2" /> Download PDF Form
                  </a>
                </Button>
                <p className="text-xs text-brand-dark-text/70 mt-2">Fax: (707) 555-1235 (Placeholder)</p>
              </div>
            </div>
            <p className="text-center mt-8 text-brand-dark-text/80">
              We typically contact referred patients within 24-48 hours to schedule their appointment. For urgent cases,
              please call our office directly.
            </p>
          </FadeInSection>

          {/* Send Referral CTA */}
          <FadeInSection className="text-center py-12">
            <h2 className="font-serif text-3xl text-brand-merlot mb-4">Refer Your Patient Today</h2>
            <p className="text-xl text-brand-dark-text/80 mb-8 max-w-xl mx-auto">
              We look forward to collaborating with you to provide the best possible care for your patients.
            </p>
            <Button
              size="lg"
              className="bg-brand-rose-beige text-brand-dark-text hover:bg-brand-merlot hover:text-brand-cream px-10 py-3 text-lg"
              asChild
            >
              <Link href="/contact">Contact Our Office</Link>
            </Button>
          </FadeInSection>
        </div>
      </PageShell>
      <Footer />
    </>
  )
}
