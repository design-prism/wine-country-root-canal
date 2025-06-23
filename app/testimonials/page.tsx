"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { PageShell } from "@/components/page-shell"
import { FadeInSection } from "@/components/fade-in-section"
import { Quote, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Testimonial {
  id: number
  quote: string
  name: string
  date?: string
  source?: string
  rating?: number // Optional rating out of 5
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    quote:
      "My recent consult was promptly scheduled and well-arranged. Dr Anderson is a caring and experienced professional. He tailored his exam to my medical history, foregoing what is now routine, a CT scan. He diagnosed my tooth status quickly (unlike 2 previous dentists). His office manager has organized patient/ doctor forms well with preparation serving both patient and office needs. This was an excellent experience for me.",
    name: "Kay White",
    source: "Google Review",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "They are the best! I had an awful tooth infection that needed a root canal, I contacted their office and they were able to fit me in first thing in the morning the very next day. They answered any questions i had prior to the procedure and after the dr and his assistant made sure i was comfortable and had no discomfort during the whole procedure. They even went the extra mile to remove some of the plaque on my tooth and made sure I was very very numb so I wouldn’t feel a thing! I would definitely recommend this office one of the best dentist visits I’ve had ever.",
    name: "Lizandro Reyes",
    source: "Google Review",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "Highly Recommend! Let's be honest, no one is ever thrilled about getting a root canal. But, Dr Anderson and his staff made it a breeze! In spite of having a stubborn tooth that needed extra time and attention, I felt completely comfortable and well taken care of. The office is very clean and up-to-date. The staff is very friendly and welcoming. Dr. Anderson made sure the the treatment was painless and he took time to explain what was going on, and what to expect. If I ever need an endodontist again, this is where I'll be coming!",
    name: "Sharon",
    source: "Google Review",
    rating: 5,
  },
  {
    id: 4,
    quote:
      "From the first phone call to Dr. Anderson's office to days after my root canal, all I can describe is a wonderful experience. The staff was incredibly informative, kind, and friendly. The root canal itself was my third, and by far the easiest, fastest, and least painful. Dr Anderson personally calling me the following day after the procedure was an especially great personal touch that made me feel extremely cared about as a patient. As someone who has been living with Long Covid for over 3 years, I was also especially grateful to the office's commitment to clean, sanitized air. There were UV air filters in every room, including the bathroom. I pray I never need another root canal, but if I do, I know where I will be taking my business: Wine Country Root Canal / Dr Anderson's office!",
    name: "Sita Zarcufsky",
    source: "Google Review",
    rating: 5,
  },
  {
    id: 5,
    quote:
      "I was referred to this office by my dentist after explaining my severe sensitivity to hot/cold temperatures on a specific tooth. After some X-rays and sensitivity tests, I got a root canal done on a SEPARATE tooth.",
    name: "Norzin Phurtag",
    source: "Google Review",
    rating: 5,
  },
  {
    id: 6,
    quote:
      "Dr. Anderson and his team made my root canal experience very pleasant. I feel confident that he performed excellent work on my problem tooth and I felt very safe during the procedure. In the event that I ever need a root canal again, I will be setting an appointment with Dr. Anderson!",
    name: "N. G.",
    source: "Google Review",
    rating: 5,
  },
  {
    id: 7,
    quote:
      "Professional, friendly, competent staff. Checked in with me during procedure to ensure I was doing alright and follow up the next day. Highly recommend Dr. Anderson and his team, Thank you for taking such excellent care of me!",
    name: "Kimberly Johnson",
    source: "Google Review",
    rating: 5,
  },
  {
    id: 8,
    quote:
      "This clinic was a pleasure to work with. Came here for my first root canal and was treated kindly and compassionately. I highly recommend Dr. Anderson.",
    name: "Jessica Mccahon",
    source: "Google Review",
    rating: 5,
  },
  {
    id: 9,
    quote:
      "Wow!!! Going to an Endodontist for a root canal was something I wanted to avoid. Just thinking of the procedure raised my blood pressure. Dr. Anderson calmed me down and after a “few visits”to his office, I was ready to go. The procedure proved painless and easy to endure. Actually it was no big deal!!! A few hours now after the root canal and feeling no residual sensation. This Doctor is really good!!! A skilled, highly competent master of his craft. Shout out to his excellent team. Very efficient and professional staff. Hopefully will never need another root canal, but if I do it’s back to Dr. Anderson.",
    name: "William Grafeld",
    source: "Google Review",
    rating: 5,
  },
  {
    id: 10,
    quote:
      "My experience with Dr Anderson and the staff was superb. They got me in for an appointment within 3 hours and explained the root canal process thoroughly. It was a peaceful environment and I felt like I was in excellent hands. I experienced no pain whatsoever. Highly recommended!",
    name: "Arminée Chahbazian",
    source: "Google Review",
    rating: 5,
  },
  {
    id: 11,
    quote:
      "I came in in pain, and left comfortable. The procedure was painless, the doctor explained everything he was doing in advance, and the staff was friendly and very competent. Having a root canal is not something I look forward to, but this was not an unpleasant experience at all. I highly recommend Wine Country Root Canal if you are in need of one. I’m writing this review eight hours after the procedure and I’m still a pain free happy camper.",
    name: "Gerry Kelsall",
    source: "Google Review",
    rating: 5,
  },
  {
    id: 12,
    quote:
      "Entire office and Dr. Anderson are extremely professional and thorough. They are patient and explain all details and options available to the patient. Highly recommend.",
    name: "Eric Chesky",
    source: "Google Review",
    rating: 5,
  },
  {
    id: 13,
    quote:
      "Professional staff with state of the art equipment. I was referred by my dentist and really appreciated their attention to detail and well-coordinated care.",
    name: "Jonathan Parnell",
    source: "Google Review",
    rating: 5,
  },
  {
    id: 14,
    quote:
      "Dr. Anderson and the entire staff were amazing. I came to the office with a root canal partially done by my family dentist. The referral was exactly what I needed. My tooth anatomy was challenging, and Dr. Anderson came to my rescue. I couldn't recommend him any more highly!",
    name: "Carrie Lukacic",
    source: "Google Review",
    rating: 5,
  },
  {
    id: 15,
    quote: "Amazing! No need to fear a root canal here!! Staff awesome! Dr awesome!",
    name: "Caleb Whitted",
    source: "Google Review",
    rating: 5,
  },
  {
    id: 16,
    quote:
      "Erin, the receptionist is very helpful and friendly and knowledgeable and made me feel important and cared for. Dr Anderson and Suzanne performed the procedure as a tightly coordinated team. They acted like a single person with four hands.",
    name: "Greta Zeit",
    source: "Google Review",
    rating: 5,
  },
  {
    id: 17,
    quote:
      "Friendly staff and Dr was very professional and non judgmental. Was in a lot of pain and my regular dentist office was closed. They took me in right away and addressed my concerns. They were able to help me pinpoint the problem and put my mind at rest that it was not more serious. First impressions are important and they gave me a great comfortable and welcoming feeling. Thank you.",
    name: "Ann Lasley",
    source: "Google Review",
    rating: 5,
  },
  {
    id: 18,
    quote:
      "I had a wonderful experience at Wine Country Root Canal. I can’t believe I describe a root canal as wonderful. Absolutely no pain during the procedure. The staff is very nice and attentive. I really liked how Dr Anderson was so polite.",
    name: "MIKEY",
    source: "Google Review",
    rating: 5,
  },
  {
    id: 19,
    quote: "Thank you to all for your professional service, communication during the procedure, and follow up.",
    name: "adam treiber",
    source: "Google Review",
    rating: 5,
  },
  {
    id: 20,
    quote:
      "Dr. explained to me everything he was going to do in detail. He was very patient and kind and caring along with the staff. Highly recommend this place to anyone.",
    name: "Jesse Martinez",
    source: "Google Review",
    rating: 5,
  },
  {
    id: 21,
    quote:
      "Thoroughly professional from start to finish. Doctor and nurse explained the procedure as it progressed, and other than a tired jaw, it was a pain-free experience. If you have to have a root canal, I can highly recommend Dr. Anderson and his practice.",
    name: "Mora Cronin",
    source: "Google Review",
    rating: 5,
  },
  {
    id: 22,
    quote:
      "Transplanted form SOCAL, Dr. Anderson is obviously a master at his craft. Professional. No ill effects. No pain after two days!",
    name: "Kent Wilson",
    source: "Google Review",
    rating: 5,
  },
  {
    id: 23,
    quote:
      "I found Dr Anderson to be thorough, kind, respectful & honest. I could not recommend a better dental professional.",
    name: "Carla Trotter",
    source: "Google Review",
    rating: 5,
  },
  {
    id: 24,
    quote: "Very courteous and professional, I felt welcomed.",
    name: "Veronica Flores",
    source: "Google Review",
    rating: 5,
  },
  {
    id: 25,
    quote:
      "I was extremely impressed with Dr. Anderson and his thoroughly professional staff. I was particularly impressed with the level of communication from everyone- all of my questions were answered. Thanks for a wonderful experience...",
    name: "Eric Kritz",
    source: "Google Review",
    rating: 5,
  },
  {
    id: 26,
    quote:
      "I had Dr yadegr helping me yesterday and I couldn’t be more thankful for him. I was a last minute add into his schedule and he didn’t rush me or make me feel unwelcome. He took such amazing care of me and I am truly thankful I was referred to him.",
    name: "Madison Capps",
    source: "Google Review",
    rating: 5,
  },
  {
    id: 27,
    quote: "Very very professional. I will travel all the way to Santa Rosa to get his treatment.",
    name: "Ed Edisann",
    source: "Google Review",
    rating: 5,
  },
  {
    id: 28,
    quote:
      "The best dental experience I’ve EVER had. I wish Dr. Yadegar was a General dentist because I’d switch doctors right away.",
    name: "Grisel Buendia",
    source: "Google Review",
    rating: 5,
  },
  {
    id: 29,
    quote:
      "Dr. Joshua Yadegar made sure I was comfortable, pain free and informed before, during and after the procedure. He was confident in the root canal he performed on my tooth. My dentist referred and recommended Dr. Yadegar and was available to.",
    name: "Erika Lee Kline",
    source: "Google Review",
    rating: 5,
  },
  {
    id: 30,
    quote:
      "It was my best experience with a dentist. Doctor Anderson explains everything in detail. I had no pain from beginning to end . The staff are very nice and the place is clean. I am thankful and would highly recommend him.",
    name: "Oscar Orrego",
    source: "Google Review",
    rating: 5,
  },
  {
    id: 31,
    quote:
      "Dr. Anderson is fantastic. He makes such an effort with his patients - he will even call you after your visit to ensure that you are doing ok. The office staff is accommodating and friendly.",
    name: "Zach Hoogerland",
    source: "Google Review",
    rating: 5,
  },
  {
    id: 32,
    quote:
      "Dr Anderson took care of my root canal in the most companionate manner. His receptionist Tom was very kind to me and made my experience at the dentist office pleasant.",
    name: "Zorica Rutovic",
    source: "Google Review",
    rating: 5,
  },
  {
    id: 33,
    quote:
      "I had some rather detailed and unexpected dental work to be completed. Dr. Anderson and his team were wonderful. From the moment I walked in, I was handled with thoughtfulness and care. The dental work was meticulously performed. Highly recommend.",
    name: "Courtney Caron",
    source: "Google Review",
    rating: 5,
  },
  {
    id: 34,
    quote:
      "Fantastic dentistry! I hate going to the dentist. The thought pains me, just as much if not worse than going to the DMV. My 3rd visit is tomorrow and I couldn't be happier.",
    name: "Josh Jones",
    source: "Google Review",
    rating: 5,
  },
  {
    id: 35,
    quote:
      "Its hard to give a 5 star review for a root canal but Dr. Anderson and his staff were great. Very organized and professional and no pain during the procedure. Good follow up and willing to answer any and all questions.",
    name: "Ann Troxell",
    source: "Google Review",
    rating: 5,
  },
  {
    id: 36,
    quote:
      "Friendly staff, were able to accommodate me same day, doctor extremely competent and took his time answering all my questions.",
    name: "Jesse Ward",
    source: "Google Review",
    rating: 5,
  },
  {
    id: 37,
    quote:
      "I never thought a root canal would be relaxing, but that’s exactly what it was. Very calm and reassuring staff. Would go again if I ever needed :)",
    name: "Natalie Strauss",
    source: "Google Review",
    rating: 5,
  },
]

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      <PageShell
        title="Patient Testimonials"
        description="Hear what our patients have to say about their experience at Wine Country Root Canal."
        heroImageUrl="/placeholder.svg?width=1200&height=350"
      >
        <div className="container mx-auto px-4 md:px-6">
          <FadeInSection className="max-w-3xl mx-auto space-y-10 md:space-y-12">
            {testimonialsData.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-6 md:p-8 rounded-sm shadow-lg border-l-4 border-brand-rose-beige"
              >
                {testimonial.rating && (
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                )}
                <Quote className="w-10 h-10 text-brand-merlot/20 mb-4 transform -scale-x-100" />
                <p className="text-lg md:text-xl italic text-brand-dark-text/90 leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="text-right">
                  <p className="font-serif text-lg font-semibold text-brand-merlot">{testimonial.name}</p>
                  {(testimonial.date || testimonial.source) && (
                    <p className="text-sm text-brand-dark-text/70 mt-1">
                      {testimonial.date}
                      {testimonial.date && testimonial.source && " - "}
                      {testimonial.source}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </FadeInSection>

          <FadeInSection className="text-center mt-16 md:mt-24">
            <h2 className="font-serif text-2xl md:text-3xl text-brand-merlot mb-4">
              Ready for Exceptional Endodontic Care?
            </h2>
            <p className="text-lg text-brand-dark-text/80 mb-8 max-w-xl mx-auto">
              Experience the difference at Wine Country Root Canal. We're here to help you find relief and restore your
              smile.
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
