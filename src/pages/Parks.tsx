import ParkList from "../components/ParkList";
import PageHeading from "../components/common/PageHeading";

const Parks = () => {
  return (
    <section className="mt-10 lg:mt-15 flex flex-col items-center">
      <PageHeading title="Parks" />
      <ParkList />
    </section>
  );
};

export default Parks;
