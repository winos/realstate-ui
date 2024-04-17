import { Footer, Header } from "../../components/dashboard";
import AccountBody from "../../components/dashboard/account/AccountBody";
import ScrollToTop from "../../components/scrollToTop/ScrollToTop";

const Account = () => {
  return (
    <>
      <Header />

      <AccountBody />

      <Footer />

      <ScrollToTop />
    </>
  );
};

export default Account;

Account.getLayout = function getLayout(page) {
  return <>{page}</>;
};
