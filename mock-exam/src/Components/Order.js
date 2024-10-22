import {
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
import { useState } from "react";
//Import the orderSchemaValidation
import { orderSchemaValidation } from "../Validations/orderSchemaValidation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
//Import the useSelector and useDispatch from react-redux
import { useDispatch } from "react-redux";
import pic from "../Images/pic.jpg";
import { addOrder } from "../Features/OrderSlice";


const Order = () => {
  //For form validation using react-hook-form
  const {
    register,
    handleSubmit, // Submit the form when this is called
    formState: { errors },
  } = useForm({
    resolver: yupResolver(orderSchemaValidation), //Associate your Yup validation schema using the resolver
  });
  //Declare a variable for the useDispatch
const dispatch=useDispatch()
  // Handle form submission
  const onSubmit = (data) => {
    alert("Validation all good")
    const payable=data.price*data.quantity
    dispatch(
      addOrder({pName:data.name,pPrice:data.price,pQaunt:data.quantity,total:payable})
    )


  };
 //Create the state variables
  const [name,setName]=useState('')
  const [price,setPrice]=useState(0)
  const [quantity,setQuantity]=useState(0)
  return (
    <Container fluid>
      <h1>Add Order</h1>
    <Row>
      <Col md={5}>
      <img src={pic} alt="ghfh"/>
      </Col>
      
    </Row>
      {/* Execute first the submitForm function and if validation is good execute the handleSubmit function */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div></div>
        <section>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Product Name..."
              onChange={(e)=>setName(e.target.value)}
              {...register("name")}
            />
            <p className="error">{errors.name?.message}</p>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="price"
              placeholder="Product Price..."
              onChange={(e)=>setPrice(e.target.value)}
              {...register("price")}
            />
            <p className="error">{errors.price?.message}</p>
          </div>
          <div className="form-group">
            <input
              type="quantity"
              className="form-control"
              id="quantity"
              placeholder="Enter your quantity..."
              onChange={(e)=>setQuantity(e.target.value)}
              {...register("quantity")}
            />
          </div>
          <p className="error">{errors.quantity?.message}</p>

          <Button color="primary" className="button">
            Save Order
          </Button>
        </section>
      </form>
    </Container>
  );
};

export default Order;
