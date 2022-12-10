import React, { useEffect, useState } from "react";
import NewUserForm from "../../components/NewUserForm/NewUserForm";
import { useHttp } from "../../hooks/use-http";
import "./NewUserPage.css";

function NewUserPage() {
  const [newUser, setNewUser] = useState(null);
  const { isLoading, getData } = useHttp();

  useEffect(() => {
    console.log(newUser);
    if (!newUser) return;
    getData({
      url: "/api/users",
      method: "POST",
      body: newUser,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }, [newUser]);

  return <NewUserForm setNewUser={setNewUser} />;
}

export default NewUserPage;
