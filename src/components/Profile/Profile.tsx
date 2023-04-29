import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'


const Profile = (): JSX.Element => {
	return (
		<div className="main-block">
			<ProfileInfo/>
			<MyPostsContainer/>
		</div>
	)
}

export default Profile