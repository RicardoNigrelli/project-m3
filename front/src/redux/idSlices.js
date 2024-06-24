import { createSlice } from "@reduxjs/toolkit";

const initialStateIds = {
  userId: 0,
};

const idSlice = createSlice({
  name: "idReducer",
  initialState: initialStateIds,
  reducers: {
    addId: (state, action) => {
      state.userId = action.payload; 
      console.log(state.userId);
    },
  },
});

export const { addId } = idSlice.actions;
export default idSlice.reducer;

console.log(initialStateIds.id);

/*
Como se despacha
cons count = useSelector()
*/
// export const todosSlice = createSlice({
//     name: "todos",
//     initialState,
//     reducers: {
//         addTodo: (state, action) => {
//             action.payload.id = state.todos.length + 1
//         state.todos = state.todos.slice(action.payload)},

//         removeTodo: (state, action) => {
//             state.todos = state.todos.filter ((todo) => todo.id !== action.payload.id)
//         }
//     }})

// export const { addTodo, removeTodo } = todosSlice.actions

// export const addUser = (user) => {
//   return {
//     type: "ADD_USER",
//     payload: user,
//   };
// };

// export const loginUser = (user) => {
//   return {
//     type: "LOGIN_USER",
//     payload: user,
//   };
// };

// export const logoutUser = (user) => {
//   return {
//     type: "LOGOUT_USER",
//     payload: user,
//   };
// };

// export const addAppointment = (appointment) => {
//   return {
//     type: "ADD_APPOINTMENT",
//     payload: appointment,
//   };
// };
