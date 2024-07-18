import React, { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "./UserCard";
import UserForm from "./UserForm";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.log(error));
  }, []);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const filteredUsers = users.filter((user) => {
    const searchLower = search.toLowerCase();
    return (
      user.name.toLowerCase().includes(searchLower) ||
      user.email.toLowerCase().includes(searchLower) ||
      user.address.city.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div>
        <p className="filter"> Filtro de Busqueda</p>
      <input
        type="text"
        placeholder="Buscar por nombre, email o ciudad"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <p className="userlist-title"> Usuarios </p>
            <div className="user-list">
        {filteredUsers.map((user) => (
          <UserCard key={user} user={user} />
        ))}
      </div>
      <UserForm addUser={addUser} />
    </div>
  );
};

export default UserList;
