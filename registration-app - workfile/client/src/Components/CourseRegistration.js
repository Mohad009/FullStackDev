import React, { useState } from 'react'
import CourseData from "./CourseData";
import { useDispatch } from "react-redux";
import { addCourses } from "../Features/StudentSlice"
function CourseRegistration() {
  const [studentId, setId] = useState(null)
  const [semester, setSemester] = useState(null);
  const [academicYear, setYear] = useState("2024-2025");

  const dispatch = useDispatch()
  const courseHandler = (course) => {
    dispatch(addCourses({course,studentId,academicYear,semester}))
  }
  return (
    <div>
      <div className="smalltext">
        <form>
          <h2>Course Registration</h2>
          <div className="m-3">
            <label htmlFor="studentId">Student ID</label>
            <input
              type="text"
              name="studentId"
              className="m-3"
              onChange={(e) => setId(e.target.value)}
              required="required"
            />
          </div>
          <div className="m-3">
            <label htmlFor="semester">Semester</label>
            <input
              type="radio"
              className="form-select-input mx-3"
              name="semester"
              value="Fall"
              onChange={(e) => setSemester(e.target.value)}
              required
            />
            Fall
            <input
              type="radio"
              className="form-select-input mx-3"
              name="semester"
              value="Spring"
              onChange={(e) => setSemester(e.target.value)}
            />
            Spring
          </div>
          <div>
            <label htmlFor="year" className="form-label mx-3">
              Academic Year
            </label>
            <select name="year" onChange={(e) => setYear(e.target.value)}>
              <option value="2024-2025">2024-2024</option>
              <option value="2025-2026">2025-2026</option>
              <option value="2026-2027">2026-2027</option>
            </select>
          </div>

          <div className="smalltext">
            <h4>Select Courses</h4>
            <table className="table table-secondary">
              <thead>
                <tr>
                  <th>Course Code</th>
                  <th>Course Name</th>
                  <th>Choose Course</th>
                </tr>
              </thead>
              <tbody>
                {CourseData.map((course, idx) => (
                  <tr key={idx}>
                    <td>{course.courseCode}</td>
                    <td>{course.courseName}</td>
                    <td>
                      <button
                        type="button"
                        className="button"
                        onClick={() => courseHandler(course)}
                      >
                        Add
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CourseRegistration
