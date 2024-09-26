import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import {Routes,Route} from "react-router-dom"
import Home from "./Components/Home";
import { Container, Row ,Col} from "reactstrap";
import Profile from "./Components/Profile";
import Register from "./Components/Register";
const App = () => {
  return (
//fluid is for responsive screen
<Container fluid>
<Row className="bg-warning">
  <Header/>
</Row>
<Row className="bg-info" style={{height:"400px"}}>
<Col className="bg-secondary" md={3}> user</Col>
<Col md={3}>
<Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/profile" element={<Profile/>}></Route>
  <Route path="/register" element={<Register/>}></Route>
</Routes>
</Col>
</Row>
<Row className="bg-light">
<Footer/>
</Row>
</Container>
  );
};

export default App;
