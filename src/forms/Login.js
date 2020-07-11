import React, { Component } from 'react'
import {
  Form, 
  FormGroup, 
  Label, 
  Input,
  Button
} from 'reactstrap'

class Login extends Component {
  render() {
    return (
      <Form>
        <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="example@email.com" />
        </FormGroup>
        <FormGroup>
        <Label for="examplePassword">Senha</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="sua senha" />
        </FormGroup>
        <Button className="col-12" color="primary">Entrar!</Button>
      </Form>
    )
  }
}

export default Login