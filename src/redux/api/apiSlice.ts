import { getBaseUrl } from "@/helper/configs/envConfig";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: getBaseUrl() }),
  tagTypes: ["gatepass", "security"],
  endpoints: () => ({}),
});

export default api;
