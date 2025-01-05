import { configureStore } from '@reduxjs/toolkit'
import studentsReducer from "../Features/StudentSlice";

export const store = configureStore({
  reducer: {
    students: studentsReducer,
  },
});
