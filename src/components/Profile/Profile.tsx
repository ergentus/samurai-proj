import React from 'react'
import {ProfilePageType} from '../../redux/state'
import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

type ProfileTypeProps = {
   profilePage: ProfilePageType
   addPost: () => void
   updateTextArea: (postMessage: string) => void
}

const Profile = (props: ProfileTypeProps): JSX.Element => {
   return (
      <div className='main-block'>
         <ProfileInfo />
         <MyPosts posts={props.profilePage.posts}
                  addPost={props.addPost}
                  updateTextArea={props.updateTextArea}
                  newTextValue={props.profilePage.newPostText}/>
      </div>
   )
}

export default Profile