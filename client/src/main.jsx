import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import store from "./store";
import { FormContextProvider } from "./context/formContext";
import { TaskContextProvider } from "./context/taskContext";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store= { store }>
      <TaskContextProvider>
        <FormContextProvider>
          <App />
        </FormContextProvider>
      </TaskContextProvider>
    </Provider>
  </React.StrictMode>
);
