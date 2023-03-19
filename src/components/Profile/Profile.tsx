import React from 'react'
import {ProfilePageType } from '../../redux/state'
import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

type ProfileTypeProps = {
   profilePage: ProfilePageType
}

const Profile = (props: ProfileTypeProps): JSX.Element => {
   return (
      <div className='main-block'>
         <ProfileInfo />
         <MyPosts posts={props.profilePage.posts}/>
      </div>
   )
}

export default Profile