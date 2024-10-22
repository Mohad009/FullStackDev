import * as yup from 'yup'; //import all exports from the yup

//Write the required validations
export const orderSchemaValidation = yup.object().shape({
    name:yup.string().required("Name is required"),
    price:yup.number().required("Price is required"),
    quantity:yup.number().required("Quantity is required").min(1).max(100)
});
