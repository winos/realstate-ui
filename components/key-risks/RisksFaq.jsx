import faqData from "../../data/faqData";
import SingleFaq from "../common/SingleFaq";

const RisksFaq = () => {
  return (
    <section className="faq key-faq section__space">
      <div className="container">
        <div className="key-faq__area">
          <div className="section__header">
            <h2 className="neutral-top">Key Risks</h2>
            <p className="neutral-bottom">
              Investing in property can be rewarding but, as with any investment
              there are risks. The Info Packs and the Investment Terms and
              Conditions cover the risks specific to a particular investment but
              it is also important that, before investing, you understand the
              following general risks..
            </p>
          </div>
          <div className="faq__group">
            <div className="accordion" id="accordionExampleFund">
              {faqData.map((ite, i) => (
                <SingleFaq key={ite.id} i={i} item={ite} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RisksFaq;
