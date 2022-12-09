import { loadFromDb } from "../utils.js";

export const getAllAcounts = (req, res) => {
  res.status(200).send(loadFromDb("accounts"));
};
