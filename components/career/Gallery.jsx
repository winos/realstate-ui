import GallerySlider from "../sliders/GallerySlider";

const Gallery = () => {
  return (
    <section className="image__gallery image__gallery--two section__space">
      <div className="section__header wow fadeInUp">
        <h5 className="neutral-top">Join Our Team Today</h5>
        <h2>Join a Team of Passionate Tinkerers</h2>
        <p className="neutral-bottom">
          We wanna hear from you! Revest is a growing startup and we&rsquo;re
          always on the lookout for kindred spirits.
        </p>
      </div>
      <div className="img-slider">
        {/* img slider */}
        <GallerySlider />
      </div>
    </section>
  );
};

export default Gallery;
