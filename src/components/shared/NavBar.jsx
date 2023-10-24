import React, { useContext, useEffect, useState } from 'react'
import {Container, Nav, Navbar, Button, NavDropdown, Form} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../../assets/css/modified.css'
import { useLocation } from 'react-router-dom'
import { AuthContext } from '../../Context/Auth.context'
import { db, postColRef } from '../../Config/firebase.config'
import { BlogContext } from '../../Context/Blog.context'
import { Firestore, QuerySnapshot, collection } from 'firebase/firestore'


function NavBar() {
  const {blogs} = useContext(BlogContext)
  const [activeData, setActiveData] = useState('home')
  const location = useLocation()
  const {currentUser, loader} = useContext(AuthContext)
  const [searchText, setSearchText] = useState('')


  useEffect(()=>{
    // console.log(location.pathname.split('/')[1]);
    setActiveData(location.pathname.split('/')[1])

    // console.log(Window.sc);
  },[])

  const hanldeSearchSubmit = e =>{
    e.preventDefault()
    if(blogs){
      blogs.map(item => {
        console.log(item.postTitle === searchText);
      })
    }
  }

  const searchInfo = e => {
    setSearchText(e.target.value)
  }

  useEffect(()=>{
    postColRef.get().then((querySnapshot)=>{
      querySnapshot.forEach(doc=>{
        console.log(doc);
      })
    })
  },[searchText])



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
            <Form className="d-flex" onSubmit={hanldeSearchSubmit}>
              <Form.Control
                type="search"
                placeholder="Search blog by title"
                className="me-2"
                aria-label="Search"
                value={searchText}
                onChange={e=>setSearchText(e.target.value)}
              />
              <Button variant="outline-success" disabled={false}>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      
    </>
  )
}

export default NavBar