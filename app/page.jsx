import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoScroll from "@/components/LogoScroll";
import DifferentStyle from "@/components/DifferentStyle";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoScroll />
      <DifferentStyle />
      <Pricing />
      <Faq />
    </>
  );
}
