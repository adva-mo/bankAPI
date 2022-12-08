import { createUser, loadFromDb } from "../utils.js";

export const getAllUsers = (req, res) => {
  res.status(200).send(loadFromDb("users"));
};

export const addUser = (req, res) => {
  const newUser = createUser(req.body);
  res.status(200).send(newUser);
};
