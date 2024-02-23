import { createSlice } from "@reduxjs/toolkit";

export const adoptedPetSlice = createSlice({
  name: "adoptedPet",
  initialState: {
    value: null,
  },
  reducers: {
    adopt: (state, action) => {
      state.value = action.payload;
    },
    // undadopt: (state, action) => {
    //   state.value = null;
    // },
  },
});

export const { adopt } = adoptedPetSlice.actions;
export default adoptedPetSlice.reducer;

// The adopt action creator is a function that returns an action object with a type and a payload.
// Created by Redux Toolkit.
// function adopt(pet) {
//   return { payload: pet };
// }
