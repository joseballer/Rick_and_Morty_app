import React, { useState } from "react";
import validation from "./validation";
import style from "./Form.module.css";
const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setUserData({ ...userData, [property]: value });
    validation({ ...userData, [property]: value }, errors, setErrors);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };
  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit} className={style.form}>
        <p>LOGIN</p>
        <div className={style.input}>
          <input
            type="text"
            placeholder="EMAIL"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
          />
          <p>{errors.email}</p>
        </div>

        <div className={style.input}>
          <input
            type="password"
            placeholder="PASSWORD"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
          />
          <p>{errors.password}</p>
        </div>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Form;
