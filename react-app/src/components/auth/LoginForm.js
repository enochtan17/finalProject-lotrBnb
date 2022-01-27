import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import { login } from '../../store/session'
import sauronIcon from '../../zzimages/sauron_icon/favicon.ico'
import eyeSlash from '../../zzimages/eye-slash-icon/favicon.ico'

const LoginForm = () => {
  const [errors, setErrors] = useState([])
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [typePass, setTypePass] = useState('password')
  const [sauron, setSauron] = useState(true)
  const user = useSelector(state => state.session.user)
  const dispatch = useDispatch()

  const changeField = () => {
    if (typePass == 'password') {
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
    return <Navigate to='/' />
  }

  return (
    <>
      <h1 className='auth-header'>Welcome Back!</h1>
      <form onSubmit={onLogin} className='auth-form'>
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
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
            onClick={changeField}></img>
            : <img
            src={eyeSlash}
            id='toggle-password'
            onClick={changeField}></img>
          }
        </div>
        <div className='login-button-container'>
          <button className='login-demo-button' type='submit'>Login</button>
          <button className='login-demo-button' onClick={demoLogin}>Demo</button>
        </div>
      </form>
    </>
  )
}

export default LoginForm
