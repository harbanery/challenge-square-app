import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/configureStore.js";
import AlertCustom from "./components/module/alertCustom/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <AlertCustom />
      <App />
    </Provider>
  </StrictMode>
);
