import { loadFromDb } from "../utils.js";
import { getUserAccounts } from "../utils/bank.utils.js";

export const getAlldata = (req, res) => {
  console.log("all data");
  res.status(200).send({
    users: loadFromDb("users"),
    accounts: loadFromDb("accounts"),
    transactions: loadFromDb("transactions"),
  });
};

export const getAccounts = (req, res) => {
  const userAccounts = getUserAccounts(req.query.user);
  if (!userAccounts) return res.status(404).send("user doesnt have accounts");

  if (req.query.amount) {
    const amount = Number(req.query.amount);
    const filteredAccounts = userAccounts.filter(
      (account) => account.cash >= amount
    );
    return res.status(200).send(filteredAccounts);
  }
  return res.status(200).send(userAccounts);
};
