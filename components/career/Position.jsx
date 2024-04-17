import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import Isotope from "../isotope/Isotope";

const Tags = ({ itemCatagory, filterCategory }) => {
  return (
    <div className="d-flex justify-content-center">
      <div className="open__tab">
        {itemCatagory.map((item) => (
          <button
            key={item}
            type="button"
            className="button button--effect open__tab__btn text-capitalize"
            onClick={() => filterCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

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

const Position = () => {
  return (
    <section className="open__tab__position section__space__bottom">
      <div className="container">
        <h2 className="neutral-top">Open Positions</h2>

        {/* position Data */}
        <Isotope Tags={Tags} Content={Content} url={"position"} />
      </div>
    </section>
  );
};

export default Position;
