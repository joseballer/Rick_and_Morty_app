const validation = (userData, errors, setErrors) => {
  if (!userData.email)
    setErrors({ ...errors, email: "Por favor complet este campo" });
  else if (userData.email.length > 35)
    setErrors({ ...errors, email: "No puede superar los 35 caracteres" });
  else if (
    !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{3})+$/.test(userData.email)
  ) {
    setErrors({ ...errors, email: "Email invalido" });
  } else {
    setErrors({ ...errors, email: "" });
  }

  if (userData.password.length < 6 || userData.password.length > 10)
    setErrors({ ...errors, password: "Debe tener entre 6 y 10 caracteres" });
  else if (!/\d/.test(userData.password)) {
    setErrors({ ...errors, password: "Debe tener un numero" });
  } else {
    setErrors({ ...errors, password: "" });
  }
};

export default validation;
