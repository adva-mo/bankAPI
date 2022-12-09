import uniqId from "uniqid";
import fs, { readFileSync, writeFileSync } from "fs";

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
