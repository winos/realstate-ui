import Image from "next/image";
import Link from "next/link";
import mastercard from "/public/images/mastercard.png";
import visa from "/public/images/visa.png";

const Billing = () => {
  return (
    <div className="account-content">
      <div className="account-content-single mt-0">
        <div className="intro">
          <h5>Payment Methods</h5>
          <Link href="#">Add Method</Link>
        </div>
        <div className="account-content-single__inner">
          <div className="content content-alt">
            <Image src={visa} alt="Visa" />
            <div>
              <h6>Visa ending in 1234</h6>
              <p>Expires 1/2025</p>
            </div>
          </div>
          <div className="content-right">
            <p>Default</p>
          </div>
        </div>
        <div className="account-content-single__inner">
          <div className="content content-alt">
            <Image src={mastercard} alt="Mastercard" />
            <div>
              <h6>Mastercard ending in 1234</h6>
              <p>Expires 1/2025</p>
            </div>
          </div>
        </div>
      </div>
      <div className="investment-table">
        <div className="intro">
          <h5>Invoices</h5>
        </div>
        <div className="table-wrapper">
          <table>
            <tbody>
              <tr>
                <th>INVOICE ID</th>
                <th>AMOUNT</th>
                <th>DATE</th>
                <th>STATUS</th>
              </tr>
              <tr>
                <td>Invoice #123</td>
                <td>$500.00</td>
                <td>18.03.2022</td>
                <td>
                  <span className="process"></span>Processing
                </td>
              </tr>
              <tr>
                <td>Invoice #123</td>
                <td>$500.00</td>
                <td>18.03.2022</td>
                <td>
                  <span className="paid"></span>Paid
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Billing;
