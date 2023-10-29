import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import './assets/css/responsive.css'
import { BlogProvider } from './Context/Blog.context.jsx';
import { AuthProvider } from './Context/Auth.context.jsx';
import {GridLoader} from 'react-spinners'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <BlogProvider>
        <Suspense fallback={ <GridLoader style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        }} color="#36d7b7" />}>
          <App />
        </Suspense>
      </BlogProvider>
    </AuthProvider>
  </React.StrictMode>,
)
