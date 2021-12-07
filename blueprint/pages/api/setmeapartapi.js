import { setMeApartData } from "../../data/setmeapartdata"

export default function handler(req, res) {
    res.status(200).json(setMeApartData)
  }