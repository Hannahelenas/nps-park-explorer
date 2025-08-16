import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollHandler from "./ScrollHandler";

export default function Layout() {
  return (
    <>
      <ScrollHandler />
      <Navbar />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
