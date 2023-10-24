import React, { useContext, useState } from 'react'
import { BlogContext } from '../../Context/Blog.context'
import { Toast } from 'react-bootstrap'

function ToastLayout() {
    const { toastContent, setToastSuccess, toastSuccess, detectClick, setDetectClick } = useContext(BlogContext)
    const closeIt = ()=>{
     
    }
  return (
    <>
        
    </>
  )
}

export default ToastLayout