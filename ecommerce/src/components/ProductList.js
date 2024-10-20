import React from 'react'
import { Container,Row,Col,Card, CardBody, CardTitle } from 'reactstrap'
import ProductData from './ProductData';
function ProductList() {
  return (
    <Container fluid >
      <h3 className="text-center">Product List</h3>
      <Row>
    {ProductData.map((product,index)=>(

      <Col md={3}>
 <Card className='w-100 h-100'>
  <CardBody>
    <CardTitle>{product.name}</CardTitle>
    <img src={product.image} alt={product.id} className='img-fluid'/>
    <p>{product.price}</p>
  </CardBody>
 </Card>
 </Col>
    ))}
    
      </Row>
    </Container>
  );
}

export default ProductList

