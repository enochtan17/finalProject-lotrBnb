import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { authenticate } from './store/session'
import LoginForm from './components/auth/LoginForm'
import SignUpForm from './components/auth/SignUpForm'
import Splash from './components/Splash'
import SingleListing from './components/SingleListing'
import Listings from './components/Listings'
import NotFound from './components/NotFound'
import Forbidden from './components/Forbidden'

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
      <Routes>
        <Route path='/' element={<Splash />}></Route>
        <Route path='/login' element={<LoginForm />}></Route>
        <Route path='/sign-up' element={<SignUpForm />}></Route>
        <Route path='/listings' element={<Listings />}></Route>
        <Route path='/listings/:id' element={<SingleListing />}></Route>
        <Route path='/forbidden' element={<Forbidden />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
