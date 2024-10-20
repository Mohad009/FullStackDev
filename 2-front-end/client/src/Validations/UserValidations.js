import * as yup from "yup"; //import all exports from the yup

export const userSchemaValidation = yup.object().shape({
  id:yup.number().min(3).required("Id is required"),
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Not valid email format")
      .required("Email is required"),
    password: yup.string().min(4).max(20).required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords Don't Match")
      .required(),
  });
  