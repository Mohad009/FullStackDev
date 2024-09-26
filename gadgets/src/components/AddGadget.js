import React,{useState} from 'react'
import gadgets from './gadgets';
import GadgetList from './GadgetList';



function AddGadget() {
  const [items,setItems]=useState(gadgets)
  const [pname,setName]=useState("")
  const [pprice,setPrice]=useState(0)

  function addGadget(){
    setItems([...items,{name:pname,price:pprice}]) //...=> this is called spread operator. It adds the new items to the old array
  } 
  
  return (
    <div className="container w-50">
      <h3>Product Registration</h3>
      <div className="m-1 p-1 bg-light">
        <label htmlFor="pname">Name</label>
        <input id="pname" type="text" value={pname} onChange={(v)=>{setName(v.target.value)}}/>
      </div>

      <div className="m-1 p-1 bg-light">
        <label htmlFor="pprice">Price</label>
        <input id="pprice" type="number" value={pprice} onChange={(v)=>{setPrice(v.target.value)}}/>
      </div>
      <div className="m-1 p-1 bg-light">
        <button type="button" onClick={addGadget}>Add Gadgets</button>
      </div>
      <GadgetList items={items}/>
    </div>
  );
}

export default AddGadget
