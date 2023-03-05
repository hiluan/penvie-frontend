import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  language: "en",
  page: "/",
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { setMode, setLanguage, setPage } = globalSlice.actions;
export default globalSlice.reducer;
