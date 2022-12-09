import { Router } from "express";
import { getAllAcounts } from "../controllers/accounts.controllers.js";

export const accountsRouter = Router();

accountsRouter.get("", getAllAcounts);
