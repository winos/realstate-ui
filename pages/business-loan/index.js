import Banner from "../../components/businessLoan/Banner";
import BusinessProperties from "../../components/businessProperties/BusinessProperties";
import Filter from "../../components/common/Filter";
import businessData from "../../data/businessData";
import useFilter from "../../hook/_useFilter";

const BusinessLoan = () => {
  const filterHook = useFilter(businessData, "title", "title", "name");
  return (
    <>
      {/* Banner start here */}
      <Banner />

      {/* Filter start here */}
      <Filter  {...filterHook}/>

      {/* Business Properties */}
      <BusinessProperties {...filterHook} />
    </>
  );
};

export default BusinessLoan;
