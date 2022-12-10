//todo * dropdown of accounts number
//todo * add new account
//todo * search
//todo * check if user is not active
//todo * try catch in server side functions
//todo * upload to the server

//? ROUTES

//localhost:6000/users
//  * GET - GET USERS
//  * POST - ADD NEW USER

//localhost:6000/users/:id
//  * GET USER
//  * PUT- UPDATE USER
//  * DELETE USER
//  * UPDATE

//localhost:6000/accounts
//  * GET ALL ACOUNTS
//  * POST - ADD NEW ACCOUNT

//localhost:6000/accounts/:id
//  * GET ACCOUNT
//  * PUT- UPDATE ACCOUNT
//  * DELETE ACCOUNT
//  * UPDATE ACCOUNT

//localhost:6000/transactions
//  POST transaction
//  * PUT {user id,amount} type: depsoite,withdraw,credit,transfer

//?  DATA STRUCTURE

//  JSON file #1: users
[
  {
    uid: "uniqe id",
    isActie: true,
    id: "number",
    name: "",
    lastNmae: "",
  },
  {},
  {},
];

//  JSON file #2: accounts
[
  {
    uid: "",
    owner: "USER ID",
    type: "personal/business",
    cash: 0,
    credit: 0,
  },
  {},
  {},
];

//  JSON file #: transactions
[
  {
    id: "",
    type: "deposite/transfer/withdraw",
    //if type transfer destination: "destination account id"
    account: "account id",
    owner: "USER ID",
    sender: "",
    reciever: "",
    amount: 200,
    date: "",
    time: "",
  },
  {},
  {},
];

//
