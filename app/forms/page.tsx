import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { PageShell } from "@/components/page-shell"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Shield, Clock, CheckCircle, FileText, Download } from "lucide-react"
import { FadeInSection } from "@/components/fade-in-section"

export default function OnlineFormsPage() {
  return (
    <>
      <Navbar />
      <PageShell title="Patient Portal & Forms" description="Complete your patient forms online through our secure portal - save time and streamline your visit.">
        <div className="container mx-auto px-4 md:px-6">
          {/* Main Portal Access Section */}
          <FadeInSection className="text-center mb-12">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl text-brand-merlot mb-6">
                Complete Your Forms Online
              </h2>
              <p className="text-xl text-brand-dark-text/80 mb-8">
                Save time at your appointment by completing your patient forms from the comfort of your home. 
                Our secure online portal makes the process quick and convenient.
              </p>
              
              {/* Primary CTA Button */}
              <div className="mb-8">
                <Button 
                  size="lg" 
                  className="bg-brand-merlot text-brand-cream hover:bg-brand-merlot/90 text-lg px-8 py-4 h-auto"
                  asChild
                >
                  <a 
                    href="https://winecountryrootcanal.dentalsymphony.com/Patient/NewPatient.aspx" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Access Patient Portal
                  </a>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center justify-center gap-6 text-sm text-brand-dark-text/70">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-brand-rose-beige" />
                  <span>HIPAA Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-brand-rose-beige" />
                  <span>Secure & Private</span>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* Benefits Section */}
          <FadeInSection className="mb-12">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-white/70 border-brand-rose-beige/30">
                <CardContent className="p-6 text-center">
                  <Clock className="w-12 h-12 text-brand-merlot mx-auto mb-4" />
                  <h3 className="font-serif text-xl text-brand-merlot mb-2">Save Time</h3>
                  <p className="text-brand-dark-text/80">
                    Complete forms at your convenience and reduce waiting time at your appointment.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/70 border-brand-rose-beige/30">
                <CardContent className="p-6 text-center">
                  <Shield className="w-12 h-12 text-brand-merlot mx-auto mb-4" />
                  <h3 className="font-serif text-xl text-brand-merlot mb-2">Secure Portal</h3>
                  <p className="text-brand-dark-text/80">
                    Your personal information is protected with bank-level security and HIPAA compliance.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/70 border-brand-rose-beige/30">
                <CardContent className="p-6 text-center">
                  <CheckCircle className="w-12 h-12 text-brand-merlot mx-auto mb-4" />
                  <h3 className="font-serif text-xl text-brand-merlot mb-2">Automatically Synced</h3>
                  <p className="text-brand-dark-text/80">
                    Forms are instantly available to our team, ensuring seamless care coordination.
                  </p>
                </CardContent>
              </Card>
            </div>
          </FadeInSection>

          {/* Simple Process Steps */}
          <FadeInSection className="mb-12">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="font-serif text-2xl text-brand-merlot mb-8">How It Works</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-merlot text-brand-cream rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm shrink-0">
                    1
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-brand-dark-text mb-1">Click "Access Patient Portal"</h4>
                    <p className="text-brand-dark-text/70">The button above will take you to our secure patient portal.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-brand-merlot text-brand-cream rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm shrink-0">
                    2
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-brand-dark-text mb-1">Create Account or Log In</h4>
                    <p className="text-brand-dark-text/70">First-time users can easily create a new account with basic information.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-brand-merlot text-brand-cream rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm shrink-0">
                    3
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-brand-dark-text mb-1">Complete Required Forms</h4>
                    <p className="text-brand-dark-text/70">Fill out your medical history, insurance information, and consent forms.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-brand-merlot text-brand-cream rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm shrink-0">
                    4
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-brand-dark-text mb-1">Submit & Arrive</h4>
                    <p className="text-brand-dark-text/70">Submit your forms and arrive for a streamlined check-in experience.</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* Alternative Option */}
          <FadeInSection className="text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="font-serif text-xl text-brand-merlot mb-4">Prefer Paper Forms?</h3>
              <p className="text-brand-dark-text/70 mb-6">
                If you prefer to complete forms on paper, you can download and print them to bring to your appointment.
              </p>
              <Button 
                variant="outline" 
                size="lg"
                className="border-brand-merlot text-brand-merlot hover:bg-brand-merlot hover:text-brand-cream"
                asChild
              >
                <a href="/placeholder-new-patient-form.pdf" download>
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF Forms
                </a>
              </Button>
              <p className="text-sm text-brand-dark-text/60 mt-4">
                Please bring completed forms with you to your appointment. For questions, contact our office at{" "}
                <a href="tel:+17075233636" className="text-brand-merlot hover:underline">
                  (707) 523-3636
                </a>
              </p>
            </div>
          </FadeInSection>
        </div>
      </PageShell>
      <Footer />
    </>
  )
}
