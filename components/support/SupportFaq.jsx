import SingleFaq from "../common/SingleFaq";

const SupportFaq = ({ faqData }) => {
  return (
    <section className="faq section__space border">
      <div className="container">
        <div className="faq__group">
          <div className="accordion">
            {/* Single Faq */}
            {faqData?.map((item, i) => (
              <SingleFaq i={i} key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportFaq;
