"use client"

import React, { useEffect } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { PageShell } from "@/components/page-shell"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, Clock, FileText, Send } from "lucide-react"
import { FadeInSection } from "@/components/fade-in-section"

export default function ReferralPage() {
  useEffect(() => {
    // Load JotForm script dynamically
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = 'https://form.jotform.com/jsform/251807740544054'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

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

                  {/* JotForm Container */}
                  <div className="jotform-container">
                    <div id="jotform-251807740544054" className="jotform-form">
                      {/* JotForm will be inserted here via the script */}
                      <div className="text-center py-8 text-brand-dark-text/60">
                        <FileText className="w-8 h-8 mx-auto mb-2" />
                        <p>Loading referral form...</p>
                      </div>
                    </div>
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
        }

        .jotform-container iframe {
          width: 100% !important;
          min-height: 600px;
          border: none !important;
          margin: 0 auto;
          background: transparent;
        }

        /* Mobile responsive adjustments */
        @media (max-width: 768px) {
          .jotform-container {
            padding: 0;
            margin: 0;
          }
          
          .jotform-container iframe {
            min-height: 800px;
          }
        }

        /* Remove any default JotForm margins/padding that might cause horizontal scroll */
        :global(.form-all) {
          margin: 0 auto !important;
          padding: 0 !important;
          max-width: 100% !important;
        }

        :global(.form-line) {
          padding-left: 10px !important;
          padding-right: 10px !important;
        }

        /* Ensure form elements don't overflow on small screens */
        @media (max-width: 480px) {
          :global(.form-textbox),
          :global(.form-dropdown),
          :global(.form-textarea) {
            max-width: 100% !important;
            box-sizing: border-box !important;
          }
        }
      `}</style>
    </>
  )
}