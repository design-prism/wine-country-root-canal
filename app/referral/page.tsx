"use client"

import React from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { PageShell } from "@/components/page-shell"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, Clock, Send } from "lucide-react"
import { FadeInSection } from "@/components/fade-in-section"

export default function ReferralPage() {

  return (
    <>
      <Navbar />
      <PageShell
        title="Make a Patient Referral"
        description="Submit patient referrals quickly and securely through our online form. We'll contact your patient within 24-48 hours."
      >
        <div className="container mx-auto px-4 md:px-6">
          {/* Main Form Section */}
          <FadeInSection className="mb-12">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-white/90 border-brand-merlot/20 shadow-xl">
                <CardContent className="p-6 md:p-8">
                  <div className="text-center mb-8">
                    <div className="flex justify-center mb-4">
                      <div className="bg-brand-merlot/10 p-4 rounded-full">
                        <Send className="w-10 h-10 text-brand-merlot" />
                      </div>
                    </div>
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-merlot mb-3">
                      Online Referral Form
                    </h2>
                    <p className="text-lg text-brand-dark-text/80 max-w-2xl mx-auto">
                      Please complete the form below with your patient's information. All fields marked with an asterisk (*) are required.
                    </p>
                  </div>

                  {/* JotForm iFrame Container */}
                  <div className="jotform-container">
                    <iframe
                      src="https://form.jotform.com/251807740544054"
                      title="Patient Referral Form - Wine Country Root Canal"
                      width="100%"
                      height="600"
                      frameBorder="0"
                      marginHeight={0}
                      marginWidth={0}
                      scrolling="auto"
                      allowTransparency="true"
                      allow="geolocation; microphone; camera"
                      style={{
                        minWidth: '100%',
                        maxWidth: '100%',
                        border: 'none',
                        background: 'transparent'
                      }}
                    >
                      Loading Patient Referral Form...
                    </iframe>
                  </div>
                </CardContent>
              </Card>
            </div>
          </FadeInSection>

          {/* Support Information */}
          <FadeInSection>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="bg-brand-cream/50 border-brand-rose-beige/30">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl text-brand-merlot mb-4 flex items-center">
                    <Clock className="w-6 h-6 mr-3 text-brand-rose-beige" />
                    Response Time
                  </h3>
                  <p className="text-brand-dark-text/80 mb-3">
                    We typically contact referred patients within <strong>24-48 hours</strong> to schedule their appointment.
                  </p>
                  <p className="text-brand-dark-text/70 text-sm">
                    For urgent cases requiring immediate attention, please call our office directly.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-brand-cream/50 border-brand-rose-beige/30">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl text-brand-merlot mb-4 flex items-center">
                    <Phone className="w-6 h-6 mr-3 text-brand-rose-beige" />
                    Need Help?
                  </h3>
                  <div className="space-y-2 text-brand-dark-text/80">
                    <p className="flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-brand-rose-beige" />
                      <a href="tel:+17075233636" className="hover:underline">
                        (707) 523-3636
                      </a>
                    </p>
                    <p className="flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-brand-rose-beige" />
                      <a href="mailto:winecountryrootcanal@gmail.com" className="hover:underline text-sm">
                        winecountryrootcanal@gmail.com
                      </a>
                    </p>
                  </div>
                  <p className="text-brand-dark-text/70 text-sm mt-3">
                    Questions about the referral process? Contact us anytime.
                  </p>
                </CardContent>
              </Card>
            </div>
          </FadeInSection>

          {/* Alternative Methods */}
          <FadeInSection className="text-center mt-12">
            <div className="max-w-2xl mx-auto">
              <h3 className="font-serif text-xl text-brand-merlot mb-4">Alternative Referral Methods</h3>
              <p className="text-brand-dark-text/70 mb-6">
                If you prefer traditional methods, you can also submit referrals via:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 text-sm text-brand-dark-text/80">
                <div className="bg-white/70 p-4 rounded-sm border border-brand-rose-beige/20">
                  <strong>Fax:</strong> (707) 555-1235
                </div>
                <div className="bg-white/70 p-4 rounded-sm border border-brand-rose-beige/20">
                  <strong>Email:</strong> winecountryrootcanal@gmail.com
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </PageShell>
      <Footer />

      <style jsx>{`
        .jotform-container {
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
          position: relative;
          overflow: hidden;
          border-radius: 8px;
        }

        .jotform-container iframe {
          width: 100% !important;
          height: 600px;
          border: none !important;
          margin: 0 auto;
          background: transparent;
          display: block;
        }

        /* Mobile responsive adjustments */
        @media (max-width: 768px) {
          .jotform-container iframe {
            height: 800px;
          }
        }

        /* Tablet adjustments */
        @media (min-width: 769px) and (max-width: 1024px) {
          .jotform-container iframe {
            height: 700px;
          }
        }

        /* Ensure proper loading appearance */
        .jotform-container {
          background: #f8f9fa;
          border: 1px solid rgba(139, 69, 19, 0.1);
        }
      `}</style>
    </>
  )
}