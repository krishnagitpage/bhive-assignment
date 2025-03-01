import HeroComponent from "../../components/Templates/HeroComponent";
import ValueProposition from "../../components/Templates/ValueProposition";
import SpaceOverView from "../../components/Templates/SpaceOverView";
import CTASection from "../../components/Templates/CTASection";

const HomePage = () => {
  return (
    <div className="bg-secondary">
      <HeroComponent />
      <ValueProposition />
      <SpaceOverView />
      <CTASection />
    </div>
  );
};

export default HomePage;
