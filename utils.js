import uniqId from "uniqid";
import { readFileSync, writeFileSync } from "fs";
import uniqueId from "unique-id-key";

export const createUser = (user) => {
  const newUser = { ...user, uid: uniqId(), isActive: true };
  const users = loadFromDb("users");
  users.push(newUser);
  saveToDb("users", users);
  return newUser;
};

export const loadFromDb = (file) => {
  try {
    const dataBuffer = readFileSync(`./db/${file}.json`);
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (e) {
    return [];
  }
};
export const saveToDb = (file, data) => {
  try {
    const dataJson = JSON.stringify(data);
    writeFileSync(`./db/${file}.json`, dataJson);
  } catch (e) {}
};

export const findObj = (file, uid) => {
  const data = loadFromDb(file);
  const obj = data.find((item) => item.uid === uid);
  if (obj) return obj;
  else return -1;
};

export const creatAccount = (account) => {
  const newAccount = {
    ...account,
    uid: uniqueId.RandomNum(6),
    cash: 0,
    credit: 0,
  };
  const accounts = loadFromDb("accounts");
  accounts.push(newAccount);
  saveToDb("accounts", accounts);
  return newAccount;
};

export const createTransaction = (transaction) => {
  switch (transaction.type) {
    case "deposit":
      return addMoney(transaction);
    case "credit":
      return addMoney(transaction);
    case "withdraw":
      return withdraw(transaction);
    default:
      break;
  }
};

export const addMoney = (transaction) => {
  // console.log(transaction);
  const accounts = loadFromDb("accounts");
  let account = accounts.find(
    (account) => account.uid === Number(transaction.accountNumber)
  );
  if (transaction.type === "deposit") {
    account.cash += Number(transaction.ammount);
  } else if (transaction.type === "credit") {
    account.credit += Number(transaction.ammount);
  }
  saveToDb("accounts", accounts);
  return recordTransaction(transaction);
};

export const withdraw = (transaction) => {
  const accounts = loadFromDb("accounts");
  let account = accounts.find(
    (account) => account.uid === Number(transaction.accountNumber)
  );
  const updatedAccount = validateWithdraw(account, transaction.ammount);
  if (updatedAccount) {
    recordTransaction(transaction);
    saveToDb("accounts", accounts);
    return account;
  } else return "couldnt make the transaction";
};

export const validateWithdraw = (account, ammount) => {
  const creditAvailable = account.credit - account.usedCredit;
  if (account.cash + creditAvailable >= ammount) {
    // withdraw possible
    const restToPay = account.cash - ammount;
    if (restToPay > 0) {
      account.cash = restToPay; //cash was enough
    } else {
      account.cash = 0;
      account.usedCredit -= restToPay;
    }
    return account;
  } else {
    console.log("not enough credit/cash");
    return false;
  }
};

export const recordTransaction = (transaction) => {
  const date = new Date();
  const newTransaction = {
    ...transaction,
    owner: findObj("accounts", transaction.accountNumber).owner,
    date: date.toLocaleDateString(),
    time: date.toLocaleTimeString(),
    uid: uniqId(),
  };
  const transactions = loadFromDb("transactions");
  transactions.push(newTransaction);
  saveToDb("transactions", transactions);
  return newTransaction;
};
