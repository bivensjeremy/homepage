import { portfolioData } from "../../data/portfoliodata";

export default function handler(req, res) {
    res.status(200).json(portfolioData)
  }