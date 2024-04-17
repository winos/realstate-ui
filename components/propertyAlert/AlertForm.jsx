const AlertForm = () => {
  return (
    <section className="alert__newsletter section__space__bottom">
      <div className="container">
        <div className="alert__newsletter__area">
          <div className="section__header">
            <h5 className="neutral-top">Property Alert</h5>
            <h2>
              Never Miss <br />A New Property!
            </h2>
            <p className="neutral-bottom">
              Get the Revest Property Alert for a complete summary of our new
              properties.
            </p>
          </div>
          <form action="#" name="property__alert__from" method="post">
            <div className="row">
              <div className="col-sm-6">
                <div className="input input--secondary">
                  <label htmlFor="alertFirstName">First Name*</label>
                  <input
                    type="text"
                    name="alert__first__name"
                    id="alertFirstName"
                    placeholder="Enter Your First Name"
                    required="required"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="input input--secondary">
                  <label htmlFor="alertLastName">Last Name*</label>
                  <input
                    type="text"
                    name="alert__last__name"
                    id="alertLastName"
                    placeholder="Enter Your Last Name"
                    required="required"
                  />
                </div>
              </div>
            </div>
            <div className="input input--secondary">
              <label htmlFor="alertRegistrationMail">Email*</label>
              <input
                type="email"
                name="alert__registration__email"
                id="alertRegistrationMail"
                placeholder="Enter your email"
                required="required"
              />
            </div>
            <div className="input input--secondary input__alt">
              <label htmlFor="alertNumber">Phone*</label>
              <div className="input-group">
                <div className="input-group-prepend current select">
                  <select
                    className="number__code__select w-100 h-100 fw-semibold"
                    id="numberCodeSelectAlert"
                  >
                    <option value="0">+1</option>
                    <option value="1">+2</option>
                    <option value="2">+3</option>
                    <option value="3">+4</option>
                    <option value="4">+5</option>
                    <option value="5">+6</option>
                  </select>
                </div>
                <input
                  type="number"
                  name="alert__number"
                  id="alertNumber"
                  required="required"
                  placeholder="345-323-1234"
                />
              </div>
            </div>
            <div className="regi__type">
              <label>Location*</label>
              <div className="select px-1 px-sm-3">
                <select className="type__select w-100 h-100" id="coutrySelect">
                  <option value="particular">Desired Location</option>
                  <option value="particular">Australia</option>
                  <option value="individual">New Zeeland</option>
                  <option value="individual">Japan</option>
                  <option value="individual">China</option>
                </select>
              </div>
            </div>
            <div className="input__button">
              <button type="submit" className="button button--effect">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AlertForm;
