import Image from "next/image";
import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";
import error from "/public/images/error.png";

const Custom404 = () => {
  return (
    <section className="error bg__img pos__rel over__hi">
      <div className="container">
        <div className="error__area">
          <div className="row d-flex align-items-center">
            <div className="col-lg-4">
              <div className="error__content">
                <h1>Oops!</h1>
                <h3>Page Not Found</h3>
                <p className="primary">
                  We can’t seem to find the page you’re looking for
                </p>
                <Link href="/" className="button button--effect">
                  Back To Home <HiArrowNarrowRight className="fs-4" />
                </Link>
              </div>
            </div>
            <div className="col-lg-8 d-none d-lg-block">
              <div className="error__thumb thumb__ltr">
                <Image src={error} alt="error" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Custom404;

Custom404.getLayout = function getLayout(page) {
  return <>{page}</>;
};
