import { onSnapshot } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { postColRef } from "../Config/firebase.config";

export const BlogContext = createContext()

export const BlogProvider = ({children})=>{

    const [blogs, setBlogs] = useState(null)
    const [detectChange, setDetectChange] = useState(false)
    const [searchBlog, setSearchBlog] = useState(null)
    // console.log(searchBlog);

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
        setDetectChange,
        searchBlog,
        setSearchBlog
    }

    return(
        <BlogContext.Provider value={value}>
            {children}
        </BlogContext.Provider>
    )
}