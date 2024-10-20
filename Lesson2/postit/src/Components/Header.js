import {Navbar,Nav, NavItem } from "reactstrap";
import logo from '../Images/logo.png'
import {Link} from 'react-router-dom'

const Header = () => {

  return (
    <Navbar className="header">
      <Nav >
       <NavItem>
          <img src={logo} alt="logo" className="logo"/>
        </NavItem>
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>

        <NavItem>
          <Link to="/profile">Profile</Link>
        </NavItem>

        <NavItem>
          <Link href="#">Logout</Link>
        </NavItem>
      </Nav>
    </Navbar>


  );
};

export default Header;
