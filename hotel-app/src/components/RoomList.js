import React from "react";


function RoomList({filtRooms}) {
   
  return (
    <div className="container" style={{ margin: "auto" }}>
      <h4>Rooms List</h4>
      <table className="table table-border w-75">
        <thead>
          <tr>
            <th>Room Id</th>
            <th>Category</th>
            <th>Rate</th>
            <th>Availability Status</th>
          </tr>
        </thead>
        <tbody>
          {
filtRooms.map((r)=>
{return(<tr>
  <td>{r.roomid}</td>
  <td>{r.category}</td>
  <td>{r.rate}</td>
  <td>{r.availability_status}</td>
  </tr>)}
)
          }
        </tbody>
      </table>
    </div>
  );
}

export default RoomList;
