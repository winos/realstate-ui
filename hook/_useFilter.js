import { useState } from "react";

const useFilter = (
  featuredData,
  searchField,
  locationField,
  propertyTypeField
) => {
  const [filteredData, setFilteredData] = useState(featuredData);
  const [locationFilterData, setLocationFilteredData] = useState("");
  const [propertyTypeFilterData, setPropertyTypeFilteredData] = useState("");

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const result = featuredData.filter((item) =>
      item[searchField].toLowerCase().includes(searchTerm)
    );

    setFilteredData(result);
  };

  const handleLocationChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();

    if (propertyTypeFilterData) {
      const result = propertyTypeFilterData.filter((item) =>
        item[locationField].toLowerCase().includes(searchTerm)
      );

      setFilteredData(result);
    } else {
      const result = featuredData.filter((item) =>
        item[locationField].toLowerCase().includes(searchTerm)
      );

      setLocationFilteredData(result);
      setFilteredData(result);
    }
  };

  const handlePropertyTypeChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();

    if (locationFilterData) {
      const result = locationFilterData.filter((item) =>
        item[propertyTypeField].toLowerCase().includes(searchTerm)
      );

      setFilteredData(result);
    } else {
      const result = featuredData.filter((item) =>
        item[propertyTypeField].toLowerCase().includes(searchTerm)
      );
      setPropertyTypeFilteredData(result);
      setFilteredData(result);
    }
  };

  return {
    filteredData,
    handleSearch,
    handleLocationChange,
    handlePropertyTypeChange,
  };
};

export default useFilter;
