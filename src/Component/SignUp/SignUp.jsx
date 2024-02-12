import React, { useState } from 'react'

import './SignUp'
import { auth } from '../../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

function SignUp() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate =useNavigate()

    const signUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user
                navigate('/login')
            })
            .catch((err) => {
                const error = err.message
            })
    }
    return (
        <div className='login-container'>
            <div className='login'>
                <h1>sign-up</h1>
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
                    <button onClick={signUp}>Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp