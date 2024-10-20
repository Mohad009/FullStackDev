import { userSchemaValidation } from "../Validation/UserValidation";
import * as yup from 'yup'
import {useForm} from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
const Register = () => {

  //For form validation using react-hook-form
  const {
    register,
    handleSubmit, //submit the form when this is called
    formState:{errors},
  }=useForm({
    resolver:yupResolver(userSchemaValidation) 
  })

  const onSubmit=(data)=>{
    console.log("Form Data", data)
    alert("Validation all good")
  }
  return (
    <div className="w-50 m-auto">
      <form className="div-form" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input type="text" placeholder="Enter your name" id="name" 
          className="form-control" {...register("name")}/>
          <p className="error">{errors.name?.message}</p>
        </div> 

        <div>
          <input type="email" placeholder="Enter your email" id="email" className="form-control" 
          {...register("email")}/>
          <p className="error">{errors.email?.message}</p>
        </div> 

        <div>
          <input type="password" placeholder="Enter your password" id="psw" className="form-control"
          {...register("password")}/>
          <p className="error">{errors.password?.message}</p>
        </div> 

        <div>
          <input type="password" placeholder="Confirm your password" id="cpsw" className="form-control"
          {...register("confirmPassword")}/>
          <p className="error">{errors.confirmPassword?.message}</p>
        </div> 
        <div>
          <button type="submit" className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
