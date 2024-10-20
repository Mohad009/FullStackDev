import React, { useEffect } from 'react'
import {  useParams,useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { useState } from 'react'
import { updateCustomer } from '../Features/User'



function CustomerUpdate() {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {id}=useParams()
    const customers=useSelector((state)=>state.users)
    const customer=customers.find(c=>c.id===id);
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    
    useEffect(()=>{
        if (customer){
setName(customer.name)
setEmail(customer.email)
setPassword(customer.password)
        }
    },[customer])

    function updateHandler(){
        if(name && email && password)
            
            dispatch(
                updateCustomer({id:id,name:name,email:email,password:password})
            );
            navigate("/");
        
    }
  return (
    <div className="container w-50">
    <h3>Update Customer</h3>
    <div>
      <input
        type="text"
        id='cname'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Customer Name"
        className="form-control"
      />
    </div>
    <div>
      <input
        type="email"
        id='cemail'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Customer Email"
        className="form-control"
      />
    </div>
    <div>
      <input
        type="password"
        id='cpwd'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Customer Password"
        className="form-control"
      />
    </div>

    <button type="button" onClick={updateHandler} className="btn btn-primary">
      Update Customer
    </button>
  </div>
  )
}

export default CustomerUpdate