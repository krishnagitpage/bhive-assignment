import Container from "../Atoms/Container";
import PageSection from "../Atoms/PageSection";

const CTASection = () => {
  return (
    <PageSection>
      <Container className="relative">
        <div className="text-h2">Download our app now</div>
        <div
          className="
            flex md:flex-row flex-col 
            md:justify-end justify-center items-end
          bg-white shadow-md rounded-xl 
            xl:mt-[18%] lg:mt-[20%] md:mt-[15%] mt-10"
        >
          <div
            className="
              md:absolute left-0 
              xl:w-[40%] lg:w-[50%] md:w-[50%] w-[60%] 
              px-10 pt-5 
              md:pt-0 
              mx-auto"
          >
            <img src="/HomePageGetStartedImage.png" className="w-full" />
          </div>
          <div className="lg:w-[50%] md:w-[50%] lg:px-10 px-5 py-[5%] w-full">
            <div
              className="
                hidden md:block
                text-h4 font-normal text-text_secondary 
                mb-10"
            >
              Boost your productivity with the BHIVE Workspace app. Elevate your
              workspace, collaborate efficiently, and unlock exclusive perks.
            </div>
            <div className="flex gap-5 items-center md:justify-start justify-center flex-wrap">
              <img
                src="/googlePlay.png"
                alt="googlePlayIcon"
                className="w-[150px]"
              />
              <img
                src="/appStore.png"
                alt="appStoreIcon"
                className="w-[150px]"
              />
            </div>
          </div>
        </div>
      </Container>
    </PageSection>
  );
};

export default CTASection;
