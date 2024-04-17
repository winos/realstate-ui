import { Footer, Header } from "../../components/dashboard";
import InvestmentBody from "../../components/dashboard/investments/InvestmentBody";
import ScrollToTop from "../../components/scrollToTop/ScrollToTop";

const Investments = () => {
  return (
    <>
      <Header />

      <InvestmentBody />

      <Footer />

      <ScrollToTop />
    </>
  );
};

export default Investments;

Investments.getLayout = function getLayout(page) {
  return <>{page}</>;
};
