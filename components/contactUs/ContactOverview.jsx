import ContactOverviewCard from "../cards/ContactOverviewCard";
import chat from "/public/images/icons/chat.png";
import email from "/public/images/icons/email.png";
import phone from "/public/images/icons/phone.png";

const contactOverviewtaData = [
  {
    id: "$kasd$5",
    icon: email,
    tilte: "Send Us an Email",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing.",
    link: "mailto:example@example.com",
    contact: "contact@revest.com",
  },
  {
    id: "$k5d$5",
    icon: phone,
    tilte: "Give Us a Call",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing.",
    link: "tel:+17087362094",
    contact: "(414) 807 - 7478",
  },
  {
    id: "$k63sd$5",
    icon: chat,
    tilte: "Chat with us",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing.",
    link: "mailto:example@example.com",
    contact: "Open live chat",
  },
];

const ContactOverview = () => {
  return (
    <section className="contact__overview">
      <div className="container">
        <div className="contact__overview__area">
          <div className="row">
            {contactOverviewtaData.map((singleItem) => (
              <div key={singleItem.id} className="col-md-6 col-xl-4">
                <ContactOverviewCard singleItem={singleItem} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactOverview;
