import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button, 
  Popover, 
  PopoverBody,
} from 'reactstrap'

import Login from '../forms/Login'

function Home() {

  const [isOpen, setIsOpen] = useState(false)
  const navbarToggle = () => setIsOpen(!isOpen)
  const [popoverOpen, setPopoverOpen] = useState(false)
  const popoverToggle = () => setPopoverOpen(!popoverOpen)

  return (
    <div className="App">

      <Navbar color="light" light expand="md">
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
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Button id="Popover1" type="button">
            Login
          </Button>
          <Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={popoverToggle}>
            <PopoverBody>
              <Login />
            </PopoverBody>
          </Popover>
        </Collapse>
      </Navbar>

    </div>
  )
}

export default Home