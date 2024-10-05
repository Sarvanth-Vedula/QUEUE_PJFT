import { createSlice } from "@reduxjs/toolkit";

export const likesSlice = createSlice({
  name: "likes",
  initialState: {
    listoflikes: [],
    ids: []
  },
  reducers: {
    
    addLikes: (state, action) => {
      state.listoflikes.push(action.payload);
    },
    addIds: (state, action) => {
      state.ids.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addLikes, addIds } = likesSlice.actions;

export default likesSlice.reducer;