import HeroComponent from "./HeroComponent";
import ValueProposition from "./ValueProposition";
import SpaceOverView from "./SpaceOverView";
import CTASection from "./CTASection";

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
