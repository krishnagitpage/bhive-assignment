import Container from "../../components/ui/Container";
import PageSection from "../../components/ui/PageSection";
import SpacesListView from "./SpacesListView";

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
