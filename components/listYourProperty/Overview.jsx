import Image from "next/image";
import exp from "/public/images/icons/exp.png";
import served from "/public/images/icons/served.png";
import successs from "/public/images/icons/successs.png";

const Overview = () => {
  return (
    <section className="list__overview">
      <div className="container">
        <div className="list__overview__area">
          <div className="row">
            {[
              [successs, 1000, "Successful High-Value Transactions"],
              [served, 5000, "Number of clients served"],
              [exp, 45, "Real estate investment experience"],
            ].map(([img, number, title]) => (
              <div key={number} className="col-sm-6 col-lg-4">
                <div className="list__overview__single shadow__effect">
                  <Image src={img} alt={title} />
                  <h3>
                    <span className="counterFour">{number}</span>+
                  </h3>
                  <p>{title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
