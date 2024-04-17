import { Footer, Header } from "../../components/dashboard";
import TransactionBody from "../../components/dashboard/transaction/TransactionBody";
import ScrollToTop from "../../components/scrollToTop/ScrollToTop";

const Transaction = () => {
  return (
    <>
      <Header />

      <TransactionBody />

      <Footer />

      <ScrollToTop />
    </>
  );
};

export default Transaction;

Transaction.getLayout = function getLayout(page) {
  return <>{page}</>;
};
