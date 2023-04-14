import React from 'react'
import {addPostActionCreator, UpdatePostTextAreaActionCreator} from '../../../redux/profile-reducer'
import {StoreType} from '../../../redux/store'
import MyPosts from './MyPosts'


type MyPostsContainer = {
	store: StoreType
}


const MyPostsContainer = (props: MyPostsContainer): JSX.Element => {
	const state = props.store.getState()

	const addPostHandler = () => {
		props.store.dispatch(addPostActionCreator())
	}

	const onChangeTextAreaHandler = (text: string) => {
		props.store.dispatch(UpdatePostTextAreaActionCreator(text))
	}

	return (
		<div>
			<MyPosts
				posts={state.profilePage.posts}
				updatePostTextArea={onChangeTextAreaHandler}
				addPost={addPostHandler}
				newTextValue={state.profilePage.newPostText}/>
		</div>
	)
}

export default MyPostsContainer