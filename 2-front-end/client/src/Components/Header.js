import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import logo from "../Images/logo-t.png";
import { Link } from "react-router-dom";


const Header = () => {

    return (
    <>
      <Navbar className="header">
        <Nav>
          <NavItem>
              <Link><img src={logo} className="logo"/></Link>
          </NavItem>          
          <NavItem>
              <Link to="/">Home</Link>
          </NavItem>
          <NavItem>
              <Link to="/profile">Profile</Link>
          </NavItem>
          <NavItem>
              <Link to="/logout">Logout</Link>
          </NavItem>
        </Nav>
      </Navbar>
    </>
  );
};

export default Header;
