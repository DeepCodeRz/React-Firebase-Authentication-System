import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router'
import LandingPage from './pages/LandingPage.jsx'
import SigninPage from './pages/SigninPage.jsx'
import SignupPage from './pages/SignupPage.jsx'
import Application from './pages/LandingPage.jsx'

function App() {

  return (
    <>
        <Router>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/signin" element={<SigninPage />} />
              <Route path="/signup" element={<SignupPage />} />

              <Route path="/application" element={<Application />} />
            </Routes>
        </Router>
    </>
  )
}

export default App
