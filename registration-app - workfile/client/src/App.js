import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row ,Col} from "reactstrap"; //import the Reactstrap Components
import CourseRegistration from "./Components/CourseRegistration";
import './App.css'
import RegistrationSummary from "./Components/RegistrationSummary";

const App = () => {
 
  return (
    <Container fluid>
      <Row>
        <Col md={7} className="column1">
          <CourseRegistration />
        </Col>
        <Col md={5} className="column2">
          <RegistrationSummary />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
