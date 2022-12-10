import { createTransaction } from "../utils.js";

export const addNewTransaction = (req, res) => {
  res.status(201).send(createTransaction(req.body));
};
