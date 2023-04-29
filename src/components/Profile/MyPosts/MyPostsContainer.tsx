import React from 'react'
import {addPostActionCreator, UpdatePostTextAreaActionCreator} from '../../../redux/profile-reducer'
import {RootPagesType} from '../../../redux/store'
import MyPosts from './MyPosts'
import {connect} from 'react-redux'
import {Dispatch} from 'redux'


const mapStateToProps = (state: RootPagesType) => {
	return {
		posts: state.profilePage.posts,
		newTextValue: state.profilePage.newPostText,
	}
}

const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
		addPost: () => dispatch(addPostActionCreator()),
		updatePostTextArea: (text: string) => dispatch(UpdatePostTextAreaActionCreator(text)),
	}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer