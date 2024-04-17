import InvestmentCard from "../cards/InvestmentCard";
import RevestStatistic from "./RevestStatistic";

const ApplicationBody = () => {
  return (
    <section className="investment__amount section__space__top bg__img">
      <div className="container">
        <div className="investment__amount__area">
          {/* invest cart here */}
          <InvestmentCard />
        </div>

        {/* Revest Statistic */}
        <RevestStatistic />
      </div>
    </section>
  );
};

export default ApplicationBody;
