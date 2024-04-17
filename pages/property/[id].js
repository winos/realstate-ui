import Gallery from "../../components/common/Gallery";
import Market from "../../components/home/Market";
import AllProperties from "../../components/PropertyDetails/AllProperties";
import Details from "../../components/PropertyDetails/Details";

const PropertyDetails = () => {
  return (
    <>
      {/* Details start here */}
      <Details />

      {/* Gallery start here */}
      <Gallery />

      {/* All Properties start here */}
      <AllProperties />

      {/* Market start here */}
      <Market />
    </>
  );
};

export default PropertyDetails;
