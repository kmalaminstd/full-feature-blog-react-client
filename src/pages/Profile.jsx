import React, { useContext, useEffect } from 'react'
import { Button, Card, Col, Row, } from 'react-bootstrap'
import { signOut } from 'firebase/auth'
import { auth } from '../Config/firebase.config'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/Auth.context'

function Profile() {
  const {currentUser} = useContext(AuthContext)
  
  // console.log(currentUser.photoURL);
  // console.log(currentUser);

  useEffect(()=>{
    document.title = "KM's Blog || User Profile"
  },[])

  const navigate = useNavigate()

  const userLogOut = ()=>{
    signOut(auth)
    .then(()=>{
      navigate('/continue')
    }).catch((err)=>{
      console.log(err);
    })
  }

  return (
    <>
      <div className="mt-5 user-profile" style={{width: "100%", }}>

        {
          currentUser &&

          <Card className="p-2">
            <Row>
              <Col lg={6}>
                <Row>
                  <Col lg={2} sm={12}>
                    <img style={{width: "100%"}} src={currentUser.photoURL} />
                  </Col>
                </Row>
                
              </Col>

              <Col lg={6}>
                <h3>User's Activity</h3>
                <p> Developing...</p>
              </Col>

              <Col lg={12}>
                <p style={{fontSize: "20px"}} className="mb-0">Username: <b>{currentUser.displayName} </b></p>
                <p style={{fontSize: "20px"}} className="mb-0">Email: <b>{currentUser.email}</b></p>
              </Col>
            </Row>
          </Card>
        }

        {
          currentUser &&
          <Button variant="primary" className="mt-5" onClick={userLogOut}>
            Log Out
          </Button>
        }
      </div>
    </>
  )
}

export default Profile