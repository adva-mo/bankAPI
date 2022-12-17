import { Router } from "express";
import {
  getAllAccounts,
  addNewAccount,
  getAccount,
} from "../controllers/accounts.controllers.js";

export const accountsRouter = Router();

accountsRouter.get("", getAllAccounts);

accountsRouter.get("/:id", getAccount);

accountsRouter.post("", addNewAccount);
