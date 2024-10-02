import { Container,Form,Input,Button, FormGroup } from "reactstrap";
const SharePosts = () => {
  return (
    <Container>
<Form>
  <FormGroup>
    <Input type="textarea" placeholder="Share your thoughts"/>
    </FormGroup>
    <FormGroup>
    <Button color="primary">Post it</Button>
    </FormGroup>
  
</Form>
    </Container>
  );
};

export default SharePosts;
