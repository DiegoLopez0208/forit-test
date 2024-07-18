import React, { useState } from "react";
import axios from "axios";

const UserForm = ({ addUser }) => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    city: "",
    phone: "",
    company: "",
  });
  const [formError, setFormError] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    if (
      !formData.name ||
      !formData.username ||
      !formData.email ||
      !formData.city ||
      !formData.phone ||
      !formData.company
    ) {
      setFormError(true);
      return;
    }

    const newUser = {
      name: formData.name,
      username: formData.username,
      email: formData.email,
      address: { city: formData.city },
      phone: formData.phone,
      company: { name: formData.company },
    };

    try {
      const response = await axios.post("http://localhost:5000/save", newUser);
      console.log(response.data);

      addUser(newUser);

      setFormSuccess(true);

      setFormData({
        name: "",
        username: "",
        email: "",
        city: "",
        phone: "",
        company: "",
      });
    } catch (error) {
      console.error("No se pudo guardar la información", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Nuevo Usuario</h1>

      {formError && (
        <p style={{ color: "red" }}>Por favor completa todos los campos.</p>
      )}
      {formSuccess && (
        <p style={{ color: "green" }}>¡Formulario enviado exitosamente!</p>
      )}

      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Nombre"
        required
      />
      <input
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Nombre de Usuario"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        name="city"
        value={formData.city}
        onChange={handleChange}
        placeholder="Ciudad"
        required
      />
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Celular"
        required
      />
      <input
        name="company"
        value={formData.company}
        onChange={handleChange}
        placeholder="Compañía"
        required
      />

      <button type="submit">Agregar Usuario</button>
    </form>
  );
};

export default UserForm;
