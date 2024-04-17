import Image from "next/image";
import Link from "next/link";

const Community = () => {
  return (
    <section
      className="community section__space__top over__hi bg__img"
      data-background="./assets/images/community-bg.png"
    >
      <div className="container">
        <div className="community__area">
          <div className="section__header">
            <h5 className="neutral-top">Smart way to raise money</h5>
            <h2>Join Thousands of Investors</h2>
            <p className="neutral-bottom">
              Individual and institutional investors invest $10–$100,000 per
              deal on Revest.
            </p>
          </div>
          <div className="comunity-wrapper section__space">
            <div className="buttons">
              <Link href="/registration" className="button button--effect">
                Become an Investor
              </Link>
            </div>
            <div className="comunity-area">
              {[...Array(21)].map((item, i) => (
                <div key={i} className="comunity-item">
                  <Image
                    src={`/images/community/${i + 1}.png`}
                    alt="comunity"
                    layout="fill"
                  />
                </div>
              ))}
            </div>
            <div className="comunity-area two">
              {[...Array(21)].map((item, i) => (
                <div key={i} className="comunity-item">
                  <Image
                    src={`/images/community/${i + 1}.png`}
                    alt="comunity"
                    layout="fill"
                  />
                </div>
              ))}
            </div>
            <div className="comunity-area three">
              {[...Array(21)].map((item, i) => (
                <div key={i} className="comunity-item">
                  <Image
                    src={`/images/community/${i + 1}.png`}
                    alt="comunity"
                    layout="fill"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
