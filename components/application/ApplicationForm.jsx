import Link from "next/link";

const ApplicationForm = () => {
  return (
    <section className="alert__newsletter alert__newsletter__alt">
      <div className="container">
        <div className="alert__newsletter__area">
          <div className="section__header">
            <h5 className="neutral-top">Fill out an application</h5>
            <h2>Grow Your Business Faster!</h2>
            <p className="neutral-bottom">
              Getting a business loan secured through collateral is much easier
              and faster with Revest
            </p>
          </div>
          <form action="#" name="property__alert__from" method="post">
            <div className="input input--secondary">
              <label htmlFor="alertAltcom">Company Name*</label>
              <input
                type="email"
                name="alertAlt__com"
                id="alertAltcom"
                placeholder="Enter Your Company"
                required="required"
              />
            </div>
            <div className="input input--secondary">
              <label htmlFor="alertAltRegistrationMail">Company Email*</label>
              <input
                type="email"
                name="alertAlt__registration__email"
                id="alertAltRegistrationMail"
                placeholder="Enter Your Email"
                required="required"
              />
            </div>
            <div className="input input--secondary input__alt">
              <label htmlFor="alertAltNumber">Phone*</label>
              <div className="input-group">
                <div className="input-group-prepend select current">
                  <select
                    className="number__code__select w-100 h-100 fw-semibold"
                    id="numberAltCodeSelectAlert"
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
                  name="alertAlt__number"
                  id="alertAltNumber"
                  required="required"
                  placeholder="345-323-1234"
                />
              </div>
            </div>
            <div className="regi__type">
              <label>Amount of money required (not less than 5000 €) **</label>
              <div className="select px-3">
                <select
                  className="type__select w-100 h-100"
                  id="coutryAltSelect"
                >
                  <option value="5">5000</option>
                  <option value="4">4000</option>
                  <option value="3">3000</option>
                  <option value="2">2000</option>
                  <option value="1">1000</option>
                </select>
              </div>
            </div>
            <div className="checkbox">
              <label>
                <input
                  type="checkbox"
                  id="condtion"
                  name="accept__condition"
                  value="agree"
                />
                <span className="checkmark"></span>I have read and I agree to
                the <Link href="/privacy-policy">Privacy Policy</Link>
              </label>
            </div>
            <div className="input__button">
              <button type="submit" className="button button--effect">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
