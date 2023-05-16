import {ActionTypes} from './redux-store'

type DataPostType = {
	id: number
	message: string
	likesCount: number
}

export type ProfileType = {
	aboutMe: string,
	contacts: {
		facebook: string,
		website: string,
		vk: string,
		twitter: string,
		instagram: string,
		youtube: string,
		github: string,
		mainLink: string
	},
	lookingForAJob: boolean,
	lookingForAJobDescription: string,
	fullName: string,
	userId: number,
	photos: {
		small: string,
		large: string
	}
} | null

export type ProfilePageType = {
	posts: DataPostType[]
	newPostText: string
	profile: ProfileType
}

const initialState: ProfilePageType = {
	posts: [
		{id: 1, message: 'Hi! How are you?', likesCount: 15},
	],
	newPostText: 'some text',
	profile: null,
}

export const profileReducer = (state = initialState, action: ActionTypes) => {
	switch (action.type) {
		case 'ADD_POST':
			const newPost = {id: 2, message: state.newPostText, likesCount: 15}
			return {...state, posts: [...state.posts, newPost], newPostText: ''}

		case 'UPDATE_POST_TEXT_AREA':
			return {...state, newPostText: action.postMessage}
		case 'SET_USER_PROFILE':
			return {...state, profile: action.profile}

		default:
			return state

	}
}

export const addPostAC = () => ({type: 'ADD_POST'} as const)
export const updatePostTextAreaAC = (newText: string) => ({type: 'UPDATE_POST_TEXT_AREA', postMessage: newText,} as const)
export const setUserProfileAC = (profile: ProfileType) => ({type: 'SET_USER_PROFILE', profile,} as const)
