const loyaltyData = [
  {
    id: "23@!hs",
    title: "STARTER",
    disc: 10,
    description:
      "10% discount when participating in 25 opportunities or at least €25,000 invested.",
  },
  {
    id: "21@!hs",
    title: "PREMIUM",
    disc: 20,
    description:
      "20% discount when participating in 25 opportunities or at least €25,000 invested.",
  },
  {
    id: "2a1@!hs",
    title: "PLATINUM",
    disc: 30,
    description:
      "30% discount when participating in 25 opportunities or at least €25,000 invested.",
  },
  {
    id: "2b1@!hs",
    title: "DIAMOND",
    disc: 40,
    description:
      "40% discount when participating in 25 opportunities or at least €25,000 invested.",
  },
];

const Program = () => {
  return (
    <section className="program section__space">
      <div className="container">
        <div className="program__area wow fadeInUp">
          <div className="section__header">
            <h2 className="neutral-top">Loyalty Program</h2>
            <p className="neutral-bottom">
              Revest Loyalty Program aims to reward our most active and larger
              investors, whilst at the same time encouraging investors to
              minimize risk by spreading their investments into multiple
              investment opportunities.
            </p>
          </div>
          <div className="row">
            {loyaltyData.map((singleData) => (
              <div key={singleData.id} className="col-sm-6 col-xl-3">
                <div className="program__single shadow__effect">
                  <div className="box">
                    <h3>
                      <span className="counterFive">{singleData.disc}</span>%
                    </h3>
                  </div>
                  <h5>{singleData.title}</h5>
                  <p>{singleData.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;
