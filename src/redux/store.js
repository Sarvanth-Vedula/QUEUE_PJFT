import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice.js";
import likesReducer from "./counter/likesSlice.js";

export default configureStore({
  reducer: {
    counter: counterReducer,
    likes: likesReducer,
  },
});
