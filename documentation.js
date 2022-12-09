//* when joining to the bank, the client needs to provide the following details: name, last name and hes official ID number,
//* this number will be hide in the data base, and a uniqe uid will be assigned to prevent leack of sensitive data.

//? USERS

//  GET all users:
//      fetch("<domain>/users")

//  POST new user:
//      fetch("<domain>/users")
//      body:{
//           id: Number
//           name: String
//           lastName: string
//      }

//  GET user:
//      fetch("<domain>/users/:uid")

//? ACCOUNTS

//  GET all accounts:
//      fetch("<domain>/accounts")

//  POST new accounts:
//      fetch("<domain>/accounts")
//      body:{
//           owner: user uid
//           type: "personal/business"
//      }

//  GET account:
//      fetch("<domain>/accounts/:uid")

//? TRANSACTIONS

//  POST new transaction:
//      fetch("<domain>/transactions")
//      body:{
//           accountNumber:  number
//           type: "deposit,withdraw,credit",
//           ammount: number
//      }
