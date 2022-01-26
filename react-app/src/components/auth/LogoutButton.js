import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../store/session'


const LogoutButton = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onLogout = async (e) => {
    await dispatch(logout())
    navigate('/')
  }

  return <button onClick={onLogout} className='auth-button'><i class="fas fa-sign-out-alt"></i></button>
}

export default LogoutButton
