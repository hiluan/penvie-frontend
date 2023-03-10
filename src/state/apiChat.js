import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiChat = createApi({
  reducerPath: "apiChat",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  tagTypes: ["newChatGpt", "getChatGpt"],
  endpoints: (build) => ({
    newChatGpt: build.mutation({
      query: (body) => ({
        url: `/api/v1/chatgpt`,
        method: "POST",
        body,
        providesTags: ["newChatGpt"],
      }),
    }),
    getChatGpt: build.query({
      // query: () => `/api/v1/chatgpt`,
      query(accessToken) {
        return {
          url: `/api/v1/chatgpt`,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        };
      },
      providesTags: ["getChatGpt"],
    }),
  }),
});

export const { useNewChatGptMutation, useGetChatGptQuery } = apiChat;
