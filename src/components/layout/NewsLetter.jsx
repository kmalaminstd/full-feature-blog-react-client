import React, { useContext, useState } from 'react'
import { Button, Card, Container, Form, InputGroup } from 'react-bootstrap'
import { newsLetterColRef } from '../../Config/firebase.config'
import { addDoc } from 'firebase/firestore'
// import { AuthContext } from '../../Context/Auth.context'

function NewsLetter() {
    // const {currentUser} = useContext(AuthContext)
    const [newsEmail, setNewsEmail] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()

        addDoc(newsLetterColRef,{
            email: newsEmail
        }).then(()=>{

        }).catch(err=>{
            console.log(err);
        })
    }



  return (

    <div className="newsletter d-flex justify-content-center" style={{width: "100%"}}>

        <Card style={{width: "700px"}} className="bg-body-tertiary mt-5 py-3">
            <Card.Title className="text-center border-bottom pb-2">
                Notified with us!
            </Card.Title>

            <Container>
                <form onSubmit={handleSubmit}>
                    <InputGroup>
                        <Form.Control placeholder="Your Email Address" aria-label="Your email Address" type="email" aria-describedby='basic addon2' onChange={(e)=>setNewsEmail(e.target.value)} />
                        <Button variant='outline-secondary' id="addon-button2" >
                            Subscribe
                        </Button>
                    </InputGroup>
                </form>
            </Container>
        </Card>

    </div>
  )
}

export default NewsLetter