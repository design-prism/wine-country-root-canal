import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { PageShell } from "@/components/page-shell"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { AlertTriangle, HelpCircle, DollarSign, Smile } from "lucide-react"
import { FadeInSection } from "@/components/fade-in-section"
import Link from "next/link"
import Image from "next/image" // Added import

export default function RootCanalTherapyPage() {
  const faqItems = [
    {
      question: "Is root canal therapy painful?",
      answer:
        "With modern techniques and anesthetics, most patients report that having a root canal is as comfortable as getting a filling. Your comfort is our top priority.",
    },
    {
      question: "How long does the procedure take?",
      answer:
        "Most root canal treatments can be completed in one or two appointments, depending on the complexity of the case. Each appointment typically lasts between 60 to 90 minutes.",
    },
    {
      question: "What is the recovery like?",
      answer:
        "You may experience some mild discomfort or sensitivity for a few days, which can usually be managed with over-the-counter pain medication. Most patients return to their normal activities the next day.",
    },
    {
      question: "Will I need a crown after the root canal?",
      answer:
        "Often, a tooth that has had a root canal will require a crown to protect it from fracture and restore its full function. Dr. Anderson will discuss the best long-term solution for your tooth.",
    },
  ]

  return (
    <>
      <Navbar />
      <PageShell
        title="Root Canal Therapy"
        description="Gentle, effective treatment to relieve pain and save your natural tooth."
        heroImageUrl="/placeholder.svg?width=1200&height=400"
      >
        <div className="container mx-auto px-4 md:px-6 space-y-16 md:space-y-24">
          {/* Symptoms Section */}
          <FadeInSection className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl text-brand-merlot mb-4">Signs You Might Need a Root Canal</h2>
              <p className="text-lg text-brand-dark-text/80 mb-6">
                If you're experiencing any of these symptoms, it's important to see an endodontist. Early intervention
                can save your tooth and prevent further complications.
              </p>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-brand-rose-beige mr-3 mt-1 shrink-0" /> Persistent tooth pain
                  or throbbing
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-brand-rose-beige mr-3 mt-1 shrink-0" /> Sensitivity to hot or
                  cold temperatures
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-brand-rose-beige mr-3 mt-1 shrink-0" /> Swelling or tenderness
                  in the nearby gums
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-brand-rose-beige mr-3 mt-1 shrink-0" /> A discolored tooth
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-brand-rose-beige mr-3 mt-1 shrink-0" /> A pimple-like bump on
                  the gums
                </li>
              </ul>
            </div>
            <div className="rounded-sm overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?width=600&height=400"
                alt="Illustration of tooth pain symptoms"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </FadeInSection>

          {/* What to Expect Section */}
          <FadeInSection className="bg-white p-8 md:p-12 rounded-sm shadow-xl">
            <h2 className="font-serif text-3xl text-brand-merlot mb-6 text-center">
              The Root Canal Procedure: Step-by-Step
            </h2>
            <ol className="space-y-6">
              {[
                {
                  step: "Consultation & X-rays:",
                  description:
                    "Dr. Anderson will examine your tooth, take X-rays, and discuss your symptoms to determine if a root canal is necessary.",
                },
                {
                  step: "Anesthesia:",
                  description:
                    "Local anesthesia is administered to numb the tooth and surrounding area, ensuring a pain-free experience.",
                },
                {
                  step: "Accessing the Pulp:",
                  description:
                    "A small opening is made in the crown of the tooth to access the infected or inflamed pulp.",
                },
                {
                  step: "Cleaning & Shaping:",
                  description:
                    "The damaged pulp is removed, and the root canals are carefully cleaned, disinfected, and shaped.",
                },
                {
                  step: "Filling the Canals:",
                  description:
                    "The cleaned canals are filled with a biocompatible material, usually gutta-percha, to seal them.",
                },
                {
                  step: "Restoration:",
                  description:
                    "A temporary filling is placed. You'll typically need a permanent filling or crown to protect the tooth and restore its function.",
                },
              ].map((item, index) => (
                <li key={index} className="flex">
                  <div className="flex-shrink-0 w-10 h-10 bg-brand-rose-beige text-white rounded-full flex items-center justify-center font-semibold mr-4">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-brand-dark-text">{item.step}</h3>
                    <p className="text-brand-dark-text/80">{item.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </FadeInSection>

          {/* Pain-Free Promise & Cost/Insurance */}
          <FadeInSection className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-brand-cream p-6 md:p-8 rounded-sm shadow-lg">
              <Smile className="w-10 h-10 text-brand-merlot mb-3" />
              <h3 className="font-serif text-2xl text-brand-merlot mb-3">Our Pain-Free Promise</h3>
              <p className="text-brand-dark-text/80">
                We understand dental anxiety. Dr. Anderson and our team are committed to providing a comfortable,
                stress-free experience. We use advanced techniques and local anesthesia to ensure your root canal
                treatment is as painless as possible.
              </p>
            </div>
            <div className="bg-brand-cream p-6 md:p-8 rounded-sm shadow-lg">
              <DollarSign className="w-10 h-10 text-brand-merlot mb-3" />
              <h3 className="font-serif text-2xl text-brand-merlot mb-3">Cost & Insurance</h3>
              <p className="text-brand-dark-text/80 mb-2">
                The cost of root canal therapy can vary. We will provide a clear estimate before treatment.
              </p>
              <p className="text-brand-dark-text/80">
                We accept most major dental insurance plans and will work with you to maximize your benefits. Financing
                options may also be available.
              </p>
            </div>
          </FadeInSection>

          {/* FAQ Accordion */}
          <FadeInSection>
            <h2 className="font-serif text-3xl text-brand-merlot mb-6 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto bg-white p-4 rounded-sm shadow-lg">
              {faqItems.map((item, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="text-left hover:no-underline">
                    <div className="flex items-center text-lg">
                      <HelpCircle className="w-5 h-5 mr-3 text-brand-rose-beige shrink-0" /> {item.question}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-brand-dark-text/80 pt-2 pb-4 px-2">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeInSection>

          {/* Book Now CTA */}
          <FadeInSection className="text-center py-12">
            <h2 className="font-serif text-3xl text-brand-merlot mb-4">Ready to Find Relief?</h2>
            <p className="text-xl text-brand-dark-text/80 mb-8 max-w-xl mx-auto">
              Don't let tooth pain control your life. Schedule your consultation today for expert root canal therapy.
            </p>
            <Button
              size="lg"
              className="bg-brand-merlot text-brand-cream hover:bg-brand-merlot/90 px-10 py-3 text-lg"
              asChild
            >
              <Link href="/contact">Book Your Appointment</Link>
            </Button>
          </FadeInSection>
        </div>
      </PageShell>
      <Footer />
    </>
  )
}
