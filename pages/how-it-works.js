// import Testimonial from "../components/affiliate/Testimonial";
import Banner from "../components/common/Banner";
import Breadcrumb from "../components/common/Breadcrumb";
import VideoPopup from "../components/common/VideoPopup";
import Community from "../components/howItWorks/Community";
import Stape from "../components/howItWorks/Stape";
import TestimonialSlider from "../components/sliders/TestimonialSlider";

const HowItWorks = () => {
  return (
    <>
      {/* Banner start here */}
      <Banner title="How It Works" cls="banner_three_bg banner-three">
        <Breadcrumb
          breadcrumbs={[
            ["Home", "/"],
            ["Pages", "#"],
            ["How It Works", "#"],
          ]}
        />
      </Banner>

      {/* Video Popup start here */}
      <VideoPopup />

      {/* Stape start here */}
      <Stape />

      {/* Community start here */}
      <Community />

      {/* Testimonial Slider start here */}
      <TestimonialSlider cls="testimonial--two" />
    </>
  );
};

export default HowItWorks;
