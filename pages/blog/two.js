import Banner from "../../components/blog/Banner";
import BlogOverview from "../../components/blog/BlogOverview";
import LatestPost from "../../components/blog/two/LatestPost";
import Breadcrumb from "../../components/common/Breadcrumb";

const Two = () => {
  return (
    <>
      <Banner title="Blog">
        <Breadcrumb
          breadcrumbs={[
            ["Home", "/"],
            ["Pages", "#"],
            ["Blog", "/blog"],
          ]}
        />
      </Banner>
      <BlogOverview />
      <LatestPost />
    </>
  );
};

export default Two;
