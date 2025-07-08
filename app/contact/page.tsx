"use client"

import type React from "react"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { PageShell } from "@/components/page-shell"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { FadeInSection } from "@/components/fade-in-section"

export default function ContactPage() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    alert("Form submitted! (This is a placeholder)")
  }

  return (
    <>
      <Navbar />
      <PageShell
        title="Get In Touch"
        description="We're here to answer your questions and help you schedule an appointment."
      >
        <div className="container mx-auto px-4 md:px-6">
          <FadeInSection className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Contact Info & Hours */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-2xl text-brand-merlot mb-4">Contact Information</h2>
                <div className="space-y-3 text-lg text-brand-dark-text/90">
                  <p className="flex items-start">
                    <MapPin className="w-6 h-6 mr-3 mt-1 text-brand-rose-beige shrink-0" />
                    <span>
                      Wine Country Root Canal
                      <br />
                      4655 Hoen Ave Ste 2<br />
                      Santa Rosa, CA 95405
                    </span>
                  </p>
                  <p className="flex items-center">
                    <Phone className="w-6 h-6 mr-3 text-brand-rose-beige shrink-0" />
                    <a href="tel:+17075233636" className="hover:underline">
                      (707) 523-3636
                    </a>
                  </p>
                  <p className="flex items-center">
                    <Mail className="w-6 h-6 mr-3 text-brand-rose-beige shrink-0" />
                    <a href="mailto:winecountryrootcanal@gmail.com" className="hover:underline break-all">
                      winecountryrootcanal@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div>
                <h2 className="font-serif text-2xl text-brand-merlot mb-4">Office Hours</h2>
                <ul className="space-y-1 text-lg text-brand-dark-text/90">
                  <li className="flex items-center">
                    <Clock className="w-5 h-5 mr-3 text-brand-rose-beige shrink-0" />
                    Monday - Thursday: 8:00 AM - 5:00 PM
                  </li>
                  <li className="flex items-center">
                    <Clock className="w-5 h-5 mr-3 text-brand-rose-beige shrink-0" />
                    Friday: 8:00 AM - 2:00 PM (By appointment)
                  </li>
                  <li className="flex items-center">
                    <Clock className="w-5 h-5 mr-3 text-brand-rose-beige shrink-0" />
                    Saturday - Sunday: Closed
                  </li>
                </ul>
              </div>
              {/* Embedded Map */}
              <div className="rounded-sm overflow-hidden shadow-lg h-80 md:h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3040.600991818701!2d-122.6600099846068!3d38.45000917964181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8084378555555555%3A0x8a4a7a6e1f8f8f8a!2s4655%20Hoen%20Ave%20%232%2C%20Santa%20Rosa%2C%2C%20CA%2095405!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  className="border-0"
                  allowFullScreen={false}
                  loading="lazy"
                  title="Google Map of Wine Country Root Canal location"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-2xl text-brand-merlot mb-6">Send Us a Message</h2>
              <Card className="bg-white p-8 md:p-10 rounded-sm shadow-xl border-t-4 border-brand-merlot">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-brand-dark-text mb-2">
                      Full Name
                    </label>
                    <Input id="name" name="name" placeholder="Your Name" required className="bg-brand-cream/50" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-brand-dark-text mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                      className="bg-brand-cream/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-brand-dark-text mb-2">
                      Phone Number (Optional)
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(707) 555-1234"
                      className="bg-brand-cream/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-brand-dark-text mb-2">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="How can we help you?"
                      required
                      className="bg-brand-cream/50"
                    />
                    <p className="text-xs text-brand-dark-text/70 mt-1">
                      (Messages sent using this form are not considered private. Avoid sending confidential
                      information.)
                    </p>
                  </div>
                  <Button type="submit" variant="brand-primary" className="w-full py-3 text-base">
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </FadeInSection>
        </div>
      </PageShell>
      <Footer />
    </>
  )
}
