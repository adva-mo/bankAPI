import { user } from "./models/User.model.js";
import { account } from "./models/Account.model.js";
import { transaction } from "./models/Transaction.model.js";

export const createUser = async (userData) => {
  try {
    const newUser = await user.create(userData);
    return newUser;
  } catch (e) {
    console.log(e);
    return -1;
  }
};

export const loadFromDb = async (model) => {
  try {
    const data = await model.find({});
    return data;
  } catch (e) {
    return e;
  }
};

export const findUserById = async (id) => {
  const foundUser = await user.findById(id);
  return foundUser;
};

export const creatAccount = async (bodyAccount) => {
  try {
    const newAccount = await account.create(bodyAccount);
    return newAccount;
  } catch (e) {
    console.log(e);
    return -1;
  }
};

export const createTransaction = (transaction) => {
  switch (transaction.type) {
    case "deposit":
      return addMoney(transaction);
    case "credit":
      return addMoney(transaction);
    case "withdraw":
      return withdraw(transaction);
    case "transfer":
      return transfer(transaction);
    default:
      break;
  }
};

export const transfer = async (transaction) => {
  const updatedAccount = await withdraw(transaction, "transfer");
  if (!updatedAccount) return -1;
  const findAccount = await account.findById(transaction.accountNumber);
  const findRecepient = await account.findById(transaction.recipient);
  const findToUpdateAccount = await account.findByIdAndUpdate(
    transaction.recipient,
    { cash: Number(findRecepient.cash) + Number(transaction.amount) }
  );
  return recordTransaction(transaction);
};

export const addMoney = async (transaction) => {
  const findAccount = await account.findById(transaction.accountNumber);
  if (transaction.type === "deposit") {
    const findToUpdateAccount = await account.findByIdAndUpdate(
      transaction.accountNumber,
      { cash: Number(findAccount.cash) + Number(transaction.amount) }
    );
  } else if (transaction.type === "credit") {
    const findToUpdateAccount = await account.findByIdAndUpdate(
      transaction.accountNumber,
      { credit: Number(findAccount.credit) + Number(transaction.amount) }
    );
  }

  return recordTransaction(transaction);
};

export const withdraw = async (transaction, ifTransfer) => {
  const findAccount = await account.findById(transaction.accountNumber);
  const creditAvailable = findAccount.credit - findAccount.usedCredit;
  if (findAccount.cash + creditAvailable >= transaction.amount) {
    const restToPay = Number(findAccount.cash) - Number(transaction.amount);
    if (restToPay >= 0) {
      const findAndU = await account.findByIdAndUpdate(
        transaction.accountNumber,
        {
          cash: restToPay,
        }
      );
    } else {
      const findAndU = await account.findByIdAndUpdate(
        transaction.accountNumber,
        {
          cash: 0,
          usedCredit: Number(findAccount.usedCredit) - restToPay,
        }
      );
    }
  } else {
    return false;
  }
  if (ifTransfer === "transfer") return true;
  return recordTransaction(transaction);
};

export const recordTransaction = async (transactionObj) => {
  const newTransaction = await transaction.create({
    ...transactionObj,
  });
  return newTransaction;
};
