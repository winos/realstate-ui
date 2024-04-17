import { FaBars } from "react-icons/fa";

const CollapseSidebar = ({ setActivSidebar }) => {
  return (
    <div className="collapse__sidebar">
      <h4>Dashboard</h4>
      <button
        type="button"
        className="collapse__sidebar__btn bg-transparent"
        onClick={() => setActivSidebar(true)}
      >
        <FaBars />
      </button>
    </div>
  );
};

export default CollapseSidebar;
