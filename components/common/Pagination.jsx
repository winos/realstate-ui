import Link from "next/link";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Pagination = (props) => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <Link href="#" className="page-link">
            <BsArrowLeft className="fs-5" />
          </Link>
        </li>
        <li className="page-item">
          <Link href="#" className="page-link">
            01
          </Link>
        </li>
        <li className="page-item">
          <Link href="#" className="page-link">
            02
          </Link>
        </li>
        <li className="page-item">
          <Link href="#" className="page-link">
            03
          </Link>
        </li>
        <li className="page-item">
          <Link href="#" className="page-link">
            <BsArrowRight className="fs-5" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
