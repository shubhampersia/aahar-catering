import Hero from "@/components/sections/Hero"
import AboutUs from "@/components/sections/AboutUs"
import TrustedBy from "@/components/sections/TrustedBy"
import Stats from "@/components/sections/Stats"
import WhyChooseUs from "@/components/sections/WhyChooseUs"
import Services from "@/components/sections/Services"
import TestimonialsCarousel from "@/components/sections/TestimonialsCarousel"
import CTAForm from "@/components/sections/CTAForm"
import ScrollToTop from "@/components/ScrollToTop"

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <TrustedBy />
      <Stats />
      <WhyChooseUs />
      <Services />
      <TestimonialsCarousel />
      <CTAForm />
      <ScrollToTop />
    </main>
  )
}
