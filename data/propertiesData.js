import grid_five from "/public/images/property/grid-five.jpg";
import grid_four from "/public/images/property/grid-four.jpg";
import grid_one from "/public/images/property/grid-one.jpg";
import grid_six from "/public/images/property/grid-six.jpg";
import grid_three from "/public/images/property/grid-three.jpg";
import grid_two from "/public/images/property/grid-two.jpg";

const propertiesData = [
  {
    id: "23as72&#",
    city: "Los Angeles",
    location: "8706 Herrick Ave, Los Angeles",
    totalInvest: 17,
    investAmount: "7,94,196",
    investPer: 14.73,
    img: grid_one,
    annualReturn: {
      regular: 2.5,
      bonus: 4,
    },
    type: "Commercial",
    investLink: "/property/{id}",
  },
  {
    id: "2as72&#",
    city: "San Francisco, CA",
    location: "3335 21 St, San Francisco",
    totalInvest: 179,
    investAmount: "2,94,196",
    investPer: 54.73,
    img: grid_two,
    annualReturn: {
      regular: 5.5,
      bonus: 4,
    },
    type: "Commercial",
    investLink: "/property/{id}",
  },
  {
    id: "8as7d2&#",
    city: "San Diego",
    location: "356 La Jolla, San Diego",
    totalInvest: 199,
    investAmount: "8,94,196",
    investPer: 64.73,
    img: grid_three,
    annualReturn: {
      regular: 3.5,
      bonus: 2,
    },
    type: "Commercial",
    investLink: "/property/{id}",
  },
  {
    id: "8asw472&#",
    city: "San Diego",
    location: "90071, Grand Avenue, San Diego",
    totalInvest: 59,
    investAmount: "8,94,196",
    investPer: 54.73,
    img: grid_four,
    annualReturn: {
      regular: 7.5,
      bonus: 9,
    },
    type: "Commercial",
    investLink: "/property/{id}",
  },
  {
    id: "8a#",
    city: "The Lily",
    location: "Colorado Springs, CO",
    totalInvest: 559,
    investAmount: "9,94,196",
    investPer: 84.73,
    img: grid_five,
    annualReturn: {
      regular: 7.5,
      bonus: 5,
    },
    type: "Commercial",
    investLink: "/property/{id}",
  },
  {
    id: "8a2s72&#",
    city: "The Weldon",
    location: "Gastonia, NC",
    totalInvest: 139,
    investAmount: "1,14,196",
    investPer: 44.73,
    img: grid_six,
    annualReturn: {
      regular: 5.5,
      bonus: 2,
    },
    type: "Commercial",
    investLink: "/property/{id}",
  },
];

export default propertiesData;
