import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: 'light',
  language: 'vi',
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { setMode, setLanguage } = globalSlice.actions;
export default globalSlice.reducer;
