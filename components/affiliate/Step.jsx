import Image from "next/image";
import VideoPopup from "../common/VideoPopup";
import earn from "/public/images/icons/earn.png";
import join from "/public/images/icons/join.png";
import promote from "/public/images/icons/promote.png";

const Step = () => {
  return (
    <section className="step__two step__two__bg section__space__top bg__img">
      <div className="container">
        <div className="step__two-area wow fadeInUp">
          <div className="section__header">
            <h5 className="neutral-top">How the program Works</h5>
            <h2>Start to make money in 3 easy steps</h2>
          </div>
          <div className="row">
            <div className="col-sm-6 col-lg-4">
              <div className="step__two__single shadow__effect">
                <Image src={join} alt="Join" />
                <h4>Join</h4>
                <p className="neutral-bottom">
                  It’s free to get started. Access marketing materials, tools,
                  and more!
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="step__two__single shadow__effect">
                <Image src={promote} alt="Promote" />
                <h4>Promote</h4>
                <p className="neutral-bottom">
                  Share with your target audience. There’s a match for every
                  need
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="step__two__single shadow__effect">
                <Image src={earn} alt="earn" />
                <h4>Earn</h4>
                <p className="neutral-bottom">
                  Rake in the moment your traffic converts. Check our commission
                  plans
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* video popup section start  */}
      <VideoPopup cls="video__two section__space__top" />
      {/* <div className="video video__two section__space__top">
        <div className="container">
          <div className="video__area">
            <Image src={videoIllustration} alt="Video Illustration" />
            <div className="video__btn">
              <Link
                className="video__popup"
                href="https://www.youtube.com/watch?v=LCihLrSehCo"
                title="YouTube video player"
                target={"_blank"}
              >
                <FaPlay />
              </Link>
            </div>
          </div>
        </div>
      </div> */}
      {/* #video popup section end */}
    </section>
  );
};

export default Step;
