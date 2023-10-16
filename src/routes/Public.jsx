import React, { useContext } from 'react'
import { AuthContext } from '../Context/Auth.context'
import { Navigate, useLocation } from 'react-router-dom';
import { DotLoader } from "react-spinners"

function Public({children}) {

    const {currentUser, loader} = useContext(AuthContext)
    const location = useLocation()
    // const Na

    let loadComp;
    if(loader){
        loadComp = currentUser ? <Navigate to={location?.state?.from ? location.state.from : `/user-profile/${currentUser.uid}`} /> : children
    }else{
        
        return <DotLoader color="#36d7b7" />;
    }

    

  return (
    <div>{loadComp}</div>
  )
}

export default Public