import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Table,
} from 'reactstrap'

function Users(props) {

  const [isOpen, setIsOpen] = useState(false)
  const navbarToggle = () => setIsOpen(!isOpen)

  let fakeUsers = []
  for (let i=0; i<3; i++) {
    fakeUsers.push({
      username: `User ${i}`,
      email: `user${i}@mail.com`,
      is_active: `true`
    })
  }

  return (
    <div>
      <Navbar color="light" light expand="md">
        <div className="container">
        <NavbarBrand href="/"><i className="fab fa-trello"></i> React trello</NavbarBrand>
        <NavbarToggler onClick={navbarToggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        </div>
      </Navbar>

      {/** Session Content */}
      <div className="container mt-5">
        <h3>Usuários do sistema</h3>
        <Table hover>
          <thead>
            <tr>
              <th>nome</th>
              <th>email</th>
              <th>ativo</th>
            </tr>
          </thead>
          <tbody>
            {fakeUsers.map( (user, index) => {
              return (
                <tr key={ user.username }>
                  <td>{ user.username }</td>
                  <td>{ user.email }</td>
                  <td>{ user.is_active }</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default Users