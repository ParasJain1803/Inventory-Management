import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Error from "../pages/Error";
import Orders from "../pages/Orders";
import Profile from "../pages/Profile";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "home", element: <Home /> },
      { path: "orders", element: <Orders /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "profile", element: <Profile /> },
      { path: "*", element: <Error /> },
    ],
  },
]);
