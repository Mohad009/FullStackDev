import React,{useState} from "react";
import ROOMS from "./datafile";
import RoomList from "./RoomList";

function SearchByCategory() {
  const [catg,setCatg]=useState("")
  const [filtCat,setFiltCat]=useState([])
  function filtSearch(){
    const filterdCat=ROOMS.filter((r)=>r.category===catg)
    setFiltCat(filterdCat)
    if(filterdCat.length===0){
      <h3>No data found</h3>
    }
  }
  return (
    <div>
      <div
        className="border border-success mb-5 mt-5 w-75"
        style={{ margin: "auto" }}
      >
        <table className="table table-striped">
          <tbody>
            <tr>
              <td>Room Category: </td>
              <td>
                <select onChange={(e)=>setCatg(e.target.value)}>
                  <option value="Standard">Standard</option>
                  <option value="Deluxe">Deluxe</option>
                  <option value="Suite">Suite</option>
                </select>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <button type="button" onClick={filtSearch}>Show Rooms</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <RoomList filtRooms={filtCat}/>
      </div>
    </div>
  );
}

export default SearchByCategory;
