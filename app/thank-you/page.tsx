import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { PageShell } from "@/components/page-shell"
import { CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ThankYouPage() {
  return (
    <>
      <Navbar />
      <PageShell title="" hideTitleSection={true}>
        {" "}
        {/* Title can be empty or set, but hidden */}
        <div className="container mx-auto px-4 md:px-6 text-center py-20 md:py-32">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-8" />
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-merlot mb-4">Thank You!</h1>
          <p className="text-xl text-brand-dark-text/80 mb-10 max-w-xl mx-auto">
            Your submission has been received. We will get back to you as soon as possible.
          </p>
          <Button size="lg" className="bg-brand-merlot text-brand-cream hover:bg-brand-merlot/90" asChild>
            <Link href="/">Return to Homepage</Link>
          </Button>
        </div>
      </PageShell>
      <Footer />
    </>
  )
}
