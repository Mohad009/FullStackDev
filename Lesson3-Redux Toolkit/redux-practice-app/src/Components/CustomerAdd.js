import React, { useState } from "react";
import { addCustomer } from "../Features/User";
import { useDispatch } from "react-redux";

function CustomerAdd() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch=useDispatch()
  function addhandeler(){
    if(id && name && email && password){
    dispatch(addCustomer({id:id,name:name,email:email,password:password}))
    setId("")
    setEmail("")
    setName("")
    setPassword("")
    
  }}
  return (
    <div className="container w-50">
      <h3>Add New Customer</h3>
      <div>
        <input
          type="text"
          id='id'
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Enter Customer Id"
          className="form-control"
        />
      </div>
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

      <button type="button" onClick={addhandeler} className="btn btn-primary">
        Register Customer
      </button>
    </div>
  );
}

export default CustomerAdd;
