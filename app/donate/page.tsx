import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/home/HeroSection";
import ImpactStats from "../components/home/ImpactStats";
import DonationOptions from "../components/home/DonationOptions";
import WhereMoneyGoes from "../components/home/WhereMoneyGoes";
import DonationForm from "../components/home/DonationForm";

export default function Donate() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <HeroSection />
        <ImpactStats />
        <DonationOptions />
        <WhereMoneyGoes />
        <DonationForm />
      </main>
      <Footer />
    </div>
  );
}
