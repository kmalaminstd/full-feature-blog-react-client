import React, { useContext, useEffect, useState } from 'react'
import {Container, Nav, Navbar, Button, NavDropdown, Form} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import '../../assets/css/modified.css'
import { useLocation } from 'react-router-dom'
import { AuthContext } from '../../Context/Auth.context'
import { BlogContext } from '../../Context/Blog.context'


function NavBar() {
  const {blogs, setSearchBlog} = useContext(BlogContext)
  const [activeData, setActiveData] = useState('home')
  const location = useLocation()
  const {currentUser, loader} = useContext(AuthContext)
  const [searchText, setSearchText] = useState('')
  const navigate = useNavigate()

  // console.log(blogs);


  useEffect(()=>{
    // console.log(location.pathname.split('/')[1]);
    setActiveData(location.pathname.split('/')[1])

    // console.log(Window.sc);
  },[])

  const handleSubmit = (e)=>{
    e.preventDefault()
    
      handleSearch()
    
    
  }

  const handleSearch = e =>{
    
      const getRes = blogs.find((blog) => blog.postTitle.toLowerCase().includes(searchText))
      if(getRes){
        setSearchBlog(getRes)
        navigate(`/search-page/${searchText}`)
      }else{
        setSearchBlog('Nothing found')
        navigate(`/search-page/${searchText}`)
      }
    
  }




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
             
            </Nav>
            <Form className="d-flex" onSubmit={handleSubmit}>
              <Form.Control
                type="search"
                placeholder="Search blog by title"
                className="me-2"
                aria-label="Search"
                value={searchText.toLowerCase()}
                onChange={(e)=>setSearchText(e.target.value)}
              />
              <Button  variant="outline-success" type="submit">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>


    </>
  )
}

export default NavBar