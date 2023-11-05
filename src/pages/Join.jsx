import React, { useEffect } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { AiOutlineGoogle, AiFillGithub } from 'react-icons/ai'
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth"
import { signInWithPopup} from "firebase/auth"
import { auth } from '../Config/firebase.config'
import { useNavigate } from 'react-router-dom'


function Join() {

    useEffect(()=>{
        document.title = "KM's Blog || Join "
    },[])

    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    const navigate = useNavigate()

    const googleLogin = ()=>{
        signInWithPopup(auth, googleProvider)
        .then((res)=>{
            navigate(`/user-profile/${res.user.uid}`)
        }).catch((err)=>{
            console.log(err);
        })
    }

    const githubLogin = ()=>{
        signInWithPopup(auth, githubProvider)
        .then((res)=>{
            navigate(`/user-profile/${res.user.uid}`)
            // toast.c
        }).catch((err)=>{
            console.log(err);
        })
    }


  return (
    <>  
        <div className="d-flex flex-column align-items-center gap-3 mt-5" style={{height: "50vh"}}>

            <Card style={{width: "20rem"}} className="d-flex justify-content-center py-2 px-3 g-card" onClick={googleLogin}>
            <Row>
                    <Col lg={2}>
                        <AiOutlineGoogle />
                    </Col>
                    <Col lg={10}>
                        <p className="mb-0">Continue With Google</p>
                    </Col>
                </Row> 
            </Card>


            <Card style={{width: "20rem"}} className="d-flex justify-content-center py-2 px-3 g-card" onClick={githubLogin}>
            <Row>
                    <Col lg={2}>
                        <AiFillGithub />
                    </Col>
                    <Col lg={10}>
                        <p className="mb-0">Continue With Github</p>
                    </Col>
                </Row> 
            </Card>

        </div>
    </>
  )
}

export default Join