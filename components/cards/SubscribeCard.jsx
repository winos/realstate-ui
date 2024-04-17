import Image from "next/image";
import newsletter from "/public/images/blog/newsletter.png";

const SubscribeCard = () => {
  return (
    <>
      <Image src={newsletter} alt="newsletter" />
      <h4>Subscribe to our newsletter</h4>
      <p>Lorem ipsum dolor sit amet dolor consectetur adipiscing elit</p>
      <form>
        <div className="input">
          <input
            type="email"
            name="sub_email"
            id="subEmail"
            placeholder="Enter Your Email"
            required
          />
        </div>
        <button type="submit" className="button button--effect">
          Subscribe
        </button>
      </form>
    </>
  );
};

export default SubscribeCard;
