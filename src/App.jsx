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

function App() {

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
                    path: 'login',
                    element: <Login />
                },
                {
                    path: 'sign-up',
                    element: <Signup />
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
                    element: <Profile />
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
