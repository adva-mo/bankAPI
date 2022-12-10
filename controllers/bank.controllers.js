import { loadFromDb } from "../utils.js";

export const getAlldata = async (req, res) => {
  console.log("all data");
  res.status(200).send({
    users: await loadFromDb("users"),
    accounts: await loadFromDb("accounts"),
    transactions: await loadFromDb("transactions"),
  });
};
