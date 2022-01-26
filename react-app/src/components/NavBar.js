import React from 'react'
import { NavLink } from 'react-router-dom'
import LogoutButton from './auth/LogoutButton'
import { useSelector } from 'react-redux'

const NavBar = () => {
  const userState = useSelector(state => state.session.user)

  return (
    <nav>
      <div>
        <NavLink to='/' exact={true} activeClassName='active'>
          Home
        </NavLink>
      </div>
      { !userState && (
        <div className='auth-div'>
          <div className='auth-button'>
            <NavLink to='/login' exact={true} activeClassName='active'>
              <img src="https://img.icons8.com/external-bearicons-flat-bearicons/25/000000/external-login-call-to-action-bearicons-flat-bearicons.png"/>
            </NavLink>
          </div>
          <div className='auth-button'>
            <NavLink to='/sign-up' exact={true} activeClassName='active'>
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
