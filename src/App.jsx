import { createBrowserRouter, RouterProvider } from "react-router-dom";

import TopBar from "./pages/TopBar";

import Regis from "./pages/regis/regis.jsx";
import Login from "./pages/login/login.jsx";
import HomePage from "./pages/homePage/home.jsx";
import Pilihan from "./pages/dataDiri/pilihan.jsx";
import Profil from "./pages/dataDiri/profil.jsx";
import Footer from "./components/footer.jsx";

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
        element: <Footer />,
        children: [
          {
            path: "",
            element: <HomePage />,
          },
          {
            path: "dataDiri",
            element: <Pilihan />,
            children: [
              {
                path: "profil",
                element: <Profil />,
              },
            ],
          },
        ],
      },
    ],
  },
]);
const App = () => <RouterProvider router={router} />;
export default App;
