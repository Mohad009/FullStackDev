import { Container, Row, Button, Col, Table } from "reactstrap";
import { useSelector } from "react-redux";

const ListOrders = () => {
  //Retrieve the current value of the state and assign it to a variable.
  const OrdersList=useSelector((state)=>state.orders)
  return (
    <Container>
      <Row>
        <Col md={6}>
          <h1>List of Orders</h1>
          <Table striped>
            <thead>
              <tr>
                <td>Product Name</td>
                <td>Product Price</td>
                <td>Quantity</td>
                <td>Payable</td>
              </tr>
            </thead>
            <tbody>
              {
                OrdersList.map((order,index)=>{
                  return(
                    <tr key={index}>
                    <td>{order.pName}</td>
                    <td>{order.pPrice}</td>
                    <td>{order.pQuant}</td>
                    <td>{order.total}</td>
                  </tr>
                  )
    
                })
              }
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default ListOrders;
