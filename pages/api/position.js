import positionData from "../../data/positionData";

export default function handler(req, res) {
  res.status(200).json(positionData);
}
