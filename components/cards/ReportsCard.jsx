import Link from "next/link";
import { FaDownload } from "react-icons/fa";

const ReportsCard = () => {
  return (
    <>
      <h5>Reports</h5>
      <hr />
      <h6>Investment Note</h6>
      <p>Property Share&rsquo;s Detailed Investment Note</p>
      <Link href="/" className="button">
        DOWNLOAD INVESTMENT NOTE <FaDownload className="ms-1" />
      </Link>

      <h6>Legal Title Report</h6>
      <p>
        Detailed Report on the Title diligence of the property by Amarchand
        Mangaldas
      </p>
      <Link href="/" className="button">
        DOWNLOAD TITLE REPORT <FaDownload className="ms-1" />
      </Link>
    </>
  );
};

export default ReportsCard;
