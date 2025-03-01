import Container from "../Atoms/Container";
import PageSection from "../Atoms/PageSection";
import SpacesListView from "../Organisms/SpaceListView/SpacesListView";

const SpaceOverView = () => {
  return (
    <PageSection>
      <Container>
        <div className="text-h2 mb-10">
          <span className="hidden lg:block">Our Space Overview</span>
          <span className="block lg:hidden">Our Spaces</span>
        </div>
        <SpacesListView />
      </Container>
    </PageSection>
  );
};

export default SpaceOverView;
