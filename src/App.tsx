import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Parks from "./pages/Parks";
import Layout from "./components/Layout";
import { ParkProvider } from "./context/park/ParkProvider";
import ParkOverview from "./pages/ParkOverview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "parks", element: <Parks /> },
      { path: "parks/:parkCode", element: <ParkOverview /> },
    ],
  },
]);

function App() {
  return (
    <>
      <ParkProvider>
        <RouterProvider router={router} />
      </ParkProvider>
    </>
  );
}

export default App;
