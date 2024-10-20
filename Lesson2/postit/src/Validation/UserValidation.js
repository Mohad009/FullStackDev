import * as yup from 'yup'

export const userSchemaValidation = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().required("Email is required").email("Not a valid email"),
    password: yup.string().required("Password is required").min(4).max(8),
    confirmPassword: yup.string().required("Confirm password is required")
    .oneOf([yup.ref('password')],"Password do not match"),
});
