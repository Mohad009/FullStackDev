import './App.css';
import CustomerAdd from './Components/CustomerAdd';
import CustomerList from './Components/CustomerList';
import { Routes,Route,Link } from 'react-router-dom';
import { Navbar,Nav, NavItem } from 'reactstrap';
import CustomerUpdate from './Components/CustomerUpdate';

function App() {
  
  return (
  
    <div className='App'>
      <div>
      <Navbar >
<Nav>
    <NavItem>
      <Link to='/add'>Add customer</Link>
    </NavItem>
    <NavItem>
      <Link to='/listcustomer'> Customer list</Link>
    </NavItem>
</Nav>
  </Navbar>

      </div>

        <div>
      <Routes>
        <Route path='/add' element={<CustomerAdd/>}/>
        <Route path='/listcustomer' element={<CustomerList/>}/>
        <Route path='/update/:id' element={<CustomerUpdate/>}/>
      </Routes>
      </div>
      </div>

  );
}

export default App;
