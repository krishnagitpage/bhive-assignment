import apiSlice from "../../app/api/apiSlice";
import fakeData from "../../mocks/fakeData.json";
import { SpaceItemType } from "./spaceTypes";

export const spacesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSpaces: builder.query<SpaceItemType[], void>({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        // Here is the dummy api fetch returning local json data if network fails
        const result = await fetchWithBQ("/spaces");
        if (result.error) {
          return { data: fakeData.spaces as SpaceItemType[] };
        }
        return { data: result.data as SpaceItemType[] };
      },
    }),
  }),
});

export const { useGetSpacesQuery } = spacesApiSlice;
