import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import latestData from "../../data/latestData";

const LatestPost = () => {
  return (
    <section className="latest__post__features section__space bg__img">
      <div className="container">
        <div className="latest__post__features__area wow fadeInUp">
          <div className="title__with__cta">
            <div className="row d-flex align-items-center">
              <div className="col-lg-8">
                <h2>Latest Posts</h2>
              </div>
              <div className="col-lg-4">
                <div className="text-start text-lg-end">
                  <Link
                    href="/blog"
                    className="button button--secondary button--effect"
                  >
                    Browse All Posts
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row altr">
            {latestData.slice(3, 6).map((item) => {
              const { id, title, img, description } = item;
              return (
                <div key={id} className="col-md-6 col-xl-4">
                  <div className="featured__large__post">
                    <Link href="/blog/{id}" className="thumbnail">
                      <Image src={img} alt={title} />
                    </Link>
                    <div className="blog__content">
                      <h5>
                        <Link href="/blog/{id}">{title}</Link>
                      </h5>
                      <p>{description.slice(0, 63)}</p>
                      <Link href="/blog/{id}">
                        Read More <BsArrowRight />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestPost;
