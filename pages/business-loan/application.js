import ApplicationBody from "../../components/application/ApplicationBody";
import ApplicationForm from "../../components/application/ApplicationForm";
import Banner from "../../components/common/Banner";
import Breadcrumb from "../../components/common/Breadcrumb";
import Faqs from "../../components/common/Faqs";
import faqData from "../../data/faqData";

const application = () => {
  return (
    <>
      {/* Banner start here */}
      <Banner title="Take a Loan" cls="banner__bg banner__application">
        <Breadcrumb
          breadcrumbs={[
            ["Home", "/"],
            ["Loan", "#"],
            ["Loan Aplication", "/business-loan/application"],
          ]}
        />
      </Banner>

      {/* application form here */}
      <ApplicationForm />

      {/* Application Body */}
      <ApplicationBody />

      {/* faq section */}
      <Faqs data={faqData} />
    </>
  );
};

export default application;
