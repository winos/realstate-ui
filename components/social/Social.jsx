import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Social = () => {
  return (
    <>
      {[
        ["1", FaFacebookF, "/"],
        ["3", FaTwitter, "/"],
        ["2", FaInstagram, "/"],
        ["4", FaLinkedinIn, "/"],
      ].map(([id, SocialIcon, hrf]) => (
        <Link href={hrf} key={id}>
          <SocialIcon className="text-white" />
        </Link>
      ))}
    </>
  );
};

export default Social;
