import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//define the registerCourses thunk to send the
//  data received through the action from RegistrationSummary
// component to insert into the CourseRegInfos collection.
export const registerCourses = createAsyncThunk("students/registerCourses",async(data)=>{
  const response =await axios.post("http://localhost:5000/registerCourses",{
    studentId:data.studentId,
    academicYear:data.academicYear,
    semester:data.semester,
    courses:data.courses
  })
  const msg=response.data.msg
  const registeredCourses=response.data.registered
  return ({msg,registeredCourses})
})


const initialState = {
  status:'idle',
  courses:[],
  studentId:null,
  semester:null,
  academicYear:null,
  msg:null,
  
};
export const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    addCourses(state, action) {
      const index=state.courses.findIndex(course=>course.courseCode===action.payload.course.courseCode)
      if(index===-1){
        state.courses=[...state.courses,action.payload.course]}
      state.studentId=action.payload.studentId
      state.academicYear=action.payload.academicYear
      state.semester=action.payload.semester
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerCourses.pending,(state)=>{
      state.status="idle"
    }).addCase(registerCourses.fulfilled,(state,action)=>{
      state.status="working"
      state.msg=action.payload.msg
      console.log(action.payload.registeredCourses)
    })
    .addCase(registerCourses.rejected,(state)=>{
      state.status="idle"
    })

     
  },
});
export default studentSlice.reducer;
export const { addCourses } = studentSlice.actions;
