import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import PostCardHorizontal from "../../cards/PostCardHorizontal";
import SubscribeCard from "../../cards/SubscribeCard";
import Pagination from "../../common/Pagination";
import Isotope from "../../isotope/Isotope";
import articleData from "../articleData";

const Tags = ({ itemCatagory, filterCategory }) => {
  const [activeBTn, setActiveBTn] = useState(0);

  const handelClick = (item, i) => {
    setActiveBTn(i);
    filterCategory(item);
  };

  return (
    <div className="filter__bar">
      <h3>Latest Posts</h3>
      <div className="filter__bar__tabs">
        {itemCatagory.map((item, i) => (
          <button
            key={item}
            className={`filter__bar__tab button button--effect ${
              activeBTn == i ? " " : "button--secondary"
            }`}
            onClick={() => handelClick(item, i)}
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
    <div className="row latest__blog__shuffle__list">
      <AnimatePresence>
        {filterDatas?.map((item) => (
          <PostCardHorizontal key={item.id} data={item} />
        ))}
      </AnimatePresence>
    </div>
  );
};

const LatestPost = () => {
  return (
    <section className="latest__post section__space">
      <div className="container">
        <div className="latest__post__area">
          <div className="row">
            <div className="col-xl-8">
              <div className="left__wrap">
                {/*@TODO: Latest Post */}
                <Isotope url="allpost" Tags={Tags} Content={Content} />
                {/*@TODO: pagination here */}
                <Pagination />
              </div>
            </div>
            <div className="col-xl-4">
              <div className="right__wrap">
                <div className="blog__newsletter">
                  {/*@TODO: Subscribe card */}
                  <SubscribeCard />
                </div>
                <div className="blog__popular">
                  <h5 className="neutral-top">Popular Articles</h5>
                  {articleData.slice(3, 6).map((item) => {
                    const { id, img, title } = item;
                    return (
                      <div key={id} className="blog__popular__single">
                        <Link href="/blog/{id}" className="thumbnail">
                          <Image src={img} alt={title} />
                        </Link>
                        <div className="blog__popular__single-content">
                          <h6>
                            <Link href="/blog/{id}">{title}</Link>
                          </h6>
                          <Link href="/blog/{id}">
                            Read More <BsArrowRight />
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="blog__popular">
                  <h5 className="neutral-top">Read More</h5>
                  {[
                    ["Exited projects", "07"],
                    ["How to", "04"],
                    ["Insider updates", "09"],
                    ["News", "23"],
                    ["Tips and tricks", "16"],
                    ["Get inspired", "13"],
                    ["Invesments", "22"],
                  ].map(([title, totlaItem]) => (
                    <div key={title} className="blog__popular__single">
                      <div className="categories">
                        <h6>
                          <Link href="/blog">– {title}</Link>
                        </h6>
                        <h6>
                          <Link href="/blog">({totlaItem})</Link>
                        </h6>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestPost;
