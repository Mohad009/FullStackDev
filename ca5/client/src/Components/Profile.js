import { useSelector ,useDispatch} from "react-redux";
import { updateUserProfile } from "../Features/UserSlice";
import { useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
import User from "./User";
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";


const Profile = () => {
  const {user,isLogin} = useSelector((state) => state.users);
  const navigate=useNavigate()
  const dispatch=useDispatch()
  useEffect(()=>{
    if(!isLogin) navigate("/login")
  },[isLogin,navigate])

    // Create state variables for user input and assign initial values from the Redux store
  
    const [userName, setUserName] = useState(user?.name);
    const [pwd, setPwd] = useState(user?.password);
    const [confirmPassword, setConfirmPassword] = useState(user?.password);
    const [profilePic, setProfilePic] = useState(user?.profilePic);

      // Function to handle updating the user profile
      const handleUpdate = (event) => {
        // Prevent the default form submission behavior
        event.preventDefault();
    
        // Prepare the user data object with the current user's email and updated details
        const userData = {
          email: user.email, // Retrieve email from the Redux store
          name: userName, // Get the updated name from the state variable
          password: pwd, // Get the updated password from the state variable
          profilePic: profilePic,
        };
        console.log(userData);
        // Dispatch the updateUserProfile action to update the user profile in the Redux store
        dispatch(updateUserProfile(userData));
        alert("Profile Updated.");
        // Navigate back to the profile page after the update is completed
        navigate("/profile");
      };

  // Function to handle file input change
  const handleFileChange = (event) => {
    // Use e.target.files[0] to get the file itself
    const uploadFile = event.target.files[0];
    if (!uploadFile) alert("No file uploaded");
    else setProfilePic(event.target.files[0]);
  };



  return (
    <Container fluid>
      <h1>Profile</h1>
      <Row>
        <Col md={2}>
          <User />
        </Col>
        <Col md={4}> 
        <h2 className="mb-3">Update Profile</h2>
          <Form onSubmit={handleUpdate}>
            <input type="file" name="profilePic"  onChange={handleFileChange}/>
            <div className="appTitle"></div>
            
            <FormGroup>
              <Label for="name">Name</Label>
              <Input id="name" name="name" placeholder="Name..." type="text" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                id="password"
                name="password"
                placeholder="Password..."
                type="password"
                value={pwd} onChange={(e)=>setPwd(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword "
                name="confirmPassword"
                placeholder="Confirm Password..."
                type="password"
                value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Button color="primary" className="button">
                Update Profile
              </Button>
            </FormGroup>
          </Form>
</Col>
      </Row>
    </Container>


  );
};

export default Profile;
