import React, { useState, useEffect } from "react";
import NewAccountForm from "../../components/newAccountForm/newAccountForm";
import { useHttp } from "../../hooks/use-http";

function NewAccountPage() {
  const [newAccount, setNewAccount] = useState(null);

  const { isLoading, getData } = useHttp();

  useEffect(() => {
    if (!newAccount) return;
    console.log(newAccount);
    getData({
      url: "/api/accounts",
      method: "POST",
      body: newAccount,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }, [newAccount]);

  return (
    <div>
      <NewAccountForm setNewAccount={setNewAccount} />
    </div>
  );
}

export default NewAccountPage;
