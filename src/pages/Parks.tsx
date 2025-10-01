import ParkList from "../components/ParkList";
import PageHeading from "../components/common/PageHeading";

const Parks = () => {
  return (
    <section className="mt-10 lg:mt-15 flex flex-col items-center">
      <PageHeading title="Parks" />
      <p className="font-serif leading-relaxed text-lg mb-6">
        Plan your visit. Search for a park by name, location or state.
      </p>
      <ParkList />
    </section>
  );
};

export default Parks;
