import Filter from "../../components/common/Filter";
import Banner from "../../components/property/Banner";
import Properties from "../../components/property/Properties";
import featuredData from "../../data/featuredData";
import useFilter from "../../hook/_useFilter";

const Property = () => {
  const filterHook = useFilter(featuredData, "city", "city", "type");

  return (
    <>
      {/* Banner start here */}
      <Banner />

      {/* Filter start here */}
      <Filter {...filterHook} />

      {/* Properties start here */}
      <Properties {...filterHook} />
    </>
  );
};

export default Property;
