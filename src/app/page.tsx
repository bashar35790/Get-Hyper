import Hero from "components/Hero";
import StatsSection from "components/StatsSection";
import ServicesSection from "components/ServicesSection";
import WorkGrid from "components/WorkGrid";
import BrandsSection from "components/BrandsSection";
import Footer from "components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <StatsSection />
      <ServicesSection />
      <WorkGrid />
      <BrandsSection />
      <Footer />
    </main>
  );
}
