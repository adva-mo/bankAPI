import React, { useState, useEffect } from "react";
import NewTransactionForm from "../../components/NewTransactionForm/NewTransactionForm";
import { useHttp } from "../../hooks/use-http";

function NewTransactionPage() {
  const [newTransaction, setNewTransaction] = useState(null);
  const { isLoading, getData } = useHttp();

  useEffect(() => {
    console.log(newTransaction);
    if (!newTransaction) return;
    // getData({
    //   url: "/api/users",
    //   method: "POST",
    //   body: newTransaction,
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
  }, [newTransaction]);

  return <NewTransactionForm setNewTransaction={setNewTransaction} />;
}

export default NewTransactionPage;
