import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
import { logout } from '../../store/session'


const LogoutButton = () => {
  const dispatch = useDispatch()
  // const navigate = useNavigate()

  const [isLogged, setIsLogged] = useState(false)

  const onLogout = async (e) => {
    await dispatch(logout())
    // navigate('/splash')
  }

  return <button onClick={onLogout}>Logout</button>
}

export default LogoutButton
