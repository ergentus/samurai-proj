import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'



type ProfileTypeProps = {

}


const Profile = (props: ProfileTypeProps): JSX.Element => {
   return (
      <div className='main-block'>
         <ProfileInfo />
         <MyPosts />
      </div>
   )
}

export default Profile