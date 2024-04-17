import Image from "next/image";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";
import videoIllustration from "/public/images/video-illustration.png";

const VideoPopup = ({ cls }) => {
  return (
    <div className={`video ${cls}`}>
      <div className="container">
        <div className="video__area">
          <Image src={videoIllustration} alt="video illustration" />
          <div className="video__btn">
            <Link
              className="video__popup"
              title="YouTube video player"
              href="https://www.youtube.com/watch?v=LCihLrSehCo"
              target={"_blank"}
            >
              <FaPlay />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPopup;
