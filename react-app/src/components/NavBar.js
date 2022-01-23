import React from 'react'
import { NavLink } from 'react-router-dom'
import LogoutButton from './auth/LogoutButton'
import { useSelector } from 'react-redux'

const NavBar = () => {
  const userState = useSelector(state => state.session.user)

  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>
        { !userState && (
          <>
            <li>
              <NavLink to='/login' exact={true} activeClassName='active'>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to='/sign-up' exact={true} activeClassName='active'>
                Sign Up
              </NavLink>
            </li>
          </>
        )}
        { userState && (
        <li>
          <LogoutButton />
        </li> )}
      </ul>
    </nav>
  )
}

export default NavBar
