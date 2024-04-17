import latestData from "../../data/latestData";

export default function handler(req, res) {
  res.status(200).json(latestData);
}
