import Container from "../Atoms/Container";
import PageSection from "../Atoms/PageSection";

import {
  CafeAndTeaBar,
  CalendarStar,
  ClockArrowRound,
  ComfortLounges,
  GymFacalities,
  RupeeSymbolHexagon,
  TennisBall,
  WifiIcon,
} from "../../icons/Icons";
import { ValueCardType } from "../Molecules/ValueCardItem/ValueCardTypes";
import ValueListView from "../Organisms/ValueListView/ValueListView";

const Items: ValueCardType[] = [
  {
    id: 0,
    title: "Community Events",
    description: "One liner details about the feature",
    iconSVG: <CalendarStar color="primary" />,
  },
  {
    id: 1,
    title: "Gym Facilities",
    description: "One liner details about the feature",
    iconSVG: <GymFacalities color="primary" />,
  },
  {
    id: 2,
    title: "High-Speed WiFi",
    description: "One liner details about the feature",
    iconSVG: <WifiIcon color="primary" />,
  },
  {
    id: 3,
    title: "Cafe & Tea Bar",
    description: "One liner details about the feature",
    iconSVG: <CafeAndTeaBar color="primary" />,
  },
  {
    id: 4,
    title: "Affordable",
    description: "One liner details about the feature",
    iconSVG: <RupeeSymbolHexagon color="primary" />,
  },
  {
    id: 5,
    title: "Comfort Lounges",
    description: "One liner details about the feature",
    iconSVG: <ComfortLounges color="primary" />,
  },
  {
    id: 6,
    title: "Quick Bookings",
    description: "One liner details about the feature",
    iconSVG: <ClockArrowRound color="primary" />,
  },
  {
    id: 7,
    title: "Sports Area",
    description: "One liner details about the feature",
    iconSVG: <TennisBall color="primary" />,
  },
];

const ValueProposition = () => {
  return (
    <PageSection>
      <Container>
        <div className="lg:text-h2 text-h3 mb-10">Why Choose Us?</div>
        <ValueListView items={Items} />
      </Container>
    </PageSection>
  );
};

export default ValueProposition;
