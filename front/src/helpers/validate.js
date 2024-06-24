export function validateUserDtos(datos) {
  let errors = {};

  if (
    !datos.name ||
    typeof datos.name !== "string" ||
    datos.name.trim() === ""
  ) {
    errors.name = "El nombre es requerido";
  }

  if (!datos.birthdate) {
    errors.birthdate = "La fecha de nacimiento es requerida";
  }

  if (new Date (datos.birthdate) > new Date()) {
    errors.birthdate = "La fecha de nacimiento no puede ser mayor a la fecha actual";
  }

  if (!datos.nDni || !/^\d+$/.test(datos.nDni)) {
    errors.nDni = "El número de DNI es requerido y debe contener solo números";
  }

  if (!datos.email || typeof datos.email !== "string") {
    errors.email =
      "El email es requerido y debe ser una cadena válida de correo electrónico";
  }

  if (
    !datos.username ||
    typeof datos.username !== "string" ||
    datos.username.trim() === ""
  ) {
    errors.username = "El nombre de usuario es requerido";
  }

if (
  !datos.password ||
  typeof datos.password !== "string" ||
  datos.password.trim() === ""
) {
  errors.password = "La contraseña es requerida";
}

if (datos.password !== datos.repeatPassword) {
  errors.repeatPassword = "Las contraseñas no coinciden";
}

return errors;
}


export function validateLoginDtos(datos) {
  let errors = {};
  if (!datos.username || typeof datos.username!== "string") {
    errors.username = "El nombre de usuario es requerido";
  }
  if (!datos.password || typeof datos.password!== "string") {
    errors.password = "La contraseña es requerida";
  }
}

export function validateAppointmentsDtos(datos) {
  
  let errors = {};
  if (!datos.date) {
    errors.date = "La fecha es requerida";}

  if (new Date(datos.date) < new Date()) {
    errors.date = "La fecha de agenda no puede ser menor a la fecha actual";
  }

  if (!datos.description) {
    errors.description = "La descripción es requerida";
  }
  if (!datos.time) {
    errors.time = "El horario es requerido";
  }

  if (!/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(datos.time)) {
    errors.time = "El horario debe ser una cadena en formato de hora válida."
  }

  if (datos.time < "10:00" || datos.time > "20:00"){ 
    errors.time = "El horario debe ser dentro del horario de atención (10:00 a 20:00)"
  }

  return errors;
}