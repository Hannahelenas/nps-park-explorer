import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Parks from "./pages/Parks";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "parks", element: <Parks /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
