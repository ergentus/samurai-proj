import {ActionTypes, ProfilePageType} from './state';

const profileReducer = (profilePage: ProfilePageType, action: ActionTypes) => {
	switch (action.type) {
		case 'ADD-POST':
			profilePage.posts.push({id: 5, message: profilePage.newPostText, likesCount: 0})
			profilePage.newPostText = ''
			return profilePage
		case 'UPDATE-POST-TEXT-AREA':
			profilePage.newPostText = action.postMessage
			return profilePage
		default:
			return profilePage

	}
}

export const addPostActionCreator = () => ({type: 'ADD-POST'} as const)

export const UpdatePostTextAreaActionCreator = (newtext: string) => {
	return {
		type: 'UPDATE-POST-TEXT-AREA',
		postMessage: newtext,
	} as const
}

export default profileReducer