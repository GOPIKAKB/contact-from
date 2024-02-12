import React, { useState } from 'react'

import './Login.css'
import { auth } from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

import { useDispatch, useSelector } from 'react-redux'
import { setAccessTocken, setUser } from '../../Redux/login'

function Login() {

  const dispatch = useDispatch()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { user } = useSelector(state => state.login)

  const login = () => {

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        dispatch(setUser(userCredential.user))
        dispatch(setAccessTocken(userCredential.accessToken))
        setEmail("")
        setPassword("")
      })
      .catch((err) => {
        const error = err.message
        console.log(err);
      })
  }

  return (
    <div className='login-container'>
      {user ? <div>{user}</div>
      :<div className='login'>
        <h1>Login</h1>
        <form className='login-form'>
          <label>Email:</label>
          <input
            type='text'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password:</label>
          <input
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={login}>Login</button>
        </form>
      </div>
        }
    </div>
  )
}

export default Login