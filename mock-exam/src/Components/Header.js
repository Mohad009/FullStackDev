import { Navbar, Nav, NavItem, NavLink } from "reactstrap";

const Header = () => {
  return (
    
    <Navbar color="light" >
      <Nav className="mx-auto">
        <NavItem >
          <NavLink href="/order" >
          Orders
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink href="/list">
          Orders List
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
    
  );
};

export default Header;
