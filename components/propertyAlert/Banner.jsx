import Link from "next/link";

const Banner = () => {
  return (
    <section className="banner banner__bg banner--tertiary clear__top bg__img">
      <div className="container">
        <div className="banner__area">
          <h1 className="neutral-top">Property Alerts</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link href="/">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Pages
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Property Alerts
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Banner;
