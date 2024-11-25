import {
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";

import { useState,useEffect } from "react";
import { loginSchemaValidation } from "../Validations/LoginValidation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Features/UserSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  //Retrieve the current value of the state and assign it to a variable.
  //Create the state variables
  const {user,msg,isLogin}=useSelector((state)=>state.users)
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  //For form validation using react-hook-form
  const {
    register,
    handleSubmit, // Submit the form when this is called
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchemaValidation), //Associate your Yup validation schema using the resolver
  });

  const dispatch = useDispatch(); //every time we want to call an action, make an action happen
  const navigate = useNavigate(); //declares a constant variable named navigate and assigns it the value returned by the useNavigate() hook

  // Handle form submission
  const onSubmit = () => {
    const userData = {
      email,
      password,
    };

    try {
     dispatch(login(userData));
      if (isLogin) {
        navigate("/");
      } else {
        // Handle login failure
        console.error(msg);
      }
    } catch (error) {
      console.error(error);
    }

  }
    
  useEffect(() => {  
    if (isLogin) { 
       navigate("/")
    }
    else {
      navigate("/login")
    }
},[isLogin,navigate])



  return (
    <Container fluid>
      <Row className="mb-3">
        <Col lg="6">
          {/* Execute first the submitForm function and if validation is good execute the handleSubmit function */}
          <form className="div-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="appTitle"></div>
            <section>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email..."
                  {...register("email", {
                    onChange: (e) => setemail(e.target.value),
                  })}
                />
                <p className="error">{errors.email?.message}</p>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password..."
                  {...register("password", {
                    onChange: (e) => setpassword(e.target.value),
                  })}
                />
                <p className="error">{errors.password?.message}</p>
              </div>
             
              <Button type='submit' color="primary" className="button">
                Sign In
              </Button>
            </section>
          </form>
        </Col>
        <Col className="columndiv2" lg="6"></Col>
      </Row>
      <Row>
        <div>
          <h5>Server Response</h5>
          <h4>{msg}</h4>
          <h4>{user?.email}</h4>
          
        </div>
      </Row>
    
    </Container>
  );
};

export default Login;
