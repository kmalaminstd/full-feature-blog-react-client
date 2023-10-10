import React from 'react'
import { Container, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {BsFacebook , BsLinkedin} from 'react-icons/bs'
import {FaXTwitter} from 'react-icons/fa6'

function TopBar() {
  return (
    <div className="bg-body-tertiary border border-bottom p-2">
        <Container>
            <div className="d-flex">
                <div className="m-0 mx-auto topIcons">
                    <ListGroup horizontal>
                        <ListGroup.Item>
                            <Link to=""> <BsFacebook /> </Link>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Link to=""> <FaXTwitter /> </Link>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Link to=""> <BsLinkedin /> </Link>
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default TopBar