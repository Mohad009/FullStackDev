
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap'
import logo from '../Images/logo.png'
const Header = () => {

  return (
    <div>
  <Navbar>
    <Nav>
      <NavItem>
        <NavLink href='/'>Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href='/profile'>Profile</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href='/register'>Register</NavLink>
      </NavItem>
    </Nav>
  </Navbar>
    </div>
  );
};

export default Header;
