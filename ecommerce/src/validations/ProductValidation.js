import * as yup from "yup";
export const productSchemaValidation = yup.object().shape({
productName:yup.string().required("Name is required"),
description: yup.string().required("Description is required"),
price:yup.number().required("Price must be a valid number").typeError("Number is not valid"),
quantity:yup.number().required("Quantity must be a valid number").typeError("Number is not valid")
});
