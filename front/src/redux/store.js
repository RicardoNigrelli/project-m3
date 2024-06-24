import { configureStore } from "@reduxjs/toolkit";
import idReducer from "./idSlices";
import appointmentReducer from "./appointmentSlices";
import userReducer from "./userSlices";

const rootReducer = {
  idReducer,
  appointmentReducer,
  userReducer
};

 const store = configureStore({
  reducer: rootReducer,
});

export default store;

//Lugar donde se almacena todos los estados
// estado de autenticacion, estado de appointment
// turno necesita saber cuales son los turnos y va al store a ver
// es como un repositorio
// almacen de estados globales
// vamos a usar el useSelector que trae la info de un estado
// estado de TURNOS, USER ID
//! useSelector ((state) => state.userId)
//! useSelector((state) => state.Status) ??
//! useSelector((state) => state.appointments) (array de appointments)
//! useSelector((state) => state.users) (array de users)

// un componente por si solo NO puede modificar el estado del STORE
// se necesita una función intermediaria, necesita despachar ACTION
// dispatch = useDispatch (action) //una funcion que se llame cancel appointment(id) que debe retornar
// un objeto.. DISPATCH NO DEBE SER ASINCRONA
// tipo (type) cancel_appointment, payload (id)
// el reducer recibe este objeto y maneja la lógica, el state y la action (que tiene un type y payload)
// debe tener un estado inicial
// IF action.type === "ADD_USER",  (legacy) SWITCH (toolkit)
//retorno ..state (copia del estado) y actualizo el estado que me interesa state.(propiedad)
// user: [..state.user, action.payload]
// siempre tiene que tener un caso por defecto, debe tener al final un else con return STATE
// un reducer alcanza

//UN SLICE ES UNA COMBINACION DE REDUCER Y ACTION
