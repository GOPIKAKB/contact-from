import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='header-container'> 
            <img src='https://2.bp.blogspot.com/-UhrUiuwHtPU/UPY5Sxais-I/AAAAAAAAVmI/qMqaTiHGUVQ/s1600/ITV+HD+logo+2013.png'></img>
            <div className='button-container'>
                <button className='signup-button'><Link to='/login'>Sign Up</Link></button>
                <button className='login-button'><Link to='/signup'>Login</Link></button>
            </div>
        </div>
    )
}

export default Header