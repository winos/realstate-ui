// import Banar from "../components/about/Banar";
import Job from "../components/about/Job";
import Market from "../components/about/Market";
import Overview from "../components/about/Overview";
import Team from "../components/about/Team";
import Banner from "../components/common/Banner";
import Breadcrumb from "../components/common/Breadcrumb";
import GallerySlider from "../components/sliders/GallerySlider";

const About = () => {
  return (
    <>
      {/* Banner start here */}
      <Banner title="About Us" cls="banner__bg">
        <Breadcrumb
          breadcrumbs={[
            ["Home", "/"],
            ["Pages", "#"],
            ["About Us", "#"],
          ]}
        />
      </Banner>

      {/* Overview start here */}
      <Overview />

      {/* Gallery Slider start here */}
      <section className="section__space">
        <GallerySlider />
      </section>

      {/* Team start here */}
      <Team />

      {/* Market start here */}
      <Market />

      {/* Job start here */}
      <Job />
    </>
  );
};

export default About;
