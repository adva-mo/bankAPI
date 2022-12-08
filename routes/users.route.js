import { Router } from "express";

import { getAllUsers, addUser } from "../controllers/users.controllers.js";

export const usersRouter = Router();

usersRouter.get("", getAllUsers);

usersRouter.post("", addUser);
