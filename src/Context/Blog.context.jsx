import { onSnapshot } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { postColRef } from "../Config/firebase.config";

export const BlogContext = createContext()

export const BlogProvider = ({children})=>{

    const [blogs, setBlogs] = useState(null)
    const [detectChange, setDetectChange] = useState(false)


    useEffect(()=>{
        return onSnapshot(postColRef, snapshot=>{
            const blog = snapshot.docs.map( elm => {
                return {
                    ...elm.data(),
                    id: elm.id
                }
            })
            setBlogs(blog)
        })
    },[detectChange])

   

   



    const value = {
        blogs,
        setDetectChange
    }

    return(
        <BlogContext.Provider value={value}>
            {children}
        </BlogContext.Provider>
    )
}