import React from 'react'
import {addPostActionCreator, ProfilePageType, UpdatePostTextAreaActionCreator} from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'
import {connect} from 'react-redux'
import {AppStateType} from '../../../redux/redux-store'
import {Dispatch} from 'redux'

type mapStateToPropsType = {
	profilePage: ProfilePageType
}

type mapDispatchToPropsType = {
	addPost: () => void
	updatePostTextArea: (text: string) => void
}

export type MyPostsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
	return {
		profilePage: state.profilePage
	}
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
	return {
		addPost: () => dispatch(addPostActionCreator()),
		updatePostTextArea: (text: string) => dispatch(UpdatePostTextAreaActionCreator(text)),
	}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer