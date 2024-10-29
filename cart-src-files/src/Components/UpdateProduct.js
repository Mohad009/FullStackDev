import {
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
import { useState ,useEffect} from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { productSchemaValidation } from "../Validations/ProductValidations";

//Import the updateProduct reducer from the ProductSlice
import { updateProduct } from "../Features/ProductSlice";
//Import the useParams hook from react-router-dom.
import { useNavigate, useParams } from "react-router-dom";
//Import the useSelector and useDispatch from react-redux
import { useSelector,useDispatch } from "react-redux";
//Import the useNavigate from react-router-dom


const UpdateProduct = () => {
  //Store in a variable the value of the products state
  const products=useSelector((state)=>state.products)
  //Create variable for the dispatch
  const dispatch=useDispatch()
  //Create variable for the useNavigate
  const navigate=useNavigate()

  // Retrieve the route parameter using useParams.
  const {prodID}=useParams()
  // Create the function to search the product id from the variable containing the value of the products from the redux store.
  // const product=products.find((p)=>p.id === parseInt(prodID))


  
  //This is the product object that is to be updated as return by the find
  //Invoke the findbyProductId() and pass the variable containing the product id from the route parameter. 
  //Save the return value in a variable.

  //Set the values from the product to be updated object as initial value of the state.
  const [id, setId] = useState(0);
  const [price, setPrice] = useState(0);
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    const product = products.find((p) => p.id === parseInt(prodID));
    if (product) {
      setId(product.id);
      setTitle(product.title);
      setPrice(product.price);
      setImage(product.images);
    }
  }, [products, prodID]);

  //For form validation using react-hook-form
  const {
    register,
    handleSubmit, // Submit the form when this is called
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productSchemaValidation), //Associate your Yup validation schema using the resolver
  });


  const onSubmit=(data)=>{
    alert('Product Updated')
  }

  // Handle form submission
  const handleUpdate = () => {
    
    dispatch(updateProduct({id:id,title:title,price:price,images:image}))
    
    navigate('/manage')
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
          <h4>Update Product</h4>

          {/* Execute first the submitForm function and if validation is good execute the handleSubmit function */}
          <form  onSubmit={handleSubmit(onSubmit)} >
            <div></div>
            <section>
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Product id..."
                  value={id}
                  onChange={(e)=>setId(e.target.value)}
                  {...register('id')}

                />

                <p className="error">{errors.id?.message}</p>

              </div>
              <div className="form-group">
                <input
                  type="title"
                  className="form-control"
                  id="title"
                  value={title}
                  placeholder="Title..."
                  onChange={(e)=>setTitle(e.target.value)}
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
                  value={price}
                  onChange={(e)=>setPrice(e.target.value)}
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
                  value={image}
                  onChange={(e)=>setImage(e.target.value)}
                  {...register('image')}

                />
              </div>

              <p className="error">{errors.image?.message}</p>

              <Button color="primary" className="button" onClick={handleUpdate}>
                Save Product
              </Button>
            </section>
          </form>
         
        </Col>
      </Row>
    </Container>
  );
};

export default UpdateProduct;
