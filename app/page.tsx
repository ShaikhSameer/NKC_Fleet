import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClientMarquee from "@/components/ClientMarquee";
import About from "@/components/About";
import StandoutFeatures from "@/components/StandoutFeatures";
import Technology from "@/components/Technology";
import Fleet from "@/components/Fleet";
import Maintenance from "@/components/Maintenance";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ClientMarquee />
        <About />
        <StandoutFeatures />
        <Technology />
        <Fleet />
        <Maintenance />
        <WhyChooseUs />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
