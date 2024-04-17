import { FaSearch } from "react-icons/fa";

const Filter = ({
  filteredData,
  handleLocationChange,
  handlePropertyTypeChange,
  handleSearch,
}) => {
  return (
    <div className="property__filter">
      <div className="container">
        <div className="property__filter__area">
          <div className="row d-flex align-items-center">
            <div className="col-lg-12 col-xl-6">
              <div className="property__search__wrapper">
                <form>
                  <div className="input">
                    <input
                      type="search"
                      name="property__search"
                      id="propertySearch"
                      onChange={handleSearch}
                      placeholder="Search for properties"
                    />
                    <i>
                      <FaSearch />
                    </i>
                  </div>
                  <button type="submit" className="button button--effect">
                    Search
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-6 col-xl-3">
              <div className="property__select__wrapper select px-5">
                <span className="location__select"></span>
                <select
                  className="border-1 w-100 text-capitalize"
                  onChange={handleLocationChange}
                >
                  <option data-display="Location">Select Location</option>
                  <option value="angeles">Los Angeles</option>
                  <option value="francis">San Francisco, CA</option>
                  <option value="weldon">The Weldon</option>
                  <option value="diego">San Diego</option>
                </select>
              </div>
            </div>
            <div className="col-lg-6 col-xl-3">
              <div className="property__select__wrapper select px-5">
                <span className="property__select"></span>
                <select
                  className="border-1 w-100 text-capitalize"
                  onChange={handlePropertyTypeChange}
                >
                  <option data-display="Property">Property Type</option>
                  <option value="commercial">Commercial</option>
                  <option value="residential">Residential</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
