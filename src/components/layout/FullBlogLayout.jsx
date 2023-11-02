import React, { useEffect } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';
import {MdDateRange} from 'react-icons/md'
import {FaUserAlt} from 'react-icons/fa'
import {AiFillTag} from 'react-icons/ai'
import CommentBox from './CommentBox';
import ShowComment from './ShowComment';
import { FacebookIcon, FacebookShareButton } from 'react-share';
import { useLocation } from 'react-router-dom';

function FullBlogLayout({targetBlog}) {
    // console.log(targetBlog.id);
    // const location = useLocation()
    const postLink = window.location.href
    console.log(postLink);
    

  return (
    <>
        <Container className="mt-5">
            <Row>

                <Col lg={12} md={12}>
                    <h2 style={{
                        fontWeight: "bold",
                    }}>{targetBlog.postTitle}</h2>
                </Col>

                <Col>
                    <p className="d-flex gap-3"> <span className="d-flex align-items-center gap-2"> <FaUserAlt /> {targetBlog.superUser} </span> <span className="d-flex align-items-center gap-2"><MdDateRange /> {targetBlog.createdAt.toDate().toDateString()}</span> <span className="d-flex align-items-center gap-2"><AiFillTag /> {targetBlog.postCategory}</span></p>
                </Col>

                    <hr />

                <Col lg={12} md={12} className="mt-5" style={{maxWidth: "100%"}}>
                    <Image src={targetBlog.featureImg} fluid style={{maxHeight: "400px", objectFit: "cover", width: "100%"}} />
                </Col>

                <Col lg={12} md={12} className="mt-2">
                    <div dangerouslySetInnerHTML={{__html: targetBlog.content}}>

                    </div>
                </Col>

            

                <div className="d-flex align-items-center justify-content-between px-5">

                
                    <div>
                        <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61553150333761&width=450&layout&action&size&share=false&height=35&appId=285679960556902" width="450" height="35" style={{border:"none" , overflow:"hidden"}} scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    </div>

                    <div className="d-flex border p-2">
                        <h5 style={{marginRight: "5px"}}>Share this post to :</h5>
                        <FacebookShareButton 
                            url={postLink}
                            quote={postLink}
                            className="Demo__some-network__share-button"
                            >
                            <FacebookIcon size={32} round />
                        </FacebookShareButton>
                    </div>
                </div>

                <Col lg={12} md={12} className="mt-3">
                    <CommentBox id={targetBlog.id} />
                </Col>

                <Col lg={12} md={12}>
                    
                    <ShowComment targetBlog={targetBlog} />
                    
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default FullBlogLayout