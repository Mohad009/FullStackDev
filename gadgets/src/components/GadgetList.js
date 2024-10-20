import React from 'react'

export default function GadgetList({items }) { 

  return (
      <div style={{width:"50%"}}>
          <h3>List of Electronic Gadgets</h3>
      <table className="table table-stripped">
        <thead>
          <tr>
            <th>Name</th>         
            <th>Price</th>
          </tr>
        </thead>
              <tbody>
          {
            items.map((item, i) => {
              return (<tr><td>{item.name}</td><td>{item.price }</td></tr>)
            })
   
                }                
        </tbody>
      </table>
      {}
    </div>
  );
}
