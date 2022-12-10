import { creatAccount, findObj, loadFromDb } from "../utils.js";

export const getAllAccounts = (req, res) => {
  res.status(200).send(loadFromDb("accounts"));
};
export const addNewAccount = (req, res) => {
  const newAccount = creatAccount(req.body);
  newAccount !== -1
    ? res.status(201).send(newAccount)
    : res.status(401).send("problem while creating the account");
};

export const getAccount = (req, res) => {
  const account = findObj("accounts", req.params.uid);
  account != -1
    ? res.status(201).send(account)
    : res.status(401).send("account not found");
};
