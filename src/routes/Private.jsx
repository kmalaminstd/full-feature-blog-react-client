import React, { useContext } from 'react'
import { AuthContext } from '../Context/Auth.context'
import { DotLoader } from "react-spinners"
import { Navigate, useLocation } from 'react-router-dom';

function Private({children}) {

    const {currentUser, loader} = useContext(AuthContext)
    const location = useLocation()

    let loadComp;

    if(loader){
        loadComp = currentUser ? (children) : <Navigate to="continue" state={{from: location.pathname}} />
    }else{
        return "loading...."
    }

  return (
    <div>{loadComp}</div>
  )
}

export default Private