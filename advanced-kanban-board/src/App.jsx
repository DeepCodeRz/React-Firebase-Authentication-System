import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router'
import Landing from './pages/Landing.jsx'
import Signin from './pages/Signin.jsx'
import Signup from './pages/Signup.jsx'
import ResetPassword from "./pages/ResetPassword.jsx";
import Application from './pages/Application.jsx'

function App() {

  return (
    <>
        <Router>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/resetpassword" element={<ResetPassword />} />

              <Route path="/application" element={<Application />} />
            </Routes>
        </Router>
    </>
  )
}

export default App
