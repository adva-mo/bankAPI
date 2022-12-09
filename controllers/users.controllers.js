import { createUser, loadFromDb, findObj } from "../utils.js";

export const getAllUsers = (req, res) => {
  res.status(200).send(loadFromDb("users"));
};

export const addUser = (req, res) => {
  const newUser = createUser(req.body);
  res.status(200).send(newUser);
};

export const getUser = (req, res) => {
  const user = findObj("users", req.params.uid);
  res.status(201).send(user);
};
