import apiSlice from "../../app/api/apiSlice";
import fakeData from "../../mocks/fakeData.json";
import { SpaceItemType } from "./spaceTypes";

export const spacesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSpaces: builder.query({
      async queryFn(_arg, queryApi, extraOptions, fetchWithBQ) {
        // Attempt to fetch data from the network
        const result = await fetchWithBQ("/posts");
        if (result.error) {
          // Fallback: return local JSON data if network fetch fails
          return { data: fakeData as SpaceItemType[] };
        }
        return result;
      },
      providesTags: ["Post"],
    }),
  }),
});

export const { useGetSpacesQuery } = spacesApiSlice;
