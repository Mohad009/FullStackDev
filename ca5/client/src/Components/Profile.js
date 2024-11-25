import { useSelector } from "react-redux";
import userimg from "../Images/user.png"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const Profile = () => {
  const {user,isLogin} = useSelector((state) => state.users);
  const navigate=useNavigate()
  useEffect(()=>{
    if(!isLogin) navigate("/login")
  },[isLogin,navigate])
  return (
    <div>
      <img src={userimg} className="userImage" alt="avatar"/>
      <h6>{user?.name}</h6>
      <h6>{user?.email}</h6>
    </div>
  );
};

export default Profile;
