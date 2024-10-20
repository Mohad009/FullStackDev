import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer"
import { Container,Row} from "reactstrap";
import { Routes,Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login"
import Profile from "./Components/Profile"
import Register from "./Components/Register"

const App = () => {
  return (

    <Container fluid>
     
      <Row>
        <Header/>
      </Row>
      <Row className="main">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
      </Row>
      <Row>
        <Footer/>
      </Row>
    </Container>
  );
};

export default App;
