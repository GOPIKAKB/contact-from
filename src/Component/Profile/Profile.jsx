import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearUser } from '../../Redux/login'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'
import './Profile.css'

function Profile() {
    const { user } = useSelector(state => state.login)
    const dispatch = useDispatch()

    const logout = () => {
        signOut(auth)
            .then(() => {
                dispatch(clearUser())
            })
            .catch((err) => {
                const error = err.message
            })
    }
    return (
        <div class="profile-container">
            <h2 >Profile Page</h2>
            <div class="user-details">
                <img src="https://www.clipartkey.com/mpngs/m/146-1461473_default-profile-picture-transparent.png" alt="User" class="user-image" />
                <div className='user-info-container'>
                    <h2 class="user-info">{user?.displayName} || Gopika</h2>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
                    <p class="user-info">Email: {user?.email} || abc</p>
                    <p class="user-info">Phone Number: {user?.phoneNumber || 'N/A'}</p>
                    <button onClick={logout} class="logout-button">Logout</button>

                </div>

            </div>
        </div>

    )
}

export default Profile
