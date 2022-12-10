import React, { useRef, useContext } from "react";
import bankData from "../../context/context";

function TransferForm({ setNewTransaction }) {
  const myForm = useRef();
  const bankDataCtx = useContext(bankData);
  console.log(bankDataCtx.accounts);
  const accounts = bankDataCtx.accounts.map((account) => account.uid);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newUserData = Object.fromEntries(new FormData(myForm.current));
    console.log(newUserData);
    setNewTransaction((prev) => newUserData);
  };

  return (
    <form
      ref={myForm}
      onSubmit={(e) => submitHandler(e)}
      className="new-user-card"
    >
      <div>
        <label htmlFor="name">account number</label>
        <select>
          {accounts.map((account) => {
            return (
              <option key={account} value={account}>
                {account}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <label htmlFor="recipient">recipient</label>
        <select>
          {accounts.map((account) => {
            return (
              <option key={account} value={account}>
                {account}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <label htmlFor="amount">amount</label>
        <input type="text" name="amount" />
      </div>

      <input type="submit" className="blue-btn" value="save" />
    </form>
  );
}

export default TransferForm;
