import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiEssays = createApi({
  reducerPath: "apiEssays",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  tagTypes: [
    "newEssay",
    "getEssays",
    "deleteEssays",
    "getEssay",
    "deleteEssay",
    "newEssayChat",
    "getEssayChats",
  ],
  endpoints: (build) => ({
    // essays
    newEssay: build.mutation({
      query: (body) => ({
        url: `/gpt/essays`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["getEssays"],
      providesTags: ["newEssay"],
    }),
    getEssays: build.query({
      query: () => `/gpt/essays`,
      providesTags: ["getEssays"],
    }),
    deleteEssays: build.mutation({
      query: () => ({
        url: `/gpt/essays`,
        method: "DELETE",
      }),
      invalidatesTags: ["getEssays", "getEssay", "getEssayChats"],
      providesTags: ["deleteEssays"],
    }),
    getEssay: build.query({
      query: (essayId) => `/gpt/essays/${essayId}`,
      providesTags: ["getEssay"],
    }),
    deleteEssay: build.mutation({
      query: (essayId) => ({
        url: `/gpt/essays/${essayId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["getEssays", "getEssay", "getEssayChats"],
      providesTags: ["deleteEssay"],
    }),
    newEssayChat: build.mutation({
      query: (body) => ({
        url: `/gpt/essays/${body.essayId}/chats`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["getEssay", "getEssayChats"],
      providesTags: ["newEssayChat"],
    }),
    getEssayChats: build.query({
      query: (essayId) => `/gpt/essays/${essayId}/chats`,
      providesTags: ["getEssayChats"],
    }),
  }),
});

export const {
  useNewEssayMutation,
  useGetEssaysQuery,
  useDeleteEssaysMutation,
  useGetEssayQuery,
  useDeleteEssayMutation,
  useNewEssayChatMutation,
  useGetEssayChatsQuery,
} = apiEssays;
