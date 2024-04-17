import one from "/public/images/property/one.png";
import three from "/public/images/property/three.png";
import two from "/public/images/property/two.png";

const businessData = [
  {
    id: "238haas72&#",
    name: "Elegant Industries",
    title: "LTD Statybų taktikos",
    totalInvest: 19,
    investAmount: "6,94,196",
    investPer: 35.73,
    img: one,
    annualReturn: {
      regular: 7.5,
      bonus: 3,
    },
    max_term: 12,
    investLink: "/business-loan/{id}",
  },
  {
    id: "238hs72&#",
    name: "Tagline Industries",
    title: "LTD Orandis",
    totalInvest: 58,
    investAmount: "1,04,196",
    investPer: 94.73,
    img: two,
    annualReturn: {
      regular: 9.5,
      bonus: 12,
    },
    max_term: 48,
    investLink: "/business-loan/{id}",
  },
  {
    id: "238s72&#",
    name: "Circle Tree",
    title: "LTD Pri,ita",
    totalInvest: 99,
    investAmount: "1,04,196",
    investPer: 14.73,
    img: three,
    annualReturn: {
      regular: 1.5,
      bonus: 1,
    },
    max_term: 36,
    investLink: "/business-loan/{id}",
  },
];

export default businessData;
