import Link from "next/link";

const RegistrationForm = () => {
  return (
    <section className="registration clear__top">
      <div className="container">
        <div className="registration__area">
          <h4 className="neutral-top">Registration</h4>
          <p>
            Already Registered? <Link href="/login">Login</Link>
          </p>
          <form name="registration__form">
            <div className="regi__type">
              <label htmlFor="typeSelect">You are?</label>
              <div className="type__select select px-1 px-sm-3">
                <select className="w-100 h-100 text-capitalize" id="typeSelect">
                  <option value="particular">Particular</option>
                  <option value="individual">Individual</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="input input--secondary">
                  <label htmlFor="firstName">First Name*</label>
                  <input
                    type="text"
                    name="first__name"
                    id="firstName"
                    placeholder="First Name"
                    required="required"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="input input--secondary">
                  <label htmlFor="lastName">Last Name*</label>
                  <input
                    type="text"
                    name="last__name"
                    id="lastName"
                    placeholder="Last Name"
                    required="required"
                  />
                </div>
              </div>
            </div>
            <div className="input input--secondary">
              <label htmlFor="registrationMail">Email*</label>
              <input
                type="email"
                name="registration__email"
                id="registrationMail"
                placeholder="Enter your email"
                required="required"
              />
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="input input--secondary">
                  <label htmlFor="regiPass">Password*</label>
                  <input
                    type="password"
                    name="regi__pass"
                    id="regiPass"
                    placeholder="Password"
                    required="required"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="input input--secondary">
                  <label htmlFor="passCon">Password Confirmation*</label>
                  <input
                    type="password"
                    name="pass__con"
                    id="passCon"
                    placeholder="Password Confirm"
                    required="required"
                  />
                </div>
              </div>
            </div>
            <div className="checkbox">
              <label>
                <input
                  type="checkbox"
                  id="condtion"
                  name="accept__condition"
                  value="agree"
                  required
                />
                <span className="checkmark"></span>I have read and I agree to
                the <Link href="/key-risks"> Privacy Policy</Link>
              </label>
            </div>
            <div className="input__button">
              <button type="submit" className="button button--effect">
                Create My Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
