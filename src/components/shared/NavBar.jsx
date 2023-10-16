import React, { useContext, useEffect, useState } from 'react'
import {Container, Nav, Navbar, Button, NavDropdown, Form} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../../assets/css/modified.css'
import { useLocation } from 'react-router-dom'
import { AuthContext } from '../../Context/Auth.context'


function NavBar() {
  const [activeData, setActiveData] = useState('home')
  const location = useLocation()
  const {currentUser, loader} = useContext(AuthContext)


  useEffect(()=>{
    // console.log(location.pathname.split('/')[1]);
    setActiveData(location.pathname.split('/')[1])

    // console.log(Window.sc);
  },[])

  return (
    <>

      <Navbar expand="lg" className="bg-body-tertiary border-bottom border-lightgray" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/">K.M.'<sup>s</sup></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: 'auto' }}
              navbarScroll
            >
              <Nav.Link as={Link} onClick={()=>setActiveData('home')} className={`${activeData === "home" ? "navActive" : ''}`}  to="/">Home</Nav.Link>

              <Nav.Link as={Link} onClick={()=>setActiveData('all-blogs')} className={`${activeData === "all-blogs" ? "navActive" : ''}`} to="/all-blogs">Blogs</Nav.Link>

              {
                !currentUser && loader &&

                <Nav.Link as={Link} onClick={()=>setActiveData('continue')} className={`${activeData === "continue" ? "navActive" : ''}`} to="/continue">Login/Register</Nav.Link>
              }

              {
                currentUser && loader && (

                  <Nav.Link as={Link} onClick={()=>setActiveData('user-profile')} className={`${activeData === "user-profile" ? "navActive" : ''}`} to={`user-profile/${currentUser.uid}`}>Profile</Nav.Link>
                )
              }
              {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link> */}
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                disabled
              />
              <Button variant="outline-success" disabled={true}>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      
    </>
  )
}

export default NavBar