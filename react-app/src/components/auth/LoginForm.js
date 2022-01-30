import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import { login } from '../../store/session'
import NavBar from '../NavBar'
import sauronIcon from '../../zzimages/sauron_icon/favicon.ico'
import eyeSlash from '../../zzimages/eye-slash-icon/favicon.ico'

const LoginForm = () => {
  const user = useSelector(state => state.session.user)
  const dispatch = useDispatch()

  const [errors, setErrors] = useState([])
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [typePass, setTypePass] = useState('password')
  const [sauron, setSauron] = useState(true)

  const [classLoginFail, setClassLoginFail] = useState('')
  const [classWB, setClassWB] = useState('auth-header')
  const [errorBox, setErrorBox] = useState('')
  const [errorDiv, setErrorDiv] = useState('error')
  const [gandalf, setGandalf] = useState('none')

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

  const onLogin = async (e) => {
    e.preventDefault()
    const data = await dispatch(login(email, password))
    if (data) {
      setErrors(data)
      setClassLoginFail('login-fail')
      setClassWB('auth-header fail-wb')
      setErrorBox('error-box')
      setErrorDiv('error-fail')
      setGandalf('gandalf')
    } else {
      setClassLoginFail('')
      setClassWB('auth-header')
      setErrorBox('')
      setErrorDiv('error')
      setGandalf('none')
    }
  }

  const updateEmail = (e) => {
    setEmail(e.target.value)
  }

  const updatePassword = (e) => {
    setPassword(e.target.value)
  }

  const demoLogin = async e => {
    e.preventDefault()
    await dispatch(login('demo@lotr.io', 'password'))
  }

  if (user) {
    return <Navigate to='/listings' />
  }

  return (
    <>
      <NavBar />
      <div className={classLoginFail}>
        <h1 className={classWB}>Welcome Back!</h1>
        <form onSubmit={onLogin} className='auth-form'>
          <div className={errorBox}>
            {errors.map((error, ind) => (
              <div key={ind} id={ind} className={errorDiv}>{error}</div>
            ))}
          </div>
          <Link to="/sign-up" className='carousel'>Don't have an account?</Link>
          <div className='label-input'>
            <input
              name='email'
              type='text'
              placeholder='Email'
              value={email}
              onChange={updateEmail}
            />
          </div>
          <div className='label-input'>
            <input
              name='password'
              type={typePass}
              placeholder='Password'
              value={password}
              onChange={updatePassword}
            />
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
          <div className='login-button-container'>
            <button className='login-demo-button' type='submit'>Login</button>
            <button className='login-demo-button' onClick={demoLogin}>Demo</button>
          </div>
        </form>
        <h1 className={gandalf}>You shall not pass!</h1>
      </div>
    </>
  )
}

export default LoginForm
