import { createSlice } from "@reduxjs/toolkit";

// loadState and saveSate in localStorage
// To keep the state of your application after refreshing the page or entering the address in the browser
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
  signedIn: false,
  page: "/",
  view: "", // current chat
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
    setSignedIn: (state, action) => {
      state.signedIn = action.payload;
      saveState(state);
    },
    setPage: (state, action) => {
      state.page = action.payload;
      saveState(state);
    },
    setView: (state, action) => {
      state.view = action.payload;
      saveState(state);
    },
  },
});

export const { setMode, setLanguage, setSignedIn, setPage, setView } =
  globalSlice.actions;
export default globalSlice.reducer;
