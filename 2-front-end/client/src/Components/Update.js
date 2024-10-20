import React from 'react'
import {
    Button,
    Container,
    Row,
    Col,
  } from "reactstrap";
  import { userSchemaValidation } from "../Validations/UserValidations";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector,useDispatch } from 'react-redux';
import { useState} from "react";
import { updateUser } from '../Features/UserSlice';
import { useParams,useNavigate } from 'react-router-dom';


function Update() {
    const {userId} =useParams()
    const users=useSelector((state)=>state.users)
    const user=users.find(u=>u.id===userId)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [id,setId]=useState(user.id)
    const [name ,setName]=useState(user.name);
    const [email ,setEmail]=useState(user.email);
    const [password ,setPassword]=useState(user.password);
    const [confirmPassword ,setConfirmPass]=useState(user.password);
      //For form validation using react-hook-form
      const {
        register,
        handleSubmit, // Submit the form when this is called
        formState: { errors },
      } = useForm({
        resolver: yupResolver(userSchemaValidation), //Associate your Yup validation schema using the resolver
      });
    // useEffect(()=>{
    //     if(user){
    //         setName(user.name)
    //         setEmail(user.email)
    //         setPassword(user.password)
    //         setConfirmPass(user.password)
    //     }
    // })
    
          // Handle form submission
          const onSubmit = (data) => {
            console.log("Form Data", data); // You can handle the form submission here
            alert("Validation all good.")
          }

          const HandleUpdate=()=>{

            dispatch(updateUser({id:id,name:name,email:email,password:password}))
            navigate('/register')
          }

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
                  id="userId"
                  value={id}
                  placeholder="Enter the Id"
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
                  value={password}
                  id="password"
                  placeholder="Enter your password..."
                  {...register("password")} 
                  onChange={(e)=>setPassword(e.target.value)}
                />
                 <p className="error">{errors.password?.message}</p>

              </div>
              <div className="form-group">
                <input
                  type="password"
                  value={confirmPassword}
                  className="form-control"
                  id="confirmPassword"
                  placeholder="Confirm your password..."
                  {...register("confirmPassword")} 
                  onChange={(e)=>setConfirmPass(e.target.value)}
                />
                 <p className="error">{errors.confirmPassword?.message}</p>

              </div>
              <Button color="primary" className="button" onClick={HandleUpdate}>
                Update
              </Button>
            </section>
          </form>
        </Col>
      </Row>
    </Container>
  )
}

export default Update