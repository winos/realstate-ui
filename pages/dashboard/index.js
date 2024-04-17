import { Footer, Header } from "../../components/dashboard";
import HomeBody from "../../components/dashboard/home/HomeBody";
import ScrollToTop from "../../components/scrollToTop/ScrollToTop";

const Dashboard = () => {
  return (
    <>
      <Header />

      <HomeBody />

      <Footer />

      <ScrollToTop />
    </>
  );
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page) {
  return <>{page}</>;
};
