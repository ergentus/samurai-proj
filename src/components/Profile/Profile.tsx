import React from 'react'
import {ActionTypes, ProfilePageType} from '../../redux/state'
import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

type ProfileTypeProps = {
   profilePage: ProfilePageType
   dispatch: (action: ActionTypes) => void
}

const Profile = (props: ProfileTypeProps): JSX.Element => {
   return (
      <div className='main-block'>
         <ProfileInfo />
         <MyPosts posts={props.profilePage.posts}
                  newTextValue={props.profilePage.newPostText}
						dispatch={props.dispatch}
			/>
      </div>
   )
}

export default Profile