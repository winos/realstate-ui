import Image from "next/image";
import Link from "next/link";
import { BsBellFill } from "react-icons/bs";
import check from "/public/images/check.png";

const KeyUpdatesCard = () => {
  return (
    <>
      <h5>
        Key Updates
        <i>
          <BsBellFill />
        </i>
      </h5>
      <hr />
      <div className="singl__wrapper">
        <div className="singl">
          <Image src={check} alt="check" />
          <div>
            <p>30-Aug-2022</p>
            <Link href="/terms-conditions">Term Sheet Signed</Link>
          </div>
        </div>
        <div className="singl">
          <Image src={check} alt="check" />
          <div>
            <p>30-Aug-2022</p>
            <Link href="/privacy-policy">Listing Live</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default KeyUpdatesCard;
