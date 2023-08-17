import React from 'react'
import "../screens/ProfileScreen.css"
import Nav from '../Nav'
import avatar from "../images/NetflixAvatar.png"
import { selectUser } from '../../features/userSlice';
import { useSelector } from 'react-redux';
import { auth } from '../../firebase';
import PlanScreen from './PlanScreen';


function ProfileScreen() {
    const user = useSelector(selectUser);

  return (
    <div className='profileScreen'>
        <Nav />
        <div className='profileScreen_body'>
            <h1>Edit Profile</h1>
            <div className='profileScreen_info'>
                <img src={avatar} alt='' />
            
                <div className='profileScreen_details'>
                    <h2>{user.email}</h2>
                    <div className='profileScreen_plans'>
                        <h3>Plans</h3>
                        <PlanScreen />
                        <button onClick={() => auth.signOut()} className='profileScreen_signOut'>Sign Out</button>
                    </div>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileScreen