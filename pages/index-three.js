import Stape from "../components/common/Stape";
import Market from "../components/home/Market";
import Banner from "../components/homeThree/Banner";
import Featured from "../components/homeThree/Featured";
import Invest from "../components/homeThree/Invest";
import TestimonialSlider from "../components/sliders/TestimonialSlider";

const HomeThree = () => {
  return (
    <>
      {/* Banner start here */}
      <Banner />

      {/* Invest start here */}
      <Invest />

      {/* Featured start here */}
      <Featured />

      {/* Stape start here */}
      <Stape bg={false} />

      {/* Testimonial Slider start here */}
      <TestimonialSlider />

      {/* Market start here */}
      <Market />
    </>
  );
};

export default HomeThree;
