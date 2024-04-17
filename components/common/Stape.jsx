import StapeList from "./StapeList";

const Stape = ({ bg, cls }) => {
  return (
    <section
      className={`start ${
        // bg-white start--three
        bg ? "start__bg bg__img" : ""
      } section__space__top ${cls}`}
    >
      {/* <section
      className={`start ${
        bg ? "start__bg" : "bg-white start--three"
      } section__space__top bg__img ${cls}`}
    > */}
      <div className="container">
        <div className="start__area wow fadeInUp">
          <div className="section__header">
            <h5 className="neutral-top">
              We&apos;re changing the way you invest.
            </h5>
            <h2>It&apos;s Easy to Get Started.</h2>
            <p className="neutral-bottom">
              Signing up with Revest is simple and only takes a few minutes. We
              can automatically connect with more than 3,500 banks, so no
              complicated paperwork is required to fund your account.
            </p>
          </div>

          {/* Stape list here */}
          <StapeList />
        </div>
      </div>
    </section>
  );
};

export default Stape;
