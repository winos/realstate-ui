import teamData from "../../data/teamData";
import TeamCard from "../cards/TeamCard";

const Team = () => {
  return (
    <section className="team section__space__bottom">
      <div className="container">
        <div className="team__area wow fadeInUp">
          <div className="section__header">
            <h5 className="neutral-top">Meet Our Incredible Team</h5>
            <h2>Built by a Diverse Team With Deep Expertise in Investing</h2>
            <p className="neutral-bottom">
              We&apos;re on a mission to build a better financial system by
              empowering the individual.
            </p>
          </div>
          <div className="row">
            {teamData.map((item) => (
              <TeamCard key={item.id} data={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
