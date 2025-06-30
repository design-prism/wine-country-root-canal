"use client"

import type React from "react"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FadeInSection } from "@/components/fade-in-section"
import { MapPin, Phone, HeartHandshake, BriefcaseMedical, ShieldCheck, AlertTriangle, Quote, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault()
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    alert("Form submitted! (This is a placeholder)")
  }

  const vimeoVideoId = "1095456147"

  return (
    <div className="flex flex-col min-h-screen bg-brand-cream text-brand-dark-text">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section id="home" className="relative h-dvh w-full flex items-center overflow-hidden">
          {/* Video Background Container - This div fills the section */}
          <div className="video-background-container">
            {/* Video wrapper for better sizing control */}
            <div className="video-background-wrapper">
              <iframe
                src={`https://player.vimeo.com/video/${vimeoVideoId}?autoplay=1&loop=1&muted=1&background=1&autopause=0&controls=0&title=0&byline=0&portrait=0`}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                title="Wine Country Vineyards Background Video - Rolling Hills"
                className="video-background-iframe opacity-25"
              ></iframe>
            </div>
          </div>

          {/* Overlay for text contrast */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-brand-cream via-brand-cream/50 to-transparent" />

          {/* Content */}
          <div className="relative z-20 container mx-auto px-4 md:px-6 w-full">
            <div className="max-w-xs sm:max-w-md lg:max-w-lg bg-brand-cream/95 backdrop-blur-sm p-6 sm:p-8 md:p-12 rounded-sm shadow-xl animate-fade-in">
              <h2 className="font-serif text-lg sm:text-xl md:text-2xl text-brand-rose-beige mb-2 sm:mb-3">
                Wine Country Root Canal
              </h2>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-merlot leading-tight mb-4 sm:mb-6">
                Restoring Beautiful Smiles.
              </h1>
              <p className="text-base sm:text-lg text-brand-dark-text/80 mb-6 sm:mb-8 leading-relaxed">
                Expert endodontic care with a gentle touch in the heart of Santa Rosa.
              </p>
              <Button
                size="lg"
                className="bg-brand-merlot text-brand-cream hover:bg-brand-merlot/90 px-8 sm:px-10 py-3 text-sm sm:text-base font-semibold shadow-md transition-transform hover:scale-105 w-full sm:w-auto"
                asChild
              >
                <Link href="#contact" onClick={(e) => scrollToSection(e, "contact")}>
                  Schedule a Consultation
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-16 md:py-20 lg:py-32">
          <FadeInSection className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="lg:pr-8">
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-brand-merlot">
                  Compassionate Care, Clinical Excellence.
                </h2>
                <div className="text-lg space-y-6 text-brand-dark-text/80">
                  <p>
                    At Wine Country Root Canal, our goal is to provide incomparable quality in a compassionate
                    environment. Because our practice is dedicated solely to endodontic care, we are efficient and
                    precise, offering flexibility for emergency cases to eliminate pain as quickly as possible.
                  </p>
                  <p>
                    Dr. Craig Anderson has been practicing dentistry since 1997. We strive to bring you the finest care
                    using the latest technologies and techniques. It is our privilege to serve the communities of Sonoma
                    County, and we are here to provide answers to all your questions about endodontic treatment.
                  </p>
                </div>
              </div>
              <div className="rounded-sm overflow-hidden shadow-lg">
                <Image
                  src="/images/office-entrance.jpg"
                  alt="Entrance to Wine Country Root Canal office building"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </FadeInSection>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-20 lg:py-32 bg-white">
          <FadeInSection className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-merlot mb-4">
                Specialized Endodontic Services
              </h2>
              <p className="text-lg text-brand-dark-text/80">
                We utilize advanced technology and specialized techniques to save your natural teeth and ensure your
                comfort.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Root Canal Therapy", icon: <BriefcaseMedical size={28} /> },
                { title: "Apicoectomy", icon: <ShieldCheck size={28} /> },
                { title: "Root Canal Retreatment", icon: <HeartHandshake size={28} /> },
                { title: "Dental Emergencies", icon: <AlertTriangle size={28} /> },
              ].map((service) => (
                <div key={service.title} className="text-center p-4">
                  <div className="flex justify-center items-center mb-4 mx-auto h-16 w-16 rounded-full bg-brand-cream">
                    <span className="text-brand-merlot">{service.icon}</span>
                  </div>
                  <h3 className="font-serif text-xl text-brand-dark-text">{service.title}</h3>
                </div>
              ))}
            </div>
          </FadeInSection>
        </section>

        {/* Patient Portal CTA Section */}
        <section className="py-16 md:py-20 bg-brand-cream">
          <FadeInSection className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-white/80 border-brand-merlot/20 shadow-xl">
                <CardContent className="p-8 md:p-12 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="bg-brand-merlot/10 p-4 rounded-full">
                      <ExternalLink className="w-12 h-12 text-brand-merlot" />
                    </div>
                  </div>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-merlot mb-4">
                    Complete Your Forms Before Your Visit
                  </h2>
                  <p className="text-lg text-brand-dark-text/80 mb-8 max-w-2xl mx-auto">
                    Save time and streamline your appointment by completing your patient forms online through our secure portal. 
                    It's quick, convenient, and HIPAA compliant.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button 
                      size="lg" 
                      className="bg-brand-merlot text-brand-cream hover:bg-brand-merlot/90 px-8 py-3"
                      asChild
                    >
                      <a 
                        href="https://winecountryrootcanal.dentalsymphony.com/Patient/NewPatient.aspx" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Access Patient Portal
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="border-brand-merlot text-brand-merlot hover:bg-brand-merlot hover:text-brand-cream px-8 py-3"
                      asChild
                    >
                      <Link href="/forms">
                        Learn More About Forms
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </FadeInSection>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 md:py-20 lg:py-32 bg-brand-cream">
          <FadeInSection className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-merlot mb-4">From Our Patients</h2>
              <p className="text-lg text-brand-dark-text/80">
                Hear from those who&apos;ve experienced our care firsthand.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Sharon",
                  quote:
                    "Highly Recommend! Let's be honest, no one is ever thrilled about getting a root canal. But, Dr Anderson and his staff made it a breeze! I felt completely comfortable and well taken care of.",
                },
                {
                  name: "Sita Z.",
                  quote:
                    "From the first phone call to days after my root canal, all I can describe is a wonderful experience. Dr Anderson personally calling me the following day was an especially great personal touch.",
                },
                {
                  name: "Lizandro R.",
                  quote:
                    "They are the best! I had an awful tooth infection... they were able to fit me in first thing in the morning the very next day. They made sure I was comfortable and had no discomfort during the whole procedure.",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="bg-white shadow-md border-t-4 border-brand-rose-beige rounded-sm">
                  <CardContent className="pt-8">
                    <Quote className="w-8 h-8 text-brand-rose-beige/50 mb-4" />
                    <p className="text-brand-dark-text/90 mb-6 italic">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <p className="font-semibold text-brand-dark-text">{testimonial.name}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-12 md:mt-16 text-center">
              <Button
                asChild
                size="lg"
                className="bg-transparent border border-brand-merlot text-brand-merlot hover:bg-brand-merlot hover:text-brand-cream transition-colors duration-300 ease-in-out px-8 py-3 text-base font-semibold shadow-sm"
              >
                <Link href="/testimonials">View More Testimonials</Link>
              </Button>
            </div>
          </FadeInSection>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-20 lg:py-32 bg-white">
          <FadeInSection className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-merlot mb-4">
                Schedule Your Appointment
              </h2>
              <p className="text-lg text-brand-dark-text/80">
                We encourage you to contact us with any questions. Please call our office or use the form below.
              </p>
            </div>
            <div className="grid lg:grid-cols-5 gap-12">
              <div className="lg:col-span-3">
                <Card className="bg-brand-cream p-6 sm:p-8 md:p-10 rounded-sm border-none shadow-lg">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-brand-dark-text mb-2">
                          Name
                        </label>
                        <Input id="name" name="name" required className="bg-white" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-brand-dark-text mb-2">
                          Email
                        </label>
                        <Input id="email" name="email" type="email" required className="bg-white" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-brand-dark-text mb-2">
                        Message
                      </label>
                      <Textarea id="message" name="message" rows={5} required className="bg-white" />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-brand-merlot text-brand-cream hover:bg-opacity-90 py-3 text-base"
                    >
                      Send Message
                    </Button>
                  </form>
                </Card>
              </div>
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-brand-cream p-6 rounded-sm shadow-lg">
                  <h3 className="font-serif text-xl text-brand-merlot mb-4">Contact Details</h3>
                  <div className="space-y-3 text-brand-dark-text/90">
                    <p className="flex items-start">
                      <MapPin className="w-5 h-5 mr-3 mt-1 text-brand-rose-beige shrink-0" />
                      <span>
                        4655 Hoen Ave Ste 2<br />
                        Santa Rosa, CA 95405
                      </span>
                    </p>
                    <p className="flex items-center">
                      <Phone className="w-5 h-5 mr-3 text-brand-rose-beige shrink-0" />
                      <a href="tel:+17075233636" className="hover:underline">
                        (707) 523-3636
                      </a>
                    </p>
                  </div>
                </div>
                <div className="bg-brand-cream p-6 rounded-sm shadow-lg">
                  <h3 className="font-serif text-xl text-brand-merlot mb-4">Office Hours</h3>
                  <ul className="space-y-1 text-brand-dark-text/90">
                    <li>Monday - Thursday: 8 AM - 5 PM</li>
                    <li>Friday: 8 AM - 2 PM</li>
                  </ul>
                </div>
              </div>
            </div>
          </FadeInSection>
        </section>
      </main>
      <Footer />
    </div>
  )
}
