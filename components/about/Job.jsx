import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa";
import business from "/public/images/icons/business.png";
import development from "/public/images/icons/development.png";
import marketing from "/public/images/icons/marketing.png";
import sales from "/public/images/icons/sales.png";

const jobData = [
  {
    id: "37^2ha",
    title: "Director of Sales",
    tags: ["Sales", "Remote", "Full Time"],
    link: "/",
    logo: sales,
  },
  {
    id: "37^24a",
    title: "Product Marketing Lead",
    tags: ["Marketing", "Remote", "Full Time"],
    link: "/",
    logo: marketing,
  },
  {
    id: "31^2ha",
    title: "Business Development Representative",
    tags: ["Business", "Remote", "Full Time"],
    link: "/",
    logo: business,
  },
  {
    id: "37^23a",
    title: "Business Development Representative",
    tags: ["Business", "Remote", "Full Time"],
    link: "/",
    logo: development,
  },
];

const Job = () => {
  return (
    <section className="open__job section__space">
      <div className="container">
        <div className="open__job__area">
          <h2 className="neutral-top">Join Us</h2>
          {jobData.map((item) => (
            <div key={item.id} className="job__single">
              <div className="open__job__inner">
                <Image src={item.logo} alt={item.title} />
                <div className="open__job__info">
                  <h5>
                    <Link href={item.link}>{item.title}</Link>
                  </h5>
                  <ul>
                    {item.tags?.map((tag, i) => (
                      <li key={i}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <Link href={item.link} className="arrw">
                <FaAngleRight />
              </Link>
            </div>
          ))}
        </div>
        <div className="cta__btn">
          <Link href="/" className="button button--effect">
            See all open roles
            <BsArrowRight className="ms-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Job;
