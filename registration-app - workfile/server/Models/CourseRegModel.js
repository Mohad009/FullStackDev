import mongoose from "mongoose";

const CourseRegSchema = mongoose.Schema(
  {
    studentId: {
      type: String,
      required: true,
    },
    semester: {
      type: String,
      required: true,
    },
    academicYear: {
      type: String,
      required: true,
    },
    courses: [],
  },
  {
    timestamps: true,
  }
);

const CourseRegModel = mongoose.model("CourseRegInfos", CourseRegSchema);

export default CourseRegModel;
