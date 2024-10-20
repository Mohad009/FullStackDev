import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { deleteCustomer } from "../Features/User";
import { Link } from "react-router-dom";
//import useSelector
function CustomerList() {
//Retrieve customer form store
const customers=useSelector((state)=>state.users)
const dispatch=useDispatch()

const deleteHandler=(id)=>{
dispatch(deleteCustomer(id))
}

  return (
    <div className="container w-50">
      <h3>Customer List</h3>

      <table className="table table-striped table-warning">
        <tbody>
          {

          customers.map((cus,index)=>{
            return(
<tr key={index}>
  <td>{cus.id}</td>
  <td>{cus.name}</td>
  <td>{cus.email}</td>
  <td><button onClick={()=>deleteHandler(cus.id)}>Delete</button></td> 
  <td>
    <Link to={`/update/${cus.id}`} >Update</Link>
  </td>
</tr>
            )
          })
            //arrow function to avoid execute the function at each refrech
          }
        </tbody>
      </table>
    </div>
  );
}

export default CustomerList;