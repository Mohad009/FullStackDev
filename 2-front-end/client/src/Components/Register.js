import {
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";

import { userSchemaValidation } from "../Validations/UserValidations";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import { addUser,deleteUser } from "../Features/UserSlice";
import { Link, useNavigate } from "react-router-dom";



const Register = () => {
  const navigate=useNavigate()
  const userList=useSelector((state)=>state.users)
  const [id,setId]=useState("")
  const [name ,setName]=useState("");
  const [email ,setEmail]=useState("");
  const [password ,setPassword]=useState("");
  const [confirmPassword ,setConfirmPass]=useState("");

const dispatch=useDispatch()
  //For form validation using react-hook-form
  const {
    register,
    handleSubmit, // Submit the form when this is called
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchemaValidation), //Associate your Yup validation schema using the resolver
  });


    // Handle form submission
    const onSubmit = (data) => {
      console.log("Form Data", data); // You can handle the form submission here
      alert("Validation all good.")
      dispatch(addUser({id:data.id,name:data.name,email:data.email,password:data.password
      }))
    }

    //Handle the delete
    const handleDelete=(id)=>{
      dispatch(deleteUser(id))
    }


// const HandleUpdate=(id)=>{
//   navigate(`/update/${id}`)

// }




  return (
    <Container fluid>
      <Row className="formrow">
        <Col className="columndiv1" lg="6">
          {/* Execute first the submitForm function and if validation is good execute the handleSubmit function */}
          <form className="div-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="appTitle">
            </div>
            <section className="form">
            <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  value={id}
                  id="userId"
                  placeholder="Enter your Id"
                  {...register("id")} 
                  onChange={(e)=>setId(e.target.value)}
                />
                 <p className="error">{errors.id?.message}</p>

              </div>

              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={name}
                  placeholder="Enter your name..."
                  {...register("name")} 

                  onChange={(e)=>setName(e.target.value)}
                />
                 <p className="error">{errors.name?.message}</p>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  value={email}
                  placeholder="Enter your email..."
                  {...register("email")} 
                  onChange={(e)=>setEmail(e.target.value)}
                />
              <p className="error">{errors.email?.message}</p>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  placeholder="Enter your password..."
                  {...register("password")} 
                  onChange={(e)=>setPassword(e.target.value)}
                />
                 <p className="error">{errors.password?.message}</p>

              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  value={confirmPassword}
                  placeholder="Confirm your password..."
                  {...register("confirmPassword")} 
                  onChange={(e)=>setConfirmPass(e.target.value)}
                />
                 <p className="error">{errors.confirmPassword?.message}</p>

              </div>
              <Button color="primary" className="button" >
                Register
              </Button>
            </section>
          </form>
        </Col>
        <Col className="columndiv2" lg="6">
        </Col>
      </Row>
      <Row>
        <Col md={6}>
        <h3>List of users</h3>
        <table className="table table-striped">
          <tbody>
            {
              userList.map((user,index)=>(
                <tr key={index}>
                
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td><Button onClick={()=>handleDelete(user.id)}>Delete</Button></td>
                <td><Link to={`/update/${user.id}`}>Update</Link></td>
           
            </tr>
              ))
            }
          </tbody>
        </table>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
