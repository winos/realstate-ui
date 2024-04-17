import Image from "next/image";
import Link from "next/link";
import desktop from "/public/images/icons/desktop.png";
import mobile from "/public/images/icons/mobile.png";
import tablet from "/public/images/icons/tablet.png";

const Security = () => {
  return (
    <div className="account-content" id="security">
      <div className="two-factor-wrapper">
        <div className="two-factor-content">
          <h6>Two Factor Authentication</h6>
          <p>
            Two-Factor Authentication (2FA) can be used to help protect your
            account
          </p>
        </div>
        <Link href="#" className="button button--effect">
          Enable
        </Link>
      </div>
      <div className="change__pass">
        <div className="row neutral-row">
          <div className="col-md-6">
            <div className="change__pass-content column__space">
              <h5>Change Password</h5>
              <p>
                You can always change your password for security reasons or
                reset your password in case you forgot it.
              </p>
              <Link href="#" className="button button--effect">
                Forgot Password?
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <form action="#" name="change__pass" method="post">
              <div className="input input--secondary">
                <label htmlFor="currentPass">Current Password</label>
                <input
                  type="password"
                  name="current_pass"
                  id="currentPass"
                  placeholder="Current Password"
                  required="required"
                />
              </div>
              <div className="input input--secondary">
                <label htmlFor="newPass">New Password</label>
                <input
                  type="password"
                  name="new_pass"
                  id="newPass"
                  placeholder="New Password"
                  required="required"
                />
              </div>
              <div className="input input--secondary">
                <label htmlFor="conNewPass">Confirm New Password</label>
                <input
                  type="password"
                  name="con_new_pass"
                  id="conNewPass"
                  placeholder="Confirm Password"
                  required="required"
                />
              </div>
              <div>
                <button type="submit" className="button button--effect">
                  Update Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="account-content-single account-content-single__alt">
        <div className="intro">
          <h5>Additional Security</h5>
          <Link href="#">Add Method</Link>
        </div>
        <div className="account-content-single__inner">
          <div className="content">
            <h6>SMS recovery</h6>
            <p>Number ending with 1234</p>
          </div>
          <div className="content-right">
            <Link href="#" className="button button--effect">
              Disable SMS
            </Link>
          </div>
        </div>
        <div className="account-content-single__inner">
          <div className="content">
            <h6>Autheticator App</h6>
            <p>Google Authenticator</p>
          </div>
          <div className="content-right">
            <Link href="#" className="button button--effect alt">
              Configure
            </Link>
          </div>
        </div>
        <div className="account-content-single__inner">
          <div className="content">
            <h6>SSL Certificate</h6>
            <p>Secure Sockets Layer</p>
          </div>
          <div className="content-right">
            <Link href="#" className="button button--effect alt">
              Configure
            </Link>
          </div>
        </div>
      </div>
      <div className="account-content-single account-content-single__alt">
        <div className="intro">
          <h5>Your devices</h5>
          <Link href="#">Log out on all devices</Link>
        </div>
        <div className="account-content-single__inner account-content-single__inner-alt">
          <div className="content">
            <Image src={mobile} alt="Mobile" />
            <div className="content__alt">
              <h6>Iphone 13 Pro Max</h6>
              <p>New York City · June 20 at 14:00</p>
            </div>
          </div>
          <div className="content-right">
            <Link href="/login" className="button button--effect alt">
              Log Out
            </Link>
          </div>
        </div>
        <div className="account-content-single__inner account-content-single__inner-alt">
          <div className="content">
            <Image src={tablet} alt="Tablet" />
            <div className="content__alt">
              <h6>iPad Pro</h6>
              <p>New York City · June 20 at 14:00</p>
            </div>
          </div>
          <div className="content-right">
            <Link href="/login" className="button button--effect alt">
              Log Out
            </Link>
          </div>
        </div>
        <div className="account-content-single__inner account-content-single__inner-alt">
          <div className="content">
            <Image src={desktop} alt="Desktop" />
            <div className="content__alt">
              <h6>iMac OSX</h6>
              <p>New York City · June 20 at 14:00</p>
            </div>
          </div>
          <div className="content-right">
            <Link href="/login" className="button button--effect alt">
              Log Out
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
