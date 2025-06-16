//import { Link } from "react-router-dom";

import { Link } from "react-router-dom";

const HomeHero = () => {
  return (
    <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto rounded-3xl ">
      <div className="flex flex-col justify-center items-start gap-4 md:gap-8 pr-5">
        <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-serif">
          Discover National Parks in the United States
        </h1>
        <p className="text-lg font-serif ">
          Breathtaking landscapes and endless adventrues. Explore America’s
          national parks with Park Explorer — your ultimate park guide to
          nature’s greatest wonders.
        </p>
        <Link
          to="/parks"
          className="bg-[var(--color-text)] border-2 
          border-[var(--color-text)] px-6 py-3 text-white rounded-full transition-all 
          duration-300 ease-in-out hover:cursor-pointer hover:bg-transparent hover:text-black 
          hover:border-[var(--color-primary)]"
        >
          Find a park
        </Link>
      </div>

      {/* Bildkolumn med höjd */}
      <div className="aspect-[4/3] h-auto mt-8 lg:mt-0">
        {" "}
        {/* ← Justera höjden här */}
        <img
          src="/yosemite-large.jpg"
          alt="Yosemite National Park"
          className="w-full h-full rounded-3xl shadow-md object-cover"
        />
      </div>
    </section>
  );
};

export default HomeHero;
