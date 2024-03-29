import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import {ProfileType} from '../../redux/profile-reducer'

type ProfilePropsType = {
	profile: ProfileType
}

const Profile = (props: ProfilePropsType ) => {
	return (
		<div className="main-block">
			<ProfileInfo profile={props.profile}/>
			<MyPostsContainer/>
		</div>
	)
}

export default Profile