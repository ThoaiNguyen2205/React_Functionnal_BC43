import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  component: <p>Default</p>,
};

const modalReducer = createSlice({
  name: "modalReducer",
  initialState,
  reducers: {
    setModalAction: (state, action) => {
      state.component = action.payload;
    },
  },
});

export const { setModalAction } = modalReducer.actions;

export default modalReducer.reducer;
