import { useSelector } from "react-redux";
const User = () => {
  const {user} = useSelector((state) => state.users);
  const picURL = "http://localhost:3001/uploads/" + user?.profilePic;
  return (
    <div>
      <img src={picURL} className="userImage" alt="avatar"/>
          <h6>{user?.name}</h6>
          <h6>{user?.email}</h6>
    </div>
  );
};

export default User;
