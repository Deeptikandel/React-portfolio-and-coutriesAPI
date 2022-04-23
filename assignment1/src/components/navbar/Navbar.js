import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { navList } from '../../data'

const Navigationbar = () => {
  return (
    <>
      <Navbar bg="secondary" variant="dark" expanded='false' sticky='top'>
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            {navList.map((list) => {
              return <Nav.Link href={`#${list}`}>{list}</Nav.Link>

            })}
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigationbar