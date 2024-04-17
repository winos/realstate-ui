import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import los_angeles from "/public/images/los-two.png";

const SingleItem = () => {
  return (
    <>
      <div className="intro">
        <h5>My Investments</h5>
        <Link href="#">
          Show All
          <BsArrowRight className="fw-semibold fs-5" />
        </Link>
      </div>
      <div className="property-wrap">
        <div className="poster">
          <Link href="#">
            <Image src={los_angeles} alt="Los Angeles" />
          </Link>
        </div>
        <h4>
          <Link href="#">Los Angeles</Link>
        </h4>
        <p>
          <FaMapMarkerAlt />
          8706 Herrick Ave, Los Angeles
        </p>
      </div>
    </>
  );
};

export default SingleItem;
