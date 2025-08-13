import FeaturedParksSection from "../components/Home/FeaturedParksSection";
import HomeHero from "../components/HomeHero";

const Home = () => {
  return (
    <>
      <HomeHero />
      {/*  <h2
        className=" max-w-6xl mx-auto px-5 text-2xl lg:text-4xl mb-8 
        tracking-tighter font-serif mt-8 "
      >
        Featured Parks
      </h2> */}
      <FeaturedParksSection />
    </>
  );
};

export default Home;
