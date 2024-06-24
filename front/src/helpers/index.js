import axios from  "axios";

export async function getAllAppointments() {
  try {
    const response = await axios.get("http://localhost:3000/appointments");
    return response.data;
    
  } catch (error) {
    console.error("Error al obtener los citas:", error);
    throw error;
  }
}

export async function postAppointment(appointment, user) {
  
  try {
    console.log(appointment)
    const response = await axios.post(
      "http://localhost:3000/appointments/schedule",
      {...appointment, user: user}
    );
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error("Error al crear la cita:", error);
    throw error;
  }
}

export async function cancelAppointmentById(id) {
  try {
    const response = await axios.put(
      `http://localhost:3000/appointments/cancel/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error al cancelar la cita:", error);
    throw error;
  }
}

export async function getAllUsers() {
    try {
      const response = await axios.get("http://localhost:3000/users");
      return response.data;
    } catch (error) {
      console.error("Error al obtener los usuarios:", error);
      throw error;
    }
  }

  export async function getUsersById(id) {
    try {
      const response = await axios.get(
        `http://localhost:3000/users/${id}`
      );
      console.log(response.data.appointments);
      return response.data.appointments;
    } catch (error) {
      console.error("Error al traer el usuario", error);
      throw error;
    }
  }

export async function postUserRegister(user) {
  console.log(user)
  try {
    const response = await axios.post(
      "http://localhost:3000/users/register",
      user
    );
    return response.data;
  } catch (error) {
    console.error("Error al crear el usuario:", error);
    throw error;
  }
}

export async function postUserLogin(user) {
  try {
    const response = await axios.post(
      "http://localhost:3000/users/login", user);
    return response.data;
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    throw error;
  }
}
