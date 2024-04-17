const Tags = ({ itemCatagory, filterCategory }) => {
  return (
    <div className="d-flex justify-content-center">
      <div className="open__tab">
        {itemCatagory.map((item, i) => (
          <button
            key={i}
            type="button"
            className="button button--effect open__tab__btn text-capitalize"
            onClick={() => filterCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tags;
