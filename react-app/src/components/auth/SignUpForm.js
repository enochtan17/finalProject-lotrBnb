import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import { signUp } from '../../store/session'
import NavBar from '../NavBar'
import sauronIcon from '../../zzimages/sauron_icon/favicon.ico'
import eyeSlash from '../../zzimages/eye-slash-icon/favicon.ico'

const SignUpForm = () => {
  const [errors, setErrors] = useState([])
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [typePass, setTypePass] = useState('password')
  const [sauron, setSauron] = useState(true)
  const [typePassConfirm, setTypePassConfirm] = useState('password')
  const [sauronConfirm, setSauronConfirm] = useState(true)
  const user = useSelector(state => state.session.user)
  const dispatch = useDispatch()

  const changeField = () => {
    if (typePass === 'password') {
      setTypePass('text')
      setSauron(false)
    } else {
      setTypePass('password')
      setSauron(true)
    }
    return
  }

  const changeConfirm = () => {
    if (typePassConfirm === 'password') {
      setTypePassConfirm('text')
      setSauronConfirm(false)
    } else {
      setTypePassConfirm('password')
      setSauronConfirm(true)
    }
    return
  }

  const onSignUp = async (e) => {
    e.preventDefault()
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password))
      if (data) {
        console.log('data', data)
        setErrors(data)
      }
    }
  }

  const updateUsername = (e) => {
    setUsername(e.target.value)
  }

  const updateEmail = (e) => {
    setEmail(e.target.value)
  }

  const updatePassword = (e) => {
    setPassword(e.target.value)
  }

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value)
  }

  if (user) {
    return <Navigate to='/'/>
  }

  return (
    <>
      <NavBar />
      <h1 className='auth-header'>Register Account</h1>
      <form onSubmit={onSignUp} className='auth-form'>
        <div>
          {errors.map((error, ind) => (
            <div key={ind} className='error'>{error}</div>
          ))}
        </div>
        <Link to="/login" className='carousel'>Already have an account?</Link>
        <div className='label-input'>
          <input
            type='text'
            name='username'
            placeholder='Username'
            onChange={updateUsername}
            value={username}
          ></input>
        </div>
        <div className='label-input'>
          <input
            type='text'
            name='email'
            placeholder='Email'
            onChange={updateEmail}
            value={email}
          ></input>
        </div>
        <div className='label-input'>
          <input
            type={typePass}
            name='password'
            placeholder='Password'
            onChange={updatePassword}
            value={password}
          ></input>
          { sauron ? <img
            src={sauronIcon}
            id='toggle-password'
            onClick={changeField}
            alt=''></img>
            : <img
            src={eyeSlash}
            id='toggle-password'
            onClick={changeField}
            alt=''></img>
          }
        </div>
        <div className='label-input'>
          <input
            type={typePassConfirm}
            name='repeat_password'
            placeholder='Confirm Password'
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>
          { sauronConfirm ? <img
            src={sauronIcon}
            id='toggle-password'
            onClick={changeConfirm}
            alt=''></img>
            : <img
            src={eyeSlash}
            id='toggle-password'
            onClick={changeConfirm}
            alt=''></img>
          }
        </div>
        <button className='login-demo-button' type='submit'>Sign Up</button>
      </form>
    </>
  )
}

export default SignUpForm
