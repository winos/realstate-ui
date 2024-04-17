const Loan = () => {
  return (
    <>
      <h4>About the loan</h4>
      <p>Purpose of the loan To increase the company&rsquo;s working capital</p>
      <div className="tabular__group">
        <div className="single">
          <p>Amount of funding</p>
          <p>40,000 €</p>
        </div>
        <div className="single">
          <p>Risk</p>
          <p>C (Higher)</p>
        </div>
        <div className="single">
          <p>Payment of interest</p>
          <p>Every Month</p>
        </div>
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
          <p>collateral</p>
          <p>Guarantes/ Surety</p>
        </div>
        <div className="single">
          <p>Mortgage Rank</p>
          <p>Other Pledge</p>
        </div>
      </div>
      <p className="neutral-bottom">
        The purpose of the financing is to partially refinance an existing loan
        on the Nordstreet platform. Refinancing is requested to adjust financial
        flows.{" "}
      </p>
    </>
  );
};

export default Loan;
