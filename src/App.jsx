import { lazy } from "react"

const NavBar = lazy(()=> import("./components/shared/NavBar"))
import Footer from "./components/shared/Footer"
const AllBlogs = lazy(()=> import("./pages/AllBlogs"))
const Profile = lazy(()=> import("./pages/Profile"))
const Homepage = lazy(()=> import("./pages/Homepage"))
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
const NotFound = lazy(()=> import("./pages/NotFound"))
import { Container } from "react-bootstrap"
import TopBar from "./components/shared/TopBar"
const FullBlog = lazy(()=> import("./pages/FullBlog"))
const Join = lazy(()=> import("./pages/Join"))
import Private from "./routes/Private"
import Public from "./routes/Public"
import { Toaster } from "react-hot-toast"
const SearchPage = lazy(()=> import('./pages/SearchPage'))

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
                },
                {
                    path: "search-page/:text",
                    element: <SearchPage />
                }
            ]
        }
    ])

    return(
        <>  
            
            <RouterProvider router={router} />

            <Toaster 
                position="top-left"
                reverseOrder={false}
                duration="4000"
            />

        </>
    )
  
}

export default App
