import Benifits from "../../components/CardBenifits/Benifits";
import CardDetails from "../../components/CardDetails/CardDetails";
import CardFeatures from "../../components/CardFeatures/CardFeatures";
import CardUsability from "../../components/CardUsability/CardUsability";
import Footer from "../../components/Footer/Footer";
import CardBrands from "../../components/HeroSection/CardBrands";
import Header from "../../components/HeroSection/Header";
import HeroSection from "../../components/HeroSection/HeroSection";
import InternationalMoneyTransferBenefits from "../../components/InternationalMoneyTransferBenefits/InternationalMoneyTransferBenefits";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <CardBrands />
      <CardDetails />
      <CardFeatures />
      <CardUsability />
      <InternationalMoneyTransferBenefits />
      <Benifits />
      <Footer />
    </div>
  );
};

export default Home;

