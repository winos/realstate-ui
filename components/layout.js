import Footer from "./footer/Footer";
import NavBar from "./navBar/NavBar";
import Preloader from "./preloader/Preloader";
import ScrollToTop from "./scrollToTop/ScrollToTop";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />

      {/* Scroll To Top */}
      <ScrollToTop />

      {/* Pre Loader */}
      <Preloader />
    </>
  );
};

export default Layout;
