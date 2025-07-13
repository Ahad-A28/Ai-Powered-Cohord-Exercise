import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import RecpieContextWarper from './Context/RecpieContextWarper.jsx'
import { ToastContainer } from 'react-toastify'
 

createRoot(document.getElementById('root')).render(

<RecpieContextWarper>
 
    <BrowserRouter>
    <App /> 
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover/>
    </BrowserRouter>
 
  </RecpieContextWarper>
)
