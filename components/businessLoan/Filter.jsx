const Filter = () => {
  return (
    <div className="property__filter property__filter__two">
      <div className="container">
        <div className="property__filter__area">
          <div className="row d-flex align-items-end">
            <div className="col-lg-12 col-xl-6 col-xxl-4">
              <div className="property__search__wrapper">
                <p className="neutral-top">The name of the loan:</p>
                <form>
                  <div className="input">
                    <input
                      type="search"
                      name="property__search"
                      id="propertySearch"
                      placeholder="Search for properties"
                    />
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6 col-xl-6 col-xxl-3">
              <div className="property__select__wrapper">
                <p className="neutral-top">Loan Status</p>
                <select className="location__select">
                  <option data-display="Waiting for Investments">
                    Waiting for Investments
                  </option>
                  <option value="com">Completed</option>
                  <option value="pro">In Progress</option>
                  <option value="sub">Submitted</option>
                </select>
              </div>
            </div>
            <div className="col-lg-6 col-xl-6 col-xxl-3">
              <div className="property__select__wrapper">
                <p className="neutral-top">Rish className:</p>
                <select className="property__select">
                  <option data-display="All">All</option>
                  <option value="commercial">Commercial</option>
                  <option value="residential">Residential</option>
                </select>
              </div>
            </div>
            <div className="col-lg-12 col-xl-6 col-xxl-2">
              <button type="submit" className="button button--effect">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
