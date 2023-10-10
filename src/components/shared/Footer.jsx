import React from 'react'
import { Container, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {BsFacebook , BsLink, BsLinkedin} from 'react-icons/bs'
import {FaXTwitter} from 'react-icons/fa6'

function Footer() {
  return (
    <div className="footer bg-dark p-2 mt-5 text-white">
      <Container>
        <div className="d-flex justify-content-around align-items-center inner-footer">



          <div className="items">
            <h4>Useful Links</h4>

            <ListGroup>
              <ListGroup.Item>
                <Link>Home</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link>Blogs</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link>Sign Up</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link>Login</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link>Profile</Link>
              </ListGroup.Item>
            </ListGroup>
            
          </div>

          <div className="items">
            <h4>Social Links</h4>

            <ListGroup horizontal>
              <ListGroup.Item>
                <Link> <BsFacebook /> </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link><BsLinkedin /></Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link> <FaXTwitter /> </Link>
              </ListGroup.Item>
              
            </ListGroup>
            
          </div>


          <div className="items">
            <Link>
              <h4>K.M.' <sup>s</sup></h4>
              <p>Get your blog</p>
            </Link>
          </div>

        </div>
      </Container>
    </div>
  )
}

export default Footer