import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userContainer: [],
  profilePictures: JSON.parse(localStorage.getItem("profilePictures")) || {},
};

const userSlice = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.userContainer = [];
      state.userContainer.push(action.payload);
    },

    setProfilePicture: (state, action) => {
      const { userId, imageUrl } = action.payload;
      state.profilePictures[userId] = imageUrl;
      localStorage.setItem("profilePictures", JSON.stringify(state.profilePictures)
      );
    },
  },
});

export const { addUser, setProfilePicture } = userSlice.actions;
export default userSlice.reducer;
