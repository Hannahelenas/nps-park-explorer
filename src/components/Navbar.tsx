import { Link, NavLink } from "react-router-dom";

const links = [
  { name: "Home", to: "/" },
  { name: "Parks", to: "/parks" },
];

export default function Navbar() {
  return (
    <nav className="w-full bg-teal-600" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto py-5 md:px-10 lg:px-12 xl:px-12 grid grid-cols-3 items-center">
        {/* Logo link */}
        <Link to="/" className="text-2xl tracking-tight text-white">
          Park Explorer
        </Link>

        {/* Navigation links */}
        <ul className="flex justify-center gap-8">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `text-white ${isActive ? "underline" : ""}`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
        {/* Button container */}
        <div className="flex justify-end">
          <button
            type="button"
            className="text-white bg-green-900 px-4 py-2 rounded hover:bg-green-800 
            focus:outline-none focus:ring-2 focus:ring-white"
          >
            Future Button
          </button>
        </div>
      </div>
    </nav>
  );
}
