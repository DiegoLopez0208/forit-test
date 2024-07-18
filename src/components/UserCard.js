import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <h2>{user.name}</h2>
      <p>
        <strong>Nombre de Usuario:</strong> {user.username}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Ciudad:</strong> {user.address.city}
      </p>
      <p>
        <strong>Celular:</strong> {user.phone}
      </p>
      <p>
        <strong>Compañía:</strong> {user.company.name}
      </p>
    </div>
  );
};

export default UserCard;
