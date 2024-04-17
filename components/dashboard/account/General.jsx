import Image from "next/image";
import Link from "next/link";
import ryan from "/public/images/team/ryan.png";

const General = () => {
  return (
    <div className="account-content">
      <div className="avatar-wrapper">
        <div className="avatar-content">
          <div className="avatar">
            <Image src={ryan} alt="Ryan" />
          </div>
          <div className="avatar-content__guideline">
            <h6>Your Avatar</h6>
            <p>Profile picture size: 400px x 400px</p>
          </div>
        </div>
        <form>
          <input type="file" name="avatar_upload" id="avatarUpload" />
          <label htmlFor="avatarUpload">Upload new avatar</label>
        </form>
      </div>
      <form action="#" name="save__from" method="post" className="save__form">
        <div className="row">
          <div className="col-sm-6">
            <div className="input input--secondary">
              <label htmlFor="saveFirstName">First Name</label>
              <input
                type="text"
                name="save__first__name"
                id="saveFirstName"
                placeholder="First Name"
                required="required"
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="input input--secondary">
              <label htmlFor="saveLastName">Last Name</label>
              <input
                type="text"
                name="save__last__name"
                id="saveLastName"
                placeholder="Last Name"
                required="required"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="input input--secondary">
              <label htmlFor="saveEmail">Email</label>
              <input
                type="email"
                name="save_email"
                id="saveEmail"
                placeholder="Enter Your Email"
                required="required"
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="input input--secondary">
              <label htmlFor="savePhone">Phone</label>
              <input
                type="number"
                name="save_phone"
                id="savePhone"
                placeholder="345-323-1234"
                required="required"
              />
            </div>
          </div>
        </div>
        <div>
          <button type="submit" className="button button--effect">
            Save Changes
          </button>
        </div>
      </form>
      <div className="account-content-single">
        <div className="intro">
          <h5>Notifications </h5>
        </div>
        <div className="account-content-single__inner">
          <div className="content">
            <h6>Announcements</h6>
            <p>Occasional announcements of new features</p>
          </div>
          <div className="content-right">
            <div className="switch-wrapper">
              <input type="checkbox" id="announcement" />
              <label htmlFor="announcement"></label>
            </div>
          </div>
        </div>
        <div className="account-content-single__inner">
          <div className="content">
            <h6>Feedback requests</h6>
            <p>Occasional requests for feedback</p>
          </div>
          <div className="content-right">
            <div className="switch-wrapper">
              <input type="checkbox" id="feedback" />
              <label htmlFor="feedback"></label>
            </div>
          </div>
        </div>
        <div className="account-content-single__inner">
          <div className="content">
            <h6>Billing and account</h6>
            <p>Transactional emails and account notifications</p>
          </div>
          <div className="content-right">
            <p>Legally Obligated</p>
          </div>
        </div>
      </div>
      <div className="delete-account">
        <div className="delete-content">
          <h6>Delete your account</h6>
          <p className="secondary">
            Before deleting your account, please note that if you delete your
            account, Dash cannot recover it.
          </p>
        </div>
        <Link href="#" className="button button--effect">
          Delete
        </Link>
      </div>
    </div>
  );
};

export default General;
