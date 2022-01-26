import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import LogoutButton from './auth/LogoutButton'
import { useSelector } from 'react-redux'


const NavBar = () => {
  const userState = useSelector(state => state.session.user)
  const navigate = useNavigate()

  const goHome = () => {
    navigate('/')
  }

  const goLogin = () => {
    navigate('/login')
  }

  const goSignUp = () => {
    navigate('/sign-up')
  }

  return (
    <nav>
      <div onClick={goHome}>
        <NavLink to='/' className='home-text'>
          Middle Earth BBnB
        </NavLink>
      </div>
      { !userState && (
        <div className='auth-div'>
          <div className='auth-button' onClick={goLogin}>
            <NavLink to='/login' className='login-text'>
              Log In
            </NavLink>
          </div>
          <div className='auth-button' onClick={goSignUp}>
            <NavLink to='/sign-up'>
              <img src="https://img.icons8.com/external-bearicons-outline-color-bearicons/25/000000/external-sign-up-call-to-action-bearicons-outline-color-bearicons-1.png"/>
            </NavLink>
          </div>
        </div>
      )}
      { userState && (
      <div className='logout-div'>
        <LogoutButton />
      </div> )}
    </nav>
  )
}

export default NavBar
