import SingleFaq from "./SingleFaq";

const Faqs = ({ data }) => {
  return (
    <section className="faq section__space">
      <div className="container">
        <div className="faq__area">
          <div className="section__header">
            <h2 className="neutral-top">Frequently Asked Questions</h2>
          </div>
          <div className="faq__group">
            <div className="accordion" id="accordionExampleFund">
              {/* Single Faq */}
              {data.map((item, i) => (
                <SingleFaq key={item.id} i={i} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
