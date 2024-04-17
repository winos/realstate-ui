import { useEffect, useRef } from "react";
import { BsChevronDoubleUp } from "react-icons/bs";

const ScrollToTop = () => {
  const scrollTop = useRef();

  const goToTopHandler = () => {
    window.scroll({
      top: 0,
      left: 0,
    });
  };

  useEffect(() => {
    goToTopHandler();
  });

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        scrollTop.current?.classList.add("active");
      } else {
        scrollTop.current?.classList.remove("active");
      }
    });
  }, []);

  return (
    <button
      type={"button"}
      onClick={goToTopHandler}
      className="scrollToTop"
      ref={scrollTop}
    >
      <i>
        <BsChevronDoubleUp />
      </i>
    </button>
  );
};

export default ScrollToTop;
