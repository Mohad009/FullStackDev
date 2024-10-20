import {Form,Row,Col,Container,Input, Label, Button, FormGroup} from 'reactstrap'
import {Link} from 'react-router-dom'
const Login = () => {
  return (
    <Container fluid>
      <Form>
        <Row>
        <Col md={3}>
        <FormGroup>
        <Label>Email</Label>
        <Input type='email' id="email" placeholder='Enter email...' />
        </FormGroup>
        </Col>
        </Row>
        <Row>
          <Col md={3}>
          <FormGroup>
          <Label>Email</Label>
          <Input type='password' id="pws" placeholder='Enter password...' />
          </FormGroup>
          </Col>
          </Row>
          <Row>
          <Col md={3}>
          <Button>Login</Button>
          </Col>
          </Row>
          <Row>
            <Col md={3}>
            <p className='smalltext'>No Account? <Link to="/register">Sign Up now</Link></p>
            </Col>
          </Row>
      </Form>
    </Container>
  );
};

export default Login;
