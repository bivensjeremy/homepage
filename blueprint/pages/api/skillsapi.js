import { skillsData } from "../../data/skillsdata";

export default function handler(req, res) {
    res.status(200).json(skillsData)
  }