import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Parks from "./pages/Parks";
import Layout from "./components/Layout";
import { ParkProvider } from "./context/park/ParkProvider";
import ParkOverview from "./pages/ParkOverview";
import { FavouritesProvider } from "./context/favourites/FavouritesProvider";
import Favourites from "./pages/Favourites";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "parks", element: <Parks /> },
      { path: "parks/:parkCode", element: <ParkOverview /> },
      { path: "favourites", element: <Favourites /> },
    ],
  },
]);

function App() {
  return (
    <>
      <FavouritesProvider>
        <ParkProvider>
          <RouterProvider router={router} />
        </ParkProvider>
      </FavouritesProvider>
    </>
  );
}

export default App;
