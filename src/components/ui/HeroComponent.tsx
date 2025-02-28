import { cva } from "class-variance-authority";
import React from "react";
import Container from "./Container";

type HeroComponentProps = {
  title: React.ReactNode | string;
};

const HeroVariants = cva("grid", {
  variants: {
    layout: {
      isRow: "grid-rows-12",
      isCol: "",
    },
  },
});

const HeroComponent: React.FC<HeroComponentProps> = () => {
  return (
    <div>
      <Container>
        <div className="grid grid-cols-12">
          <div className="col-span-8">
            <div className="text-f1">
              Host your meeting with world-class amenities. Starting at{" "}
              <span className="text-primary">₹199/-!</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroComponent;
