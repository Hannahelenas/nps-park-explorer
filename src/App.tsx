import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Parks from "./pages/Parks";
import Layout from "./components/Layout";
import { ParkProvider } from "./context/park/ParkProvider";
import ParkOverview from "./pages/ParkOverview";
import { FavouritesProvider } from "./context/favourites/FavouritesProvider";
import Favourites from "./pages/Favourites";
import { VisitorCenterProvider } from "./context/visitorcenters/VisitorCenterProvider";
import { ParkingLotProvider } from "./context/parkingLots/ParkingLotProvider";

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
          <ParkingLotProvider>
            <VisitorCenterProvider>
              <RouterProvider router={router} />
            </VisitorCenterProvider>
          </ParkingLotProvider>
        </ParkProvider>
      </FavouritesProvider>
    </>
  );
}

export default App;
