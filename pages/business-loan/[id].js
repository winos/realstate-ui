import AllBussiness from "../../components/businessLoanDetails/AllBussiness";
import Details from "../../components/businessLoanDetails/Details";
import Market from "../../components/businessLoanDetails/Market";
import Gallery from "../../components/common/Gallery";

const businessLoanDetails = () => {
  return (
    <>
      {/* Details start here */}
      <Details />

      {/* Gallery start here */}
      <Gallery />

      {/* All Bussiness start here */}
      <AllBussiness />

      {/* Market start here */}
      <Market />
    </>
  );
};

export default businessLoanDetails;
