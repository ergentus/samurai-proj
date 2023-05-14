import React from 'react'
import {addPostAC, ProfilePageType, updatePostTextAreaAC} from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'
import {connect} from 'react-redux'
import {AppStateType} from '../../../redux/redux-store'

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
		profilePage: state.profilePage,
	}
}

export default connect(mapStateToProps, {
	addPost: addPostAC,
	updatePostTextArea: updatePostTextAreaAC,
})(MyPosts)