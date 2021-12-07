import { whatioffer } from "../../data/whatiofferdata";

export default function handler(req, res) {
    res.status(200).json(whatioffer)
  }