import React from 'react'
import { useSelector,useDispatch } from "react-redux";
import { registerCourses } from "../Features/StudentSlice"
function RegistrationSummary() {
  //	Declare a selector variable to get the courses registration details from redux state.
  const {studentId,semester,academicYear,courses,msg}=useSelector(state=>state.students)
    console.log(courses)
    const dispatch = useDispatch()
    const registrationHandler = () => {
       dispatch(registerCourses({studentId,academicYear,semester,courses}))
       alert("successful")
    }
  return (
    <div className="smalltext">
      <h4>Registration Summary</h4>
    <p>Student Id: {studentId}</p>
    <p>Academic Year: {academicYear}</p>
    <p>Semester: {semester}</p>
    <h4>Selected courses</h4>
{courses.map((c)=>(
  <p>{c.courseCode}--{c.courseName}</p>
))}
            <div className='mb-3'>
        <button onClick={registrationHandler}>Register</button>
      </div>
      {msg}
    </div>
  );
}

export default RegistrationSummary

