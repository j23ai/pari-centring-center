import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyAndEquipment from "@/components/WhyAndEquipment";
import Highlights from "@/components/Highlights";
import Gallery from "@/components/Gallery";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pb-16 lg:pb-0">
        <Hero />
        <About />
        <Services />
        <WhyAndEquipment />
        <Highlights />
        <Gallery />
        <CtaBanner />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
