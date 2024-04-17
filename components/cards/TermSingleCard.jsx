import Image from "next/image";

const TermSingleCard = ({ img, p, heading }) => {
  return (
    <div className="terms__single">
      <Image src={img} alt={p} />
      <p>{p}</p>
      <h5 className="neutral-bottom">{heading}</h5>
    </div>
  );
};

export default TermSingleCard;
