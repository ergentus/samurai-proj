import React from 'react'
import {StoreType} from '../../redux/store'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'

type ProfileTypeProps = {
	store: StoreType
}

const Profile = (props: ProfileTypeProps): JSX.Element => {
	return (
		<div className="main-block">
			<ProfileInfo/>
			<MyPostsContainer
				store={props.store}
			/>
		</div>
	)
}

export default Profile