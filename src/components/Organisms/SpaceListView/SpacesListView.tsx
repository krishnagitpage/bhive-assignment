import { useGetSpacesQuery } from "../../../features/spaces/spacesApiSlice";
import SpaceCardItem from "../../Molecules/SpaceCardItem/SpaceCardItem";

const SpacesListView = () => {
  const { data: spaces = [], isLoading, isError } = useGetSpacesQuery();
  if (isLoading) {
    return <div>Loading posts...</div>;
  }

  if (isError) {
    return <div>Error fetching posts.</div>;
  }

  return (
    <div className="grid grid-cols-12 grid-rows-1 items-strech xl:gap-10 gap-3">
      {spaces.map((space, i) => {
        return (
          <div
            className="xl:col-span-4 md:col-span-6 col-span-12 row-span-1"
            key={i}
          >
            <SpaceCardItem space={space} />
          </div>
        );
      })}
    </div>
  );
};

export default SpacesListView;
