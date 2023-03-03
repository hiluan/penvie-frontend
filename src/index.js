import "./index.css";
import App from "./App";
import React from "react";
import globalReducer from "state"; // this works because of jsconfig.json => baseUrl https://youtube.com/watch?v=0cPCMIuDk2I&si=EnSIkaIECMiOmarE&t=2150
import ReactDOM from "react-dom/client";
import { apiEssays } from "state/apiEssays";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: {
    global: globalReducer,
    [apiEssays.reducerPath]: apiEssays.reducer,
  },
  middleware: (getDefault) => getDefault().concat(apiEssays.middleware),
});
setupListeners(store.dispatch);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
