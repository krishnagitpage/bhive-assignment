import React from "react";
import Container from "../../components/ui/Container";

const HeroComponent = () => {
  return (
    <div
      className="lg:bg-[url(/homePageHeroBg1.svg)] bg-no-repeat bg-right-bottom mb-10"
      style={{
        backgroundSize: "70%",
        backgroundPositionX: "left",
        backgroundPositionY: "center",
      }}
    >
      <Container>
        <div className="flex lg:flex-row flex-col  items-center ">
          <div className="lg:w-1/3 ">
            <video controls={false} autoPlay muted loop>
              <source src="/homePageHeroVideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="lg:w-2/3 lg:order-first">
            <div className="text-h1 w-full text-center lg:text-left">
              Host your meeting with <div className="lg:block"></div>world-class
              amenities. <div className="lg:block"></div>Starting at{" "}
              <span className="text-primary">₹199/-!</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroComponent;
