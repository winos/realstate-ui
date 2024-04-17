const SupportHeader = ({ receiveFilterBy, filterBy }) => {
  const itemHandler = (e) => {
    receiveFilterBy(e.target.name);
  };

  return (
    <section className="support__banner bg__img clear__top">
      <div className="container">
        <div className="support__banner__area">
          <div className="support__banner__inner">
            <h1 className="neutral-top">How can we help?</h1>
            <div className="input input--secondary">
              <input
                type="text"
                name="sear"
                id="sear_faq"
                placeholder="Search"
              />
            </div>
            <div className="faq__tab">
              <button
                type={"button"}
                name="start"
                onClick={(e) => itemHandler(e)}
                className={`faq__tab__btn bg-transparent ${
                  filterBy === "start" && "faq__tab__btn__active"
                }`}
              >
                Getting Started
              </button>
              <button
                type={"button"}
                name="funds"
                onClick={(e) => itemHandler(e)}
                className={`faq__tab__btn bg-transparent ${
                  filterBy === "funds" && "faq__tab__btn__active"
                }`}
              >
                Adding Funds
              </button>
              <button
                type={"button"}
                name="investing"
                onClick={(e) => itemHandler(e)}
                className={`faq__tab__btn bg-transparent ${
                  filterBy === "investing" && "faq__tab__btn__active"
                }`}
              >
                Investing
              </button>
              <button
                type={"button"}
                name="security"
                onClick={(e) => itemHandler(e)}
                className={`faq__tab__btn bg-transparent ${
                  filterBy === "security" && "faq__tab__btn__active"
                }`}
              >
                Security
              </button>
              <button
                type={"button"}
                name="taxes"
                onClick={(e) => itemHandler(e)}
                className={`faq__tab__btn bg-transparent ${
                  filterBy === "taxes" && "faq__tab__btn__active"
                }`}
              >
                Taxes
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportHeader;
