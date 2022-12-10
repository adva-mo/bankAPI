import { Router } from "express";
import { getAlldata } from "../controllers/bank.controllers.js";

export const bankRouter = Router();

bankRouter.get("", getAlldata);
