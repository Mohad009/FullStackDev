import React from 'react'
import {Form,Label,Input,FormGroup,Button} from 'reactstrap'
function Register() {
  return (
    <div>
<Form>
  <FormGroup>
    <Label for='name'>User Name</Label>
    <Input type='text' id='name'/>
    </FormGroup>
    <FormGroup>
    <Label for='email'>Email</Label>
    <Input type='email' id='email'/>
    </FormGroup>
    <FormGroup>
    <Label for='pass'>Password</Label>
    <Input type='password' id='pass'/>
  </FormGroup>
  <FormGroup>
    <Label for='departments'>Departments</Label>
    <Input id='depts' type='select'>
    <option>IT</option>
    <option>Engineering</option>
    <option>Art and Design</option>
    <option>Buisness</option>

    </Input>
  </FormGroup>
  <FormGroup>
    <Button color='primary'>Submit</Button>
  </FormGroup>
</Form>
    </div>
  );
}

export default Register

