import Image from "next/image";
import Link from "next/link";

const ContactOverviewCard = ({ singleItem }) => {
  const { icon, tilte, desc, link, contact } = singleItem;
  return (
    <div className="contact__overview__single column__space--secondary shadow__effect">
      <Image src={icon} alt="email" />
      <h5>{tilte}</h5>
      <p>{desc}</p>
      <hr />
      <p className="neutral-bottom">
        <Link href={link}>{contact}</Link>
      </p>
    </div>
  );
};

export default ContactOverviewCard;
