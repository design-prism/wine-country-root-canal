import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { PageShell } from "@/components/page-shell"
import Image from "next/image"
import { BookOpen, Users, Heart } from "lucide-react"
import { FadeInSection } from "@/components/fade-in-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { MinimalistVimeoPlayer } from "@/components/minimalist-vimeo-player"

export default function AboutPage() {
  const professionalMemberships = [
    "American Dental Association",
    "American Association Of Endodontists",
    "California State Association Of Endodontists",
    "Board Member for Redwood Dental Society",
  ]

  return (
    <>
      <Navbar />
      <PageShell
        title="Meet Dr. Craig Anderson"
        description="Your experienced and compassionate endodontist in Santa Rosa."
      >
        <div className="container mx-auto px-4 md:px-6 space-y-16 md:space-y-24">
          {/* Introduction Section */}
          <FadeInSection className="grid md:grid-cols-3 gap-8 lg:gap-12 items-start">
            <div className="md:col-span-1 rounded-sm overflow-hidden shadow-lg sticky top-28">
              <Image
                src="/images/dr-craig-anderson.jpg"
                alt="Dr. Craig Anderson, Endodontist"
                width={400}
                height={500}
                className="w-full h-auto object-cover object-top" // Added object-top to better frame the headshot
                priority // Add priority as this is likely an important image for LCP on this page
              />
            </div>
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="font-serif text-3xl text-brand-merlot mb-6">A Philosophy of Care</h2>
                <div className="text-lg text-brand-dark-text/80 space-y-4">
                  <p>
                    Excellence in dentistry begins with a careful diagnosis and treatment plan to establish the goals we
                    will achieve together. Communication and long-term relationships are important to us. Let us know
                    what is on your mind and ask questions. We will help you realize an investment in yourself pays
                    dividends for a lifetime. We are caring, skilled professionals, dedicated to simplifying what is
                    often a very complicated and confusing area of health care.
                  </p>
                  <p>
                    We want all our patients to be informed and knowledgeable about their dental health care, from
                    treatment plans and services, to insurance coverage.
                  </p>
                </div>
              </div>
              <div>
                <h2 className="font-serif text-3xl text-brand-merlot mb-6">My Journey to Endodontics</h2>
                <div className="text-lg text-brand-dark-text/80 space-y-4">
                  <p>
                    I decided to become a dentist because I enjoy working with people, I love science and the results
                    are immediate and gratifying. I have been practicing dentistry since 1997. In 2003, I went back to
                    school to specialize in endodontics. I have been specializing solely in endodontics since 2005. This
                    practice is truly my life’s work and is the culmination of decades of hard work and a distinct
                    vision. It is a privilege to be practicing as an endodontist and I challenge myself every day to
                    improve my services and patient care any way I can.
                  </p>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* Education & Memberships Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education Section */}
            <FadeInSection>
              <Card className="h-full bg-white shadow-xl border-t-4 border-brand-rose-beige">
                <CardHeader className="flex-row items-center gap-4">
                  <BookOpen className="w-10 h-10 text-brand-merlot shrink-0" />
                  <CardTitle className="font-serif text-2xl text-brand-merlot">
                    Education & Continuing Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-brand-dark-text/80 space-y-4">
                  <p>
                    Before becoming an endodontist, I attended University of Southern California for my undergraduate
                    education as well as for dental school. After graduation, I completed my General Practice Residency
                    at Rancho Los Amigos Medical Center. I practiced general dentistry for five years before
                    specializing in endodontics at University of Southern California.
                  </p>
                  <p>
                    I am always searching for better, higher quality endodontic treatments for my patients. I love
                    learning about new technologies and approaches to my work, and how these may benefit those who come
                    see me. I enjoy lecturing on endodontics to ensure emerging dentists have the most comprehensive
                    education.
                  </p>
                  <p>
                    I believe in having well-rounded knowledge of all aspects of dentistry, and not just an
                    understanding of root canals. I frequently attend many continuing education courses in all aspects
                    of dentistry. I have found that this is of paramount importance when it comes to my patients dental
                    health, diagnoses, and treatment of complex cases.
                  </p>
                </CardContent>
              </Card>
            </FadeInSection>

            <div className="space-y-12">
              {/* Professional Memberships Section */}
              <FadeInSection>
                <Card className="bg-white shadow-xl border-t-4 border-brand-rose-beige">
                  <CardHeader className="flex-row items-center gap-4">
                    <Users className="w-10 h-10 text-brand-merlot shrink-0" />
                    <CardTitle className="font-serif text-2xl text-brand-merlot">Professional Memberships</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-brand-dark-text/80 list-disc pl-5">
                      {professionalMemberships.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </FadeInSection>

              {/* Outside the Office Section */}
              <FadeInSection>
                <Card className="bg-white shadow-xl border-t-4 border-brand-rose-beige">
                  <CardHeader className="flex-row items-center gap-4">
                    <Heart className="w-10 h-10 text-brand-merlot shrink-0" />
                    <CardTitle className="font-serif text-2xl text-brand-merlot">Outside the Office</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-brand-dark-text/80">
                      My twin boys make for a very busy family life. If there is an unusual free moment then I enjoy
                      listening to music, reading, and going to museums.
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
            </div>
          </div>
          {/* Video Introductions */}
          <FadeInSection>
            <h2 className="font-serif text-3xl text-brand-merlot mb-6 text-center">Learn More</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <MinimalistVimeoPlayer
                videoId="1095465301"
                title="Post Root Canal Treatment Symptoms and Feelings"
              />
              <MinimalistVimeoPlayer
                videoId="1095465278"
                title="What is a Root Canal"
              />
            </div>
          </FadeInSection>
        </div>
      </PageShell>
      <Footer />
    </>
  )
}
