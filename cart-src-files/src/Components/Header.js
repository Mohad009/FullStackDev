import { Navbar, Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar className="header">
        <Nav className="nav">
          <NavItem className="nav-item">
            <Link to='/' className="nav-link">Home</Link>
          </NavItem>    
          <NavItem> <Link to='/manage' className="nav-link">Manage Products</Link></NavItem>  
          <NavItem><Link to='/update' className="nav-link">Update Products</Link></NavItem>  
          <NavItem><Link to='/cart' className="nav-link">Shopping Cart</Link></NavItem> 



          
        </Nav>
      </Navbar>
    </>
  );
};

export default Header;
