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
        <div className="flex lg:flex-row flex-col  justify-center items-center gap-3">
          <div className="xl:w-1/3 lg:w-1/2">
            <video controls={false} autoPlay muted loop>
              <source src="/homePageHeroVideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="xl:w-2/3 lg:w-1/2 lg:order-first w-full">
            <div className="xl:text-h1 md:text-h2 text-h4 w-full text-center lg:text-left">
              Host your meeting with <span className="lg:block inline"></span>
              world-class amenities. <span className="lg:block inline"></span>
              Starting at <span className="text-primary">₹199/-!</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroComponent;
