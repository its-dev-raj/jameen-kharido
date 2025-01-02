import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./pages/components/Footer";
import Home from "./pages/HOME/Home";
import NotFound from "./pages/components/NotFound";
import Ads from "./pages/ADS/Ads";
import "./App.css";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/ads",
      element: <Ads />,
    },

    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />

      <Footer />
    </div>
  );
};

export default App;
