import { Footer, Header } from "../../components/dashboard";
import PropertyBody from "../../components/dashboard/property/PropertyBody";
import ScrollToTop from "../../components/scrollToTop/ScrollToTop";

const Withdraw = () => {
  return (
    <>
      <Header />

      <PropertyBody />

      <Footer />

      <ScrollToTop />
    </>
  );
};

export default Withdraw;

Withdraw.getLayout = function getLayout(page) {
  return <>{page}</>;
};
