import { createUser, loadFromDb } from "../utils.js";

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

export const getUser = async (req, res) => {
  const foundUser = await user.findById(req.params.id);
  foundUser
    ? res.status(201).send(foundUser)
    : res.status(401).send("user not found");
};
