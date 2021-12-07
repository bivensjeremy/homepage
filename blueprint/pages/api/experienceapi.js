import { experienceData } from "../../data/experiencedata";

export default function handler(req, res) {
    res.status(200).json(experienceData)
  }