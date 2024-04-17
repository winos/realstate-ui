import Image from "next/image";

const Banner = ({ children, title, cls, baner__thumb = null }) => {
  return (
    <section className={`banner clear__top bg__img ${cls}`}>
      <div className="container">
        <div className="banner__area">
          <h1 className="neutral-top">{title}</h1>
          {children}
        </div>
      </div>
      {baner__thumb == null ? (
        " "
      ) : (
        <Image src={baner__thumb} alt="blog__thumb" className="banner__thumb" />
      )}
    </section>
  );
};

export default Banner;
