import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import WhatIsTitle from '@/components/WhatIsTitle';
import Benefits from '@/components/Benefits';
import HowItWorks from '@/components/HowItWorks';
import OfficeCarousel from '@/components/OfficeCarousel';
import ApplicableCases from '@/components/ApplicableCases';
import Testimonials from '@/components/Testimonials';
import AboutUs from '@/components/AboutUs';
import FAQs from '@/components/FAQs';
import LeadForm from '@/components/LeadForm';
import Contact from '@/components/Contact';
import FinalCTA from '@/components/FinalCTA';
import LegalDisclaimer from '@/components/LegalDisclaimer';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <WhatIsTitle />
        <Benefits />
        <HowItWorks />
        <OfficeCarousel />
        <ApplicableCases />
        <Testimonials />
        <AboutUs />
        <FAQs />
        <LeadForm />
        <Contact />
        <FinalCTA />
        <LegalDisclaimer />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
