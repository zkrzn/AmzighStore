import { createSlice } from "@reduxjs/toolkit";

const contentSlice = createSlice({
  name: "content",
  initialState: {
    contentType: "text",
  },
  reducers: {
    changeContentType: (state, action) => {
      state.contentType = action.payload;
    },
  },
});

export const { changeContentType } = contentSlice.actions;
export const selectContentType = (state) => state.content.contentType;

export default contentSlice.reducer;
