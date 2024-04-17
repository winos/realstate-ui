import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

const Content = ({ filterDatas }) => {
  return (
    <div className="open__position__tab__wrapper">
      {filterDatas.map((item) => (
        <div key={item.id} className="job__single open__job__single">
          <div className="open__job__inner">
            <Image src={item.logo} alt={item.title} />
            <div className="open__job__info">
              <h5>
                <Link href={item.link}>{item.title}</Link>
              </h5>
              <ul>
                {item.tags.map((tag, i) => (
                  <li key={i}>{tag}</li>
                ))}
              </ul>
            </div>
          </div>
          <Link href={item.link} className="arrw">
            <i>
              <FaAngleRight />
            </i>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Content;
