import {ActionTypes, ProfilePageType} from './store';

const initialState = {
	posts: [
		{id: 1, message: 'Hi! How are you?', likesCount: 15},
	],
	newPostText: 'some text',
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes) => {
	switch (action.type) {
		case 'ADD-POST':
			// state.posts.push({id: 5, message: state.newPostText, likesCount: 0})
			// state.newPostText = ''
			const newPost = {id: 2, message: state.newPostText, likesCount: 15}
			return {...state, posts: [...state.posts, newPost]}

		case 'UPDATE-POST-TEXT-AREA':
			// state.newPostText = action.postMessage

			return {...state, newPostText: action.postMessage}

		default:
			return state

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