import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";

const TeamCard = ({ data }) => {
  const { name, avt, desic, profileLink } = data;
  return (
    <div className="col-sm-6 col-lg-4 col-xl-3">
      <div className="team__single shadow__effect">
        <div className="team__thumb">
          <Image src={avt} alt={name} />
          <Link href={profileLink}>
            <FaLinkedinIn />
          </Link>
        </div>
        <h5 className="neutral-top">{name}</h5>
        <p className="neutral-bottom">{desic}</p>
      </div>
    </div>
  );
};

export default TeamCard;
