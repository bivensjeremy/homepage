import { servicesData } from "../../data/servicesdata";

export default function handler(req, res) {
    res.status(200).json(servicesData)
  }