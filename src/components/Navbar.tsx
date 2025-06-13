import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../animations.css";

const links = [
  { name: "Home", to: "/" },
  { name: "Parks", to: "/parks" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto py-5 px-5 grid grid-cols-2 lg:grid-cols-3 items-center">
        {/* Logo text */}
        <Link
          to="/"
          className="text-2xl md:text-4xl tracking-tighter font-light font-serif xl:py-2"
        >
          Park Explorer
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex justify-center gap-8">
          {links.map((link) => (
            <li key={link.to} className="">
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  ` ${isActive ? "underline" : ""} p-2`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Button container */}
        <div className="flex justify-end items-center gap-4 col-start-3">
          <button
            type="button"
            className="hidden lg:inline text-white bg-color-button-primary px-4 py-2 rounded-3xl 
            hover:bg-green-800 focus:outline-teal-600"
          >
            Future Button
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden  text-xl"
            aria-label="Open menu"
          >
            Menu
          </button>
        </div>
      </div>

      {/* Mobile navlink menu */}
      {menuOpen && (
        <div className="lg:hidden px-5 pb-4 animate-slide-fade">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block  ${isActive ? "underline" : ""}`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
