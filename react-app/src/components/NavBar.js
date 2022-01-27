import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import LogoutButton from './auth/LogoutButton'
import { useDispatch, useSelector } from 'react-redux'
import { addListingOff } from '../store/showAddListingForm'
import { editListingOff } from '../store/showEditListingForm'
import { editReviewOff } from '../store/showEditReviewForm'
import './NewListingForm/newListingForm.css'

const NavBar = () => {
  const userState = useSelector(state => state.session.user)
  const showAddListingForm = useSelector(state => state.addListingFormReducer)
  const showEditListingForm = useSelector(state => state.editListingFormReducer)
  const showEditReviewForm = useSelector(state => state.editReviewFormReducer)
  const navigate = useNavigate()
  const dispatch = useDispatch()

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
    <>
      { showAddListingForm && (
        <div
          className='blackout'
          onClick={e => {
            dispatch(addListingOff())
          }}
        ></div>
      )}
      { showEditListingForm && (
        <div
          className='blackout'
          onClick={e => {
            dispatch(editListingOff())
          }}
        ></div>
      )}
      { showEditReviewForm && (
        <div
          className='blackout'
          onClick={e => {
            dispatch(editReviewOff())
          }}
        ></div>
      )}
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
                <img src="https://img.icons8.com/external-bearicons-outline-color-bearicons/25/000000/external-sign-up-call-to-action-bearicons-outline-color-bearicons-1.png" alt=''/>
              </NavLink>
            </div>
          </div>
        )}
        { userState && (
        <div className='logout-div'>
          <LogoutButton />
        </div> )}
      </nav>
    </>
  )
}

export default NavBar
