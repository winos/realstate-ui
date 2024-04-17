import { useCallback, useEffect, useState } from "react";

const Isotope = ({ Tags, Content, url }) => {
  const [projects, setProjects] = useState([]);
  const [filterDatas, setFilterDatas] = useState([]);
  const [itemCatagory, setItemCatagory] = useState([]);

  const fetchData = useCallback(async () => {
    const res = await fetch(`/api/${url}`);
    const data = await res.json();
    setProjects(data);
    const categories = [
      "all",
      ...new Set(data.map((project) => project.category)),
    ];
    setItemCatagory(categories);
  }, [url]);

  const filterCategory = useCallback(
    (filterItem) => {
      const copyData = [...projects];

      if (filterItem) {
        if (filterItem === "all") {
          setFilterDatas(projects);
        } else {
          const filterData = copyData.filter(
            (one) => one.category === filterItem
          );
          setFilterDatas(filterData);
        }
        return;
      }

      setFilterDatas(copyData);
    },
    [projects]
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    filterCategory();
  }, [filterCategory, projects]);

  return (
    <>
      <Tags itemCatagory={itemCatagory} filterCategory={filterCategory} />
      <Content filterDatas={filterDatas} />
    </>
  );
};

export default Isotope;
