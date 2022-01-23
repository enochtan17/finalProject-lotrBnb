import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import LoginForm from './components/auth/LoginForm'
import SignUpForm from './components/auth/SignUpForm'
import Splash from './components/Splash'
import NavBar from './components/NavBar'
import SingleListing from './components/SingleListing'
import Listings from './components/Listings'
import { authenticate } from './store/session'

function App() {
  const [loaded, setLoaded] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    (async() => {
      await dispatch(authenticate())
      setLoaded(true)
    })()
  }, [dispatch])

  if (!loaded) {
    return null
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Splash />}></Route>
        <Route path='/login' element={<LoginForm />}></Route>
        <Route path='/sign-up' element={<SignUpForm />}></Route>
        <Route path='/listings' element={<Listings />}></Route>
        <Route path='/listings/:id' element={<SingleListing />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
