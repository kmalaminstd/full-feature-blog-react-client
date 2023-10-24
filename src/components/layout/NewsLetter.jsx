import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, Container, Form, InputGroup } from 'react-bootstrap'
import { newsLetterColRef } from '../../Config/firebase.config'
import { addDoc } from 'firebase/firestore'
import { BlogContext } from '../../Context/Blog.context'
import toast from 'react-hot-toast'
// import { AuthContext } from '../../Context/Auth.context'

function NewsLetter() {
    // const {setToastSuccess, setToastContent,} = useContext(BlogContext)
    const [newsEmail, setNewsEmail] = useState('')

    const handleSubmit = ()=>{
        
       
        addDoc(newsLetterColRef,{
            email: newsEmail
        }).then((res)=>{
            toast.success("Successfully Subscribed")
            newsEmail('')
        }).catch(err=>{
            console.log(err);
            toast.error("Something went wrong")
        })
    }



  return (

    <div className="newsletter d-flex justify-content-center" style={{width: "100%"}}>
        
        <Card style={{width: "700px"}} className="bg-body-tertiary mt-5 py-3">
            <Card.Title className="text-center border-bottom pb-2">
                Notified with us!
            </Card.Title>

            <Container>
                
                    <InputGroup>
                        <Form.Control placeholder="Your Email Address" aria-label="Your email Address" type="email" aria-describedby='basic addon2' onChange={(e)=>setNewsEmail(e.target.value)} value={newsEmail} />
                        <Button variant='outline-secondary' id="addon-button2" onClick={handleSubmit} >
                            Subscribe
                        </Button>
                    </InputGroup>
                
            </Container>
        </Card>

    </div>
  )
}

export default NewsLetter