import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import { Routes } from "./utils/Route.jsx";
import { Provider } from "react-redux";
import { store } from "./utils/Store.jsx";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";




createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PrimeReactProvider>
      <Provider store={store}>
        <RouterProvider router={Routes} />
      </Provider>
    </PrimeReactProvider>
  </StrictMode>
);
