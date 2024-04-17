const TermAndPayment = () => {
  return (
    <>
      <h4>Loan term and repayment</h4>
      <div className="tabular__group">
        <div className="single">
          <p>Loan Repayment</p>
          <p>Every Month</p>
        </div>
        <div className="single">
          <p>Loan Repayment postponement</p>
          <p>3</p>
        </div>
        <div className="single">
          <p>Loan Period</p>
          <p>24 Months</p>
        </div>
        <div className="single">
          <p>Minimum Loan Period</p>
          <p>4 Months</p>
        </div>
        <div className="single">
          <p>Estimated start date of the loan</p>
          <p>2022-01-28</p>
        </div>
        <div className="single">
          <p>Estimated start date of the loan</p>
          <p>2022-01-28</p>
        </div>
      </div>
      <p className="neutral-bottom">
        If the Debtor repays the Loan earlier than after the specified minimum
        loan period, it undertakes to pay interest to the Lender for the entire
        specified minimum period.
      </p>
    </>
  );
};

export default TermAndPayment;
