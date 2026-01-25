import React, { useEffect, useState } from "react";
import axios from "axios";

function UserList() {
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setListOfUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2>Liste des utilisateurs</h2>

      {listOfUser.map((user) => (
        <div key={user.id}>
          <p>Nom : {user.name}</p>
          <p>Email : {user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default UserList;
