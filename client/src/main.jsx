import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import store from "./store";
import { FormContextProvider } from "./context/formContext";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store= { store }>
      <FormContextProvider>
        <App />
      </FormContextProvider>
    </Provider>
  </React.StrictMode>
);
