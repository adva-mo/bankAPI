import React, { useRef } from "react";

function TransferForm({ setNewTransaction }) {
  const myForm = useRef();

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
        {/* <input type="text" name="name" /> */}
      </div>
      <div>
        <label htmlFor="recipient">recipient</label>
        <input type="text" name="recipient" />
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
