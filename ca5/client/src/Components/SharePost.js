import {
  Button,
  Col,
  Container,
  Row,
  Input,
} from "reactstrap";
import {  useDispatch,useSelector } from "react-redux";
import {  useState } from "react";
import { savePost } from "../Features/PostSlice";

const SharePosts = () => {
  const dispatch=useDispatch()
  const [postMsg,setPostMsg]=useState('')
  const user = useSelector((state) => state.users.user)
  const handleSubmit=()=>{
    
    if(!postMsg.trim()){
      alert("type something")
      return;
    }
    try{
      const postData={
        postMsg:postMsg,email:user.email
      }
      dispatch(savePost(postData))
      setPostMsg('')

    }catch(e){
      console.log(e,'somthing wrong happend')
    }
  }
  return (
    <Container>
      <Row>
        <Col >
          <Input
            id="share"
            name="share"
            placeholder="Share your thoughts..."
            type="textarea"
            value={postMsg}
            onChange={(e)=>setPostMsg(e.target.value)}
          />
        </Col>
        <Row >
          <Col>
          <Button onClick={handleSubmit}>PostIT</Button>
          </Col>

        </Row>
      </Row>
    </Container>
  );
};

export default SharePosts;
