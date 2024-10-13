import { createBrowserRouter, RouterProvider } from "react-router-dom";

import TopBar from "./pages/TopBar";

import Regis from "./pages/regis/regis.jsx";
import Login from "./pages/login/login.jsx";
import HomePage from "./pages/homePage/home.jsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <TopBar />,
    children: [
      {
        path: "",
        element: <Login />,
      },
      {
        path: "/regis",
        element: <Regis />,
      },

      {
        path: "/home",
        element: <HomePage />,
      },
    ],
  },
]);
const App = () => <RouterProvider router={router} />;
export default App;
