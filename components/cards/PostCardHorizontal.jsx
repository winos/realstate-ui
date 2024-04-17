import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const PostCardHorizontal = ({ data }) => {
  const { img, title, description } = data;

  return (
    <motion.div
      key={data.id}
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="col-md-12 latest__blog__item"
    >
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
    </motion.div>
  );
};

export default PostCardHorizontal;
