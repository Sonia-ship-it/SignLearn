import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutHero from "../components/about/AboutHero";
import OurJourney from "../components/about/OurJourney";
import OurValues from "../components/about/OurValues";
import TeamSection from "../components/about/TeamSection";
import AboutCTA from "../components/about/AboutCTA";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <AboutHero />
        <OurJourney />
        <OurValues />
        <TeamSection />
        <AboutCTA />
      </main>
      <Footer />
    </div>
  );
}
