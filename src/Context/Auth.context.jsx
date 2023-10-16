import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Config/firebase.config";

export const AuthContext = createContext()

export const AuthProvider = ({children})=>{
    const [currentUser, setCurrentUser] = useState(null)
    const [loader, setLoader] = useState(false)

    useEffect(()=>{
        return onAuthStateChanged(auth, user => {
            if(user){
                setLoader(true)
                setCurrentUser(user)
            }else{
                setLoader(true)
                setCurrentUser(null)
            }
        })
    },[])

    const value ={
        currentUser,
        loader
    }

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}