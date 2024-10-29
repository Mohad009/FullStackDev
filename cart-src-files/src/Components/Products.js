import { Container, Row, Col, Button, Input, Table } from "reactstrap";
//import the useSelector from react-readux
import { useSelector } from "react-redux";
import { useState } from "react";
const Products = () => {
  //Declare a variable to store the current value of the producs state from the Redux store
  const products=useSelector((state)=>state.products)
  const [pId,stPID]=useState('')
  const [pTitle,setPTitle]=useState('')
  const [pPrice,setpPrice]=useState(0)

  return (
    <Container>
      <p className="display-6">Products</p>
      <Row >
        <Col md={6}>
<Table>
  <tbody>
    {
      products.map((p)=>{
        return(
          <tr>
          <td>{<img src={p.images} width={40} height={40}/>}</td>
          <td>{p.title}</td>
          <td>{p.price}</td>
          <td><Input type="text"/></td>
          <td><Button>Add to Cart</Button></td>
        </tr>
        )
      }
        
      )
    }
  </tbody>
</Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Products;
