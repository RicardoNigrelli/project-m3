import { createSlice,  } from "@reduxjs/toolkit";

const initialState = {
  appointmentsContainer: [],
};

const appointmentSlice = createSlice({
  name: "appointmentReducer",
  initialState,
  reducers: {
    addAppointments: (state, action) => {
      state.appointmentsContainer =  [...action.payload];
      
    },
    cancelarAppointment: (state, action) => {
      state.appointmentsContainer = state.appointmentsContainer.map((appointment) => {
        if (appointment.id === action.payload) {
          return { ...appointment, status: "CANCELED" };
        }
        return appointment;
      })
    },

    addAppointment: (state, action) => {
      state.appointmentsContainer.push(action.payload);
    },
  },
});

export const { addAppointments, cancelarAppointment, addAppointment } = appointmentSlice.actions;
export default appointmentSlice.reducer;