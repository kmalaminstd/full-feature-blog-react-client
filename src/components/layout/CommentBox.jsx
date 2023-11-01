import { arrayUnion, collection, doc, getDoc, updateDoc } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { Button, Container, FloatingLabel, Form, InputGroup } from 'react-bootstrap'
import { db, postColRef } from '../../Config/firebase.config'
import { AuthContext } from '../../Context/Auth.context'
import {v4 as uuid} from 'uuid'
import toast from 'react-hot-toast'

function CommentBox({id}) {
    const {currentUser} = useContext(AuthContext)
    
        // console.log(blogs);
    const [commentText, setCommnetText] = useState('')

    const postComment = ()=>{
       

        updateDoc(doc(db, 'blog', id),{
            comment: arrayUnion({
                commentText,
                postId: id,
                commentId: uuid(),
                user: {
                    userId: currentUser.uid,
                    name: currentUser.displayName,
                    photo: currentUser.photoURL
                }
            })
        }).then(()=>{
            setCommnetText('')
            toast.success('Commented')
        }).catch((err)=>{
            console.log(err);
        })
        
    }



  return (
    <>
        <Container fluid>

            {
                currentUser ? (

                    <div style={{
                        backgroundColor: 'rgba(239,239,240,0.1)',
                        padding: "15px",
                        width: "100%",
                        overflow: "hidden"
                        }}>
                        <Form.Control 
                            as="textarea"
                            placeholder='Leave a comment'
                            style={{
                                resize:"none",
                                height: "100px"
                            }}
                            onChange={(e)=>setCommnetText(e.target.value)}
                            value={commentText}
                        />
                        <Button className="float-end mt-3" onClick={postComment}>Comment</Button>
                    </div>
                ) : 
                (

                    <div style={{
                        backgroundColor: 'rgba(239,239,240,0.1)',
                        padding: "0px 20px"
                    }}>
                        <h4 style={{
                            marginBottom: "0",
                            color: "orangered"
                        }}>Please Login to Comment</h4> 
                    </div>
                )
            }


        </Container>
    </>
  )
}

export default CommentBox