import { createUser, loadFromDb, findObj } from "../utils.js";

export const getAllUsers = (req, res) => {
  res.status(200).send(loadFromDb("users"));
};

export const addUser = (req, res) => {
  // console.log(req.body);
  const newUser = createUser(req.body);
  newUser !== -1
    ? res.status(200).send(newUser)
    : res.status(401).send(`user with id provided already exist`);
};

export const getUser = (req, res) => {
  const user = findObj("users", req.params.uid);
  user != -1
    ? res.status(201).send(user)
    : res.status(401).send("user not found");
};
