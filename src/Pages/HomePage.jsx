import HeroSection from "../Components/HeroSection";
import Header from "../Components/Header";
import PragasSection from "../Components/PragasSection";
import Services from "../Components/Services";
import Contact from "../Components/Contact";

export default function HomePage() {
  return (
    <main>
        <Header />
        <HeroSection />
        <Services />
        <PragasSection />
        <Contact />
    </main>
  )
}
