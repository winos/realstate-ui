import Link from "next/link";

const Banner = () => {
  return (
    <section
      className="banner banner_three_bg banner-three clear__top bg__img"
      data-background="./assets/images/banner/banner-three-bg.png"
    >
      <div className="container">
        <div className="banner__area">
          <h1 className="neutral-top">How It Works</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link href="/index">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Pages
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                How It Works
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Banner;
