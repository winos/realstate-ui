import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import articleData from "./articleData";

const BlogOverview = () => {
  const blogPost = articleData[0];
  return (
    <section className="blog__overview section__space">
      <div className="container">
        <div className="blog__overview__area">
          <div className="search__bar">
            <h2>Articles & Resources</h2>
            <form>
              <div>
                <input
                  type="text"
                  name="post_search"
                  id="postSearch"
                  placeholder="Search for articles"
                  required="required"
                />
                <i>
                  <FaSearch />
                </i>
              </div>
              <button type="submit" className="button">
                Search
              </button>
            </form>
          </div>
          <div className="row">
            <div className="col-lg-7">
              <div className="featured__large__post">
                <Link href="/blog/{id}" className="thumbnail">
                  <Image src={blogPost.img} alt={blogPost.title} />
                </Link>
                <div className="blog__content">
                  <h4>
                    <Link href="/blog/{id}">{blogPost.title}</Link>
                  </h4>
                  <p>{blogPost.description}</p>
                  <Link href="/blog/{id}">
                    Read More <BsArrowRight />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="featured__post">
                {articleData.slice(1, 5).map((item) => {
                  const { id, img, title } = item;
                  return (
                    <div key={id} className="featured__post-single">
                      <Link href="/blog/{id}" className="thumbnail">
                        <Image src={img} alt={title} />
                      </Link>
                      <div className="featured__post-single-content">
                        <h5>
                          <Link href="/blog/{id}">{title}</Link>
                        </h5>
                        <Link href="/blog/{id}">
                          Read More <BsArrowRight />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogOverview;
