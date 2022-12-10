import { loadFromDb } from "../utils.js";

export const getUserAccounts = (userUid) => {
  const accounts = loadFromDb("accounts");
  const userAccounts = accounts.filter((account) => account.owner === userUid);
  return userAccounts;
};
