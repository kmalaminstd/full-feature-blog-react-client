import NavBar from "./components/shared/NavBar"
import Footer from "./components/shared/Footer"
import Login from './pages/Login'
import Signup from './pages/Signup'
import AllBlogs from "./pages/AllBlogs"
import Profile from './pages/Profile'
import Homepage from "./pages/Homepage"
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import NotFound from "./pages/NotFound"
import { Container } from "react-bootstrap"
import TopBar from "./components/shared/TopBar"
import FullBlog from "./pages/FullBlog"
import Join from "./pages/Join"
import Private from "./routes/Private"
import Public from "./routes/Public"
import { useRef } from "react"

function App() {

    const toast = useRef(null)

    const DynamicLayout = ()=>{
        return(
            <>  
                <TopBar />
                <NavBar />
                    <Container>
                        <Outlet />
                    </Container>
                <Footer />
           </>
        )
    }

    const router = createBrowserRouter([
        {
            path: '/',
            element: <DynamicLayout />,
            children: [
                {
                    path: '/',
                    element: <Homepage />
                },
                {
                    path: 'continue',
                    element: 
                        <Public>
                            <Join />
                        </Public>
                },
                {
                    path: '*',
                    element: <NotFound />
                },
                {
                    path: 'all-blogs',
                    element: <AllBlogs />
                },
                {
                    path: 'user-profile/:id',
                    element: 
                        <Private>
                            <Profile />
                        </Private>
                },
                {
                    path: "blog-post/:postTitle/:id",
                    element: <FullBlog />
                }
            ]
        }
    ])

    return(
        <>
            <RouterProvider router={router} />


        </>
    )
  
}

export default App
