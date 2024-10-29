import * as yup from "yup";

// Product Schema with  Validation Messages
export const productSchemaValidation = yup.object().shape({

    id:yup.number().required("id is required").typeError("id is required"),
    title:yup.string().min(4).max(20).required('product title is required'),
    price: yup.number().required("price is required").typeError('price is required'),
    image:yup.string().required("image is required")
});
