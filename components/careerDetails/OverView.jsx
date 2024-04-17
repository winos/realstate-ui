import Link from "next/link";
import { FaShareAlt } from "react-icons/fa";

const OverView = () => {
  return (
    <div className="position__details__content" id="overview">
      <div className="text__group">
        <div className="d-flex align-items-center justify-content-between">
          <h3>Description</h3>
          <Link href="/career/{id}">
            Share this job{" "}
            <i>
              <FaShareAlt />
            </i>
          </Link>
        </div>
        <p className="neutral-bottom">
          We are currently seeking someone in Investor Relations Support to join
          our founding team as we rapidly grow our client base. You will report
          directly to our Head of Investor Relations and will spend the majority
          of your time interacting with our investors to build new
          relationships, help them onboard onto the Revest platform and
          generally ensure they receive a world-className experience. If you
          enjoy a fast-paced environment, an energetic and social culture, and
          are looking for an opportunity where you can scale your career
          alongside a rapidly growing company, then this could be for you.
        </p>
      </div>
      <div className="text__group">
        <h3>Responsibilities</h3>
        <ul>
          <li>
            Help strengthen and support relationships with Revest’s existing
            clients, and generally delight Revest&rsquo;s clients in every way
            possible.
          </li>
          <li>Expertly respond to and address client questions.</li>
          <li>
            {" "}
            Manage & execute new investor onboarding, evaluate a client&rsquo;s
            corporate entities & legal structures to determine onboarding and
            due diligence requirements. Gather accurate due diligence
            information from your clients in an efficient and effective way with
            the client experience being front of mind.
          </li>
          <li>
            Assist the Head of Investor Relations and Investor Relations
            Executives to nurture leads and follow up with investors in a
            systematic and timely manner.
          </li>
          <li className="neutral-bottom">
            Work with the technology and compliance team to build processes and
            technology that streamlines and improves our customer onboarding
            journey.
          </li>
        </ul>
      </div>
      <div className="text__group">
        <h3>Requirements</h3>
        <ul>
          <li>
            Help strengthen and support relationships with Revest’s existing
            clients, and generally delight Revest&rsquo;s clients in every way
            possible.
          </li>
          <li>Expertly respond to and address client questions.</li>
          <li>
            {" "}
            Manage & execute new investor onboarding, evaluate a client&rsquo;s
            corporate entities & legal structures to determine onboarding and
            due diligence requirements. Gather accurate due diligence
            information from your clients in an efficient and effective way with
            the client experience being front of mind.
          </li>
          <li>
            Assist the Head of Investor Relations and Investor Relations
            Executives to nurture leads and follow up with investors in a
            systematic and timely manner.
          </li>
          <li className="neutral-bottom">
            Work with the technology and compliance team to build processes and
            technology that streamlines and improves our customer onboarding
            journey.
          </li>
        </ul>
      </div>
      <div className="text__group">
        <h3>Benefits</h3>
        <ul>
          <li>
            Help strengthen and support relationships with Revest’s existing
            clients, and generally delight Revest&rsquo;s clients in every way
            possible.
          </li>
          <li>Expertly respond to and address client questions.</li>
          <li>
            {" "}
            Manage & execute new investor onboarding, evaluate a client&rsquo;s
            corporate entities & legal structures to determine onboarding and
            due diligence requirements. Gather accurate due diligence
            information from your clients in an efficient and effective way with
            the client experience being front of mind.
          </li>
          <li>
            Assist the Head of Investor Relations and Investor Relations
            Executives to nurture leads and follow up with investors in a
            systematic and timely manner.
          </li>
          <li className="neutral-bottom">
            Work with the technology and compliance team to build processes and
            technology that streamlines and improves our customer onboarding
            journey.
          </li>
        </ul>
      </div>
      <div className="cta__btn">
        <Link
          href="/career/{id}"
          className="button button--effect job__application__btn button--secondary"
        >
          Apply for this Job
        </Link>
      </div>
    </div>
  );
};

export default OverView;
