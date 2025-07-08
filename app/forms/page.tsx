import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { PageShell } from "@/components/page-shell"
import { Button } from "@/components/ui/button"
import { FileText, Download } from "lucide-react"
import { FadeInSection } from "@/components/fade-in-section"

export default function OnlineFormsPage() {
  return (
    <>
      <Navbar />
      <PageShell title="New Patient Forms" description="Save time by completing your forms before your appointment.">
        <FadeInSection className="container mx-auto px-4 md:px-6 text-center">
          <FileText className="w-16 h-16 text-brand-merlot mx-auto mb-6" />
          <p className="text-xl text-brand-dark-text/80 mb-8 max-w-2xl mx-auto">
            To expedite your check-in process and make your first visit as smooth as possible, we encourage you to
            download and complete our new patient forms prior to your appointment.
          </p>
          <div className="space-y-4 max-w-md mx-auto">
            <Button size="lg" className="w-full bg-brand-merlot text-brand-cream hover:bg-brand-merlot/90" asChild>
              <a href="/placeholder-new-patient-form.pdf" download>
                <Download className="w-5 h-5 mr-2" /> Download New Patient PDF
              </a>
            </Button>
            {/* Placeholder for future online form link */}
            {/* <Button size="lg" variant="outline" className="w-full border-brand-merlot text-brand-merlot hover:bg-brand-merlot hover:text-brand-cream" disabled>
              <Edit3 className="w-5 h-5 mr-2" /> Fill Out Online Form (Coming Soon)
            </Button> */}
          </div>
          <p className="mt-8 text-brand-dark-text/70">
            Please bring the completed forms with you to your appointment. If you have any questions while filling them
            out, don't hesitate to contact our office.
          </p>
        </FadeInSection>
      </PageShell>
      <Footer />
    </>
  )
}
