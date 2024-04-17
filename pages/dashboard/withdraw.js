import { Footer, Header } from "../../components/dashboard";
import WithdrawBody from "../../components/dashboard/withdraw/WithdrawBody";
import ScrollToTop from "../../components/scrollToTop/ScrollToTop";

const Withdraw = () => {
  return (
    <>
      <Header />

      <WithdrawBody />

      <Footer />

      <ScrollToTop />
    </>
  );
};

export default Withdraw;

Withdraw.getLayout = function getLayout(page) {
  return <>{page}</>;
};
