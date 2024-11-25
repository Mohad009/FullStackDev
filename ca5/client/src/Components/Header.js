import { Navbar, Nav, NavItem } from "reactstrap";
import logo from "../Images/logo-t.png";
import { Link,useNavigate} from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { logout } from "../Features/UserSlice";


const Header = () => {
 const {isLogin}=useSelector((state)=>state.users)
 const dispatch=useDispatch()
 const navigate=useNavigate()
const handleLogout=()=>{
  dispatch(logout())
  navigate('/')
}
  return (
      <Navbar className="header">
        <Nav>
          <NavItem>
            <Link>
              <img src={logo} className="logo" alt=""/>
            </Link>
            </NavItem>
            {isLogin ? (
              <>
             <NavItem>
             <Link to="/">Home</Link>
           </NavItem>
           <NavItem>
             <Link to="/profile">Profile</Link>
           </NavItem>
           <NavItem>
             <Link to="/register">Register</Link>
           </NavItem>
           <NavItem>
             <Link onClick={handleLogout}>Logout</Link>
           </NavItem> 
           </>
            ):(
           null
            )}

        </Nav>
      </Navbar>
    
  );
};

export default Header;
