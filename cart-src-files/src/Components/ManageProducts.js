import {
  Button,
  Container,
  Row,
  Col,
  Table,
} from "reactstrap";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { productSchemaValidation } from "../Validations/ProductValidations";

//import useSelector and useDispatch
import { useSelector,useDispatch } from "react-redux";
//Import the addProduct, deleteProduct and updateProduct reducers from the ProductSlice file.
import { addProducts,deleteProduct } from "../Features/ProductSlice";
//Import the Link component from react-router-dom
import { useNavigate } from "react-router-dom";
const ManageProdutcs = () => {
  //Declare a variable and retrieve the value of the products from the store
  const products=useSelector((state)=>state.products)

  //Declare a variable for the useDispatch.
  const dispatch=useDispatch()
  const navigate=useNavigate()
  //Create the state variables
  const [pId,setPID]=useState(0)
  const [pTitle,setPTitle]=useState('')
  const [pPrice,setpPrice]=useState(0)
  const [productImage,setProductImage]=useState('')


  //For form validation using react-hook-form
  const {
    register,
    handleSubmit, // Submit the form when this is called
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productSchemaValidation), //Associate your Yup validation schema using the resolver
  });

  // Handle form submission
  const onSubmit = (data) => {
    alert('Validation are all correct')
    setPID(0)
    setPTitle('')
    setpPrice(0)
    setProductImage('')
    let tax=0,total=0;
    
  if (data.price<200){
    tax=0*data.price
    total=tax+data.price
  }else if(data.price >=200 && data.price <500){
    tax=0.1*data.price
    total=tax+data.price
  }else if(data.price >=501 && data.price<1000){
    tax=0.2*data.price
    total=tax+data.price
  }else if(data.price >=1000){
    tax=0.25*data.price
    total=tax+data.price
  }
  try{
    dispatch(addProducts({id:data.id,title:data.title,price:total,images:data.image}))


  }catch(e){
    console.log(e)
  }



  };
//Create a new function handleDelete and dispatch the deleteProduct reducer with the id as the argument
function handleDelete(id){
  dispatch(deleteProduct(id))
}

function UpdateRedirect(prID){
  navigate(`/update/${(prID)}`)
}
  return (
    <Container fluid>
      <Row>
        <Col md={12} className="adminPage">
          <p className="display-6">Admin Page</p>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <h4>Add Product</h4>

          {/* Execute first the submitForm function and if validation is good execute the handleSubmit function */}
          <form  onSubmit={handleSubmit(onSubmit)} >
            <div></div>
            <section>
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Product id..."
                  onChange={(e)=>setPID(Number(e.target.value))}
                  {...register('id')}

                />

                <p className="error">{errors.id?.message}</p>

              </div>
              <div className="form-group">
                <input
                  type="title"
                  className="form-control"
                  id="title"
                  placeholder="Title..."
                  onChange={(e)=>setPTitle(e.target.value)}
                  {...register('title')}

                />

                <p className="error">{errors.title?.message}</p>

              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="price"
                  placeholder="Price..."
                  onChange={(e)=>setpPrice(e.target.value)}
                  {...register('price')}

                />
                <p className="error">{errors.price?.message}</p>

              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="image"
                  placeholder="Image URL..."
                  onChange={(e)=>setProductImage(e.target.value)}
                  {...register('image')}

                />
              </div>

              <p className="error">{errors.image?.message}</p>

              <Button color="primary" className="button">
                Save Product
              </Button>
            </section>
          </form>
        </Col>
        <Col md={8}>
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {
                products.map((p)=>(
                  <tr>
                    <td>{p.id}</td>
                    <td>{<img src={p.images} width='40' height='40' alt={p.title}/> }</td>
                    <td>{p.title}</td>
                    <td>{p.price}</td>
                    <td><Button color="danger" onClick={()=>handleDelete(p.id)}>Delete</Button></td>
                    <td><Button color="primary" onClick={()=>UpdateRedirect(p.id)}>Update</Button>
                      {/* <Link to={`/update/${Number(p.id)}`} className="btn btn-outline-dark">Update</Link> */}
                      </td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default ManageProdutcs;
