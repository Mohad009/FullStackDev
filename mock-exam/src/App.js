import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap"; //import the Reactstrap Components
import { Router, Routes, Route } from "react-router-dom";
// import Login from "./Components/Login";
import Order from "./Components/Order";
import ListOrders from "./Components/ListOrders";

const App = () => {
  return (
    <Container fluid>
      
        <Row>
          <Header />
        </Row>
        <Row></Row>
        <Row className="main">
          <Routes>
            <Route path="/order" element={<Order/>}/>
            <Route path="/list" element={<ListOrders/>}/>
          </Routes>
        </Row>
        <Row>
          <Footer />
        </Row>
      
    </Container>
  );
};

export default App;
