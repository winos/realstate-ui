import Faqs from "../components/common/Faqs";
import Market from "../components/home/Market";
import Hero from "../components/listYourProperty/Hero";
import Numbers from "../components/listYourProperty/Numbers";
import Overview from "../components/listYourProperty/Overview";
import Work from "../components/listYourProperty/Work";
import TestimonialSlider from "../components/sliders/TestimonialSlider";
import faqData from "../data/faqData";

const listYourProperty = () => {
  return (
    <>
      {/* Hero start here */}
      <Hero />

      {/* Overview start here */}
      <Overview />

      {/* Numbers start here */}
      <Numbers />

      {/* Work start here */}
      <Work />

      {/* Faqs start here */}
      <Faqs data={faqData} />

      {/* Testimonial Slider start here */}
      <TestimonialSlider />

      {/* Market start here */}
      <Market />
    </>
  );
};

export default listYourProperty;
