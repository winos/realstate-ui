import Banner from "../components/common/Banner";
import Breadcrumb from "../components/common/Breadcrumb";
import VideoPopup from "../components/common/VideoPopup";
import Program from "../components/loyalityProgram/Program";
import baner__thumb from "/public/images/banner/program-illustration.png";

const loyalityProgram = () => {
  return (
    <>
      {/* Banner start here */}
      <Banner
        title="Loyality Program"
        cls="banner--secondary key-banner banner-three"
        baner__thumb={baner__thumb}
      >
        <Breadcrumb
          breadcrumbs={[
            ["Home", "/"],
            ["Pages", "#"],
            ["Loyality Program", "#"],
          ]}
        />
      </Banner>

      {/* Video Popup start here */}
      <VideoPopup />

      {/* Program start here */}
      <Program />
    </>
  );
};

export default loyalityProgram;
