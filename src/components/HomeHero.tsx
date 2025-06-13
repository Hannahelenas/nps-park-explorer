const HomeHero = () => {
  return (
    <section
      aria-label="Home hero section"
      className="text-center h-[80vh] bg-pink-100 flex flex-col justify-center"
    >
      <h1 className="text-5xl mb-2">
        Discover National Parks in the United States
      </h1>
      <p className="mt-2 text-2xl w-3/4 mx-auto">
        From Yosemite to the Everglades, discover park highlights, visitor tips,
        and travel information for all U.S. national parks.
      </p>
    </section>
  );
};

export default HomeHero;
