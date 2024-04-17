import { useCallback, useEffect, useState } from "react";
import data from "../components/support/data";
import SupportFaq from "../components/support/SupportFaq";
import SupportHeader from "../components/support/SupportHeader";

const Support = () => {
  const [filterBy, setfilterBy] = useState("start");
  const [singleFaqData, setSingleFaqData] = useState();

  const receiveFilterBy = (itm) => {
    filterData(itm);
    setfilterBy(itm);
  };

  const filterData = useCallback(
    (itm) => {
      if (itm) {
        const filterData = data.filter((single) => single.category === itm);
        setSingleFaqData(filterData);
      } else {
        const filterData = data.filter(
          (single) => single.category === filterBy
        );
        setSingleFaqData(filterData);
      }
    },
    [filterBy]
  );

  useEffect(() => {
    filterData();
  }, [filterData]);

  return (
    <>
      <SupportHeader receiveFilterBy={receiveFilterBy} filterBy={filterBy} />

      {/* Faq section */}
      <SupportFaq faqData={singleFaqData} />
    </>
  );
};

export default Support;
