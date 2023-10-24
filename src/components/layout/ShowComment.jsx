import React, { useContext, useState } from 'react'
import { Container } from 'react-bootstrap'
import {MdDelete} from 'react-icons/md'
import { AuthContext } from '../../Context/Auth.context';
import { arrayRemove, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../Config/firebase.config';
import toast from 'react-hot-toast';
import { BlogContext } from '../../Context/Blog.context';

function ShowComment({targetBlog}) {
    const {currentUser,} = useContext(AuthContext)
    const { setDetectChange} = useContext(BlogContext)


    const deleteComment = (id)=>{
        // console.log(targetBlog.id);
        updateDoc(doc(db, 'blog', targetBlog.id),{
            comment: arrayRemove(id)
        }).then(()=>{
            toast.success("Deleted")
            setDetectChange(true)
        }).catch((err)=>{
            console.log(err.code);
            console.log(err.message);
            toast.error("Delete failed")
        })
        
    }

  return (
        <>
            <Container fluid>
                {   
                    targetBlog.comment  &&
                    targetBlog.comment.map(elm=>(

                        <div key={elm.commentId} style={{
                            backgroundColor: "rgba(239,239,240,0.1)",
                            padding: "20px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "18px",
                            overflow: "hidden",
                        }}>
                            <div className="comment" style={{
                                backgroundColor: "#fff",
                                padding: "10px",
                                display: "flex",
                                gap: "15px",
                                alignItems: "center", 
                            }}>
                                <div className="userDetails" style={{
                                    display: 'flex',
                                    flexDirection: "column"
                                }}> 
                                    <img style={{
                                        height: "50px",
                                        width: "50px",
                                        objectFit: "cover",
                                        borderRadius: "100%"
                                    }} src={elm.user.photo} alt={elm.user.name} />
                                </div>
                                <div className="commentTexx">
                                    <p>{elm.commentText}</p>
                                </div>
                                <div>
                                    
                                    {
                                        currentUser.uid === elm.user.userId &&
                                        <>

                                            <MdDelete onClick={()=>deleteComment(elm.commentId)} style={{
                                                cursor: "pointer"
                                            }} />
                                        </>
                                            
                                            
                                            
                                        
                                    }
                                    
                                </div>
                            </div>
                        </div>
                        
                    )) 
                }
            
            </Container>
        </>
    )
}

export default ShowComment;