import Container from "../../components/ui/Container";
import PageSection from "../../components/ui/PageSection";
import { ValuePropositionItemType } from "./Types";
import ValueItem from "./ValueItem";
import { cn } from "../../lib/utils";
import {
  CafeAndTeaBar,
  CalendarStar,
  ClockArrowRound,
  ComfortLounges,
  GymFacalities,
  RupeeSymbolHexagon,
  TennisBall,
  WifiIcon,
} from "../../icons/icons";

const Items: ValuePropositionItemType[] = [
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

const borderClasses = (i: number) => {
  // for xl screens
  let classNames = "";
  if (i >= 0 && i <= 3) {
    classNames = cn(
      classNames,
      i < 3 ? "xl:border-e" : "xl:border-0",
      "xl:border-b"
    );
  }

  if (i >= 4 && i <= 7) {
    classNames = cn(
      classNames,
      i < 7 ? "xl:border-e" : "xl:border-e-0",
      "xl:border-b-0"
    );
  }

  // for lg screens
  if (i >= 0 && i <= 2) {
    classNames = cn(classNames, i < 2 ? "lg:border-e" : "", "lg:border-b");
  }

  if (i > 2 && i <= 5) {
    classNames = cn(classNames, i < 5 ? "lg:border-e" : "", "lg:border-b");
  }

  if (i > 5 && i < 8) {
    classNames = cn(classNames, i < 8 ? "lg:border-e" : "");
  }

  return classNames;
};

const ValueProposition = () => {
  return (
    <PageSection>
      <Container>
        <div className="lg:text-h2 text-h3 mb-10">Why Choose Us?</div>
        <div className="grid grid-cols-12 gap-5 xl:gap-0 lg:gap-0 ">
          {Items.map((item, i) => {
            return (
              <div
                key={item.id}
                className={cn(
                  `xl:col-span-3 lg:col-span-4 col-span-6 
                  xl:h-[80px] lg:h-[100px]
                  border-gray-300
                  bg-white lg:bg-transparent xl:bg-transparent 
                  hover:bg-white 
                  border-0`,
                  borderClasses(i)
                )}
              >
                <ValueItem item={item} />
              </div>
            );
          })}
        </div>
      </Container>
    </PageSection>
  );
};

export default ValueProposition;
