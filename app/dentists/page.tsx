"use client"

import React from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { PageShell } from "@/components/page-shell"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { CheckCircle, Download, Send, Users, Microscope, Zap, ArrowRight, FileText, PhoneCall } from "lucide-react"
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

      {/* Hero Section - Optimized for Mobile */}
      <section className="relative w-full bg-brand-cream text-brand-dark-text overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <iframe
            src={`https://player.vimeo.com/video/${vimeoVideoId}?autoplay=1&loop=1&muted=1&background=1&autopause=0&controls=0&title=0&byline=0&portrait=0`}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            title="Wine Country Vineyards Background Video - Rolling Hills"
            className="opacity-15"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          ></iframe>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-cream via-brand-cream/80 to-brand-cream/50 z-10" />

        <div className="relative z-20 container mx-auto px-4 md:px-6 min-h-[calc(100svh-80px)] sm:min-h-[400px] md:min-h-[450px] flex flex-col justify-center py-12 sm:py-0">
          <div className="max-w-xl animate-fade-in text-center sm:text-left">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-merlot leading-tight mb-4">
              Elevating Endodontic Care, Together.
            </h1>
            <p className="text-base sm:text-lg text-brand-dark-text/80 mb-8 leading-relaxed">
              Partner with Wine Country Root Canal for advanced diagnostics, seamless referrals, and exceptional
              outcomes for your patients.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center sm:justify-start">
              <Button
                size="lg"
                className="bg-brand-merlot text-brand-cream hover:bg-brand-merlot/90 px-6 py-3 text-sm sm:text-base font-semibold shadow-md transition-transform hover:scale-105 w-full sm:w-auto"
                asChild
              >
                <Link href="#referral-process" onClick={scrollToReferral}>
                  Make a Referral <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-brand-merlot text-brand-merlot hover:bg-brand-merlot/5 px-6 py-3 text-sm sm:text-base font-semibold shadow-md transition-transform hover:scale-105 w-full sm:w-auto"
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
        <div className="container mx-auto px-4 md:px-6 space-y-12 md:space-y-20">
          {/* Value Propositions - Mobile Optimized */}
          <FadeInSection>
            <h2 className="font-serif text-2xl sm:text-3xl text-brand-merlot mb-8 text-center">
              Your Trusted Partner in Endodontics
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {valueProps.map((prop) => (
                <Card
                  key={prop.title}
                  className="bg-white shadow-lg border-l-4 border-brand-rose-beige flex flex-col p-4 sm:p-6"
                >
                  <div className="flex items-center mb-3">
                    <div className="flex-shrink-0 mr-3 sm:mr-4 rounded-full p-2 sm:p-3 bg-brand-merlot/10">
                      {React.cloneElement(prop.icon, { className: "w-6 h-6 sm:w-7 sm:w-7 text-brand-merlot" })}
                    </div>
                    <CardTitle className="font-serif text-xl sm:text-2xl text-brand-merlot">{prop.title}</CardTitle>
                  </div>
                  <CardContent className="p-0 flex-grow">
                    <p className="text-sm sm:text-base text-brand-dark-text/80">{prop.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </FadeInSection>

          {/* Technology Highlights - Mobile Optimized */}
          <FadeInSection className="text-center">
            <h2 className="font-serif text-2xl sm:text-3xl text-brand-merlot mb-4">Leveraging Advanced Technology</h2>
            <p className="text-base sm:text-lg text-brand-dark-text/80 mb-8 max-w-2xl mx-auto">
              Our investment in cutting-edge technology like Cone Beam CT (CBCT) and surgical operating microscopes
              allows for superior diagnostics and treatment outcomes.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto">
              <div className="bg-brand-cream p-6 rounded-sm shadow-md text-center">
                <Microscope className="w-10 h-10 text-brand-merlot mx-auto mb-3" />
                <h3 className="font-semibold text-lg sm:text-xl text-brand-dark-text">Surgical Microscopes</h3>
                <p className="text-sm text-brand-dark-text/70 mt-1">Enhanced visualization for complex cases.</p>
              </div>
              <div className="bg-brand-cream p-6 rounded-sm shadow-md text-center">
                <Zap className="w-10 h-10 text-brand-merlot mx-auto mb-3" />
                <h3 className="font-semibold text-lg sm:text-xl text-brand-dark-text">CBCT Imaging</h3>
                <p className="text-sm text-brand-dark-text/70 mt-1">Detailed 3D views for accurate diagnosis.</p>
              </div>
            </div>
            <Button
              variant="outline"
              className="mt-8 border-brand-merlot text-brand-merlot hover:bg-brand-merlot hover:text-brand-cream w-full sm:w-auto"
              asChild
            >
              <Link href="/technology">Learn More About Our Technology</Link>
            </Button>
          </FadeInSection>

          {/* Referral Process - Mobile Optimized */}
          <FadeInSection
            id="referral-process"
            className="bg-white p-6 sm:p-8 md:p-12 rounded-sm shadow-xl scroll-mt-20"
          >
            <h2 className="font-serif text-2xl sm:text-3xl text-brand-merlot mb-8 text-center">
              Easy Referral Process
            </h2>
            <div className="space-y-8">
              <div className="text-center sm:text-left">
                <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3 mb-3">
                  <Send className="w-7 h-7 text-brand-merlot shrink-0" />
                  <h3 className="font-semibold text-xl sm:text-2xl text-brand-dark-text">Online Referral Form</h3>
                </div>
                <p className="text-brand-dark-text/80 mb-4 text-sm sm:text-base">
                  Submit referrals quickly and securely through our online portal (Coming Soon).
                </p>
                <Button className="bg-brand-merlot text-brand-cream hover:bg-brand-merlot/90 w-full sm:w-auto" disabled>
                  Online Referral (Coming Soon)
                </Button>
              </div>

              <hr className="border-brand-rose-beige/30" />

              <div className="text-center sm:text-left">
                <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3 mb-3">
                  <FileText className="w-7 h-7 text-brand-merlot shrink-0" />
                  <h3 className="font-semibold text-xl sm:text-2xl text-brand-dark-text">Downloadable Referral Form</h3>
                </div>
                <p className="text-brand-dark-text/80 mb-4 text-sm sm:text-base">
                  Alternatively, download our PDF referral form and email or fax it to our office.
                </p>
                <Button
                  variant="outline"
                  className="border-brand-merlot text-brand-merlot hover:bg-brand-merlot hover:text-brand-cream w-full sm:w-auto"
                  asChild
                >
                  <a href="/placeholder-referral-form.pdf" download>
                    <Download className="w-4 h-4 mr-2" /> Download PDF Form
                  </a>
                </Button>
                <p className="text-xs text-brand-dark-text/70 mt-3">Fax: (707) 555-1235 (Placeholder)</p>
              </div>
            </div>
            <div className="mt-10 text-center bg-brand-cream p-4 rounded-md">
              <div className="flex items-center justify-center gap-2 mb-2">
                <PhoneCall className="w-5 h-5 text-brand-merlot" />
                <h4 className="font-semibold text-brand-dark-text">Urgent Cases?</h4>
              </div>
              <p className="text-sm text-brand-dark-text/80">
                We typically contact referred patients within 24-48 hours. For urgent matters, please call our office
                directly at{" "}
                <a href="tel:+17075233636" className="font-semibold text-brand-merlot hover:underline">
                  (707) 523-3636
                </a>
                .
              </p>
            </div>
          </FadeInSection>

          {/* Send Referral CTA - Mobile Optimized */}
          <FadeInSection className="text-center py-10">
            <h2 className="font-serif text-2xl sm:text-3xl text-brand-merlot mb-4">Refer Your Patient Today</h2>
            <p className="text-base sm:text-lg text-brand-dark-text/80 mb-8 max-w-xl mx-auto">
              We look forward to collaborating with you to provide the best possible care for your patients.
            </p>
            <Button
              size="lg"
              className="bg-brand-rose-beige text-brand-dark-text hover:bg-brand-merlot hover:text-brand-cream px-8 sm:px-10 py-3 text-base w-full sm:w-auto"
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
