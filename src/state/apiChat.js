import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiChat = createApi({
  reducerPath: "apiChat",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  tagTypes: ["newChat"],
  endpoints: (build) => ({
    newChat: build.mutation({
      query: (body) => ({
        url: `/api/v1/chatgpt`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useNewChatMutation } = apiChat;
