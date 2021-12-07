import { packagesData } from "../../data/packagesdata"

export default function handler(req, res) {
    res.status(200).json(packagesData)
  }