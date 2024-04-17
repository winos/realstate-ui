import Image from "next/image";
import blog__thumb from "/public/images/banner/blog__thumb.png";

const Banner = ({ children, title }) => {
  return (
    <section className="banner clear__top bg__img banner--secondary blog-banner key-banner">
      <div className="container">
        <div className="banner__area">
          <h1 className="neutral-top">{title}</h1>
          {children}
        </div>
      </div>
      <Image src={blog__thumb} alt="blog__thumb" className="banner__thumb" />
    </section>
  );
};

export default Banner;
