import {ActionTypes} from './redux-store'

type DataPostType = {
	id: number
	message: string
	likesCount: number
}

export type ProfilePageType = {
	posts: DataPostType[]
	newPostText: string
}

const initialState: ProfilePageType = {
	posts: [
		{id: 1, message: 'Hi! How are you?', likesCount: 15},
	],
	newPostText: 'some text',
}

const profileReducer = (state = initialState, action: ActionTypes) => {
	switch (action.type) {
		case 'ADD-POST':
			const newPost = {id: 2, message: state.newPostText, likesCount: 15}
			return {...state, posts: [...state.posts, newPost]}

		case 'UPDATE-POST-TEXT-AREA':
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