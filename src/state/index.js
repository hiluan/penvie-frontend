import { createSlice } from "@reduxjs/toolkit";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch {
    // ignore write errors
  }
};

const initialState = loadState() || {
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
      saveState(state);
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
      saveState(state);
    },
    setPage: (state, action) => {
      state.page = action.payload;
      saveState(state);
    },
  },
});

export const { setMode, setLanguage, setPage } = globalSlice.actions;
export default globalSlice.reducer;
