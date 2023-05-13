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

export const profileReducer = (state = initialState, action: ActionTypes) => {
	switch (action.type) {
		case 'ADD_POST':
			const newPost = {id: 2, message: state.newPostText, likesCount: 15}
			return {...state, posts: [...state.posts, newPost], newPostText: ''}

		case 'UPDATE_POST_TEXT_AREA':
			return {...state, newPostText: action.postMessage}

		default:
			return state

	}
}

export const addPostAC = () => ({type: 'ADD_POST'} as const)

export const updatePostTextAreaAC = (newText: string) => {
	return {
		type: 'UPDATE_POST_TEXT_AREA',
		postMessage: newText,
	} as const
}
