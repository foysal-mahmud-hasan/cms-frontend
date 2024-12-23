import { createSlice } from "@reduxjs/toolkit";

const sampleSlice = createSlice({
  name: "sample",
  initialState: "",
  reducers: {
    setSample: (state, action) => action.payload,
  },
  extraReducers: (builder) => {
    
  },
});

export const { setSample } = sampleSlice.actions;
export default sampleSlice.reducer;
