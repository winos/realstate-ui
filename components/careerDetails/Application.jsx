import Image from "next/image";
import file from "/public/images/file.png";

const Application = () => {
  return (
    <div className="position__details__content" id="application">
      <form name="application__form">
        <div className="row">
          <div className="col-sm-6">
            <div className="input input--secondary">
              <label htmlFor="appFirstName">First Name*</label>
              <input
                type="text"
                name="app__first__name"
                id="appFirstName"
                placeholder="Enter Your First Name"
                required="required"
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="input input--secondary">
              <label htmlFor="appLastName">Last Name*</label>
              <input
                type="text"
                name="app__last__name"
                id="appLastName"
                placeholder="Enter Your Last Name"
                required="required"
              />
            </div>
          </div>
        </div>
        <div className="input input--secondary">
          <label htmlFor="appRegistrationMail">Email*</label>
          <input
            type="email"
            name="app__registration__email"
            id="appRegistrationMail"
            placeholder="Enter your email"
            required="required"
          />
        </div>
        <div className="input input--secondary input__alt">
          <label htmlFor="appNumber">Phone*</label>
          <div className="input-group">
            <div className="input-group-prepend current select">
              <select
                className="number__code__select fw-semibold"
                id="numberCodeSelect"
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
              type="tel"
              name="app__number"
              id="appNumber"
              placeholder="345-323-1234"
            />
          </div>
        </div>
        <div className="input__file__wrapper">
          <p>Resume*</p>
          <div className="input input__file">
            <div className="icon__box">
              <Image src={file} alt="Upload Avatar" />
            </div>
            <label htmlFor="uploadImage">
              <span>Upload a files</span> or drag and drop here
            </label>
            <input
              type="file"
              name="add_image"
              id="uploadImage"
              className="d-none"
            />
          </div>
        </div>
        <div className="cta__btn">
          <button type="submit" className="button button--effect">
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default Application;
