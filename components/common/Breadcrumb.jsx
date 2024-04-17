import Link from "next/link";

const Breadcrumb = ({ breadcrumbs = [] }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {breadcrumbs?.map(([itm, link], i, arr) => (
          <li
            key={itm}
            className={`breadcrumb-item ${i === arr.length - 1 && "active"}`}
          >
            {i !== arr.length - 1 ? <Link href={link}>{itm}</Link> : itm}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
