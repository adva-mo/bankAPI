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

//localhost:6000/accounts/:id/transaction
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
    id: "",
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