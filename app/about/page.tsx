import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { PageShell } from "@/components/page-shell"
import Image from "next/image"
import { Award, Smile } from "lucide-react"
import { FadeInSection } from "@/components/fade-in-section"

export default function AboutPage() {
  const credentials = [
    { year: "1997", event: "Graduated from [Dental School Name]" },
    { year: "2003", event: "Completed Endodontic Residency at [Institution Name]" },
    { year: "2005", event: "Member of the American Association of Endodontists (AAE)" },
    { year: "Current", event: "Dedicated to ongoing continuing education in advanced endodontics" },
  ]

  return (
    <>
      <Navbar />
      <PageShell
        title="Meet Dr. Craig Wm. Anderson"
        description="Your experienced and compassionate endodontist in Santa Rosa."
      >
        <div className="container mx-auto px-4 md:px-6 space-y-16 md:space-y-24">
          <FadeInSection className="grid md:grid-cols-3 gap-8 lg:gap-12 items-center">
            <div className="md:col-span-1 rounded-sm overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?width=400&height=500"
                alt="Dr. Craig Wm. Anderson"
                width={400}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="md:col-span-2">
              <h2 className="font-serif text-3xl text-brand-merlot mb-6">
                A Commitment to Excellence and Patient Comfort
              </h2>
              <p className="text-lg text-brand-dark-text/80 mb-4">
                Dr. Craig Wm. Anderson has been dedicated to providing specialized dental care since 1997. With a focus
                on endodontics, he combines extensive experience with a genuine passion for helping patients achieve
                optimal dental health and relief from pain.
              </p>
              <p className="text-lg text-brand-dark-text/80 mb-6">
                "My philosophy is centered on providing the highest standard of care in a comfortable and reassuring
                environment. I believe in clear communication, ensuring patients understand their treatment options and
                feel confident in the care they receive. Saving natural teeth and restoring smiles is incredibly
                rewarding."
              </p>
              <div className="bg-brand-cream p-6 rounded-sm shadow-md">
                <Smile className="w-10 h-10 text-brand-merlot mb-3" />
                <p className="font-serif text-2xl text-brand-merlot">Over 2,300+ Pain-Free Cases Completed</p>
                <p className="text-brand-dark-text/70">Bringing relief and restoring smiles with expert care.</p>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection className="bg-white p-8 md:p-12 rounded-sm shadow-xl">
            <h2 className="font-serif text-3xl text-brand-merlot mb-8 text-center">
              Credentials & Professional Journey
            </h2>
            <div className="relative pl-8">
              {/* Timeline Line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-rose-beige/30 rounded-full ml-[calc(0.375rem-0.5px)]"></div>
              {credentials.map((item, index) => (
                <div key={index} className="mb-8 relative">
                  <div className="absolute -left-[calc(0.75rem+4px)] top-1 w-4 h-4 bg-brand-rose-beige rounded-full border-2 border-white"></div>
                  <p className="font-semibold text-brand-dark-text text-lg mb-1">{item.year}</p>
                  <p className="text-brand-dark-text/80">{item.event}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Award className="w-10 h-10 text-brand-merlot mx-auto mb-2" />
              <p className="text-lg text-brand-dark-text/80">
                Dr. Anderson is an active member of the American Association of Endodontists, American Dental
                Association, and the California Dental Association.
              </p>
            </div>
          </FadeInSection>
        </div>
      </PageShell>
      <Footer />
    </>
  )
}
