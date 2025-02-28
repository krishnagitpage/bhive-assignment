import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://www.dummyurl.com" }),
  tagTypes: ["Post"],
  endpoints: () => ({}), // empty endpoints – will be injected by features
});

export default apiSlice;
