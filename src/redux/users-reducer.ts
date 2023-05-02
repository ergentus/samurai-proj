import {ActionTypes} from './redux-store'

export type User = {
	"name": string
	"id": number,
	"uniqueUrlName": null,
	"photos": {
		"small": string ,
		"large": string
	},
	"status": string,
	"followed": boolean
}

export type UsersPageType = {
	users: User[]
}

const initialState: UsersPageType = {
	users: [],
}

export const usersReducer = (state = initialState, action: ActionTypes) => {
	switch (action.type) {
		case 'FOLLOW':
			return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}
		case 'UNFOLLOW':
			return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}
		case 'SET-USERS':
			return { ...state, users: [...state.users, ...action.users]}

		default:
			return state

	}
}

export const followAC = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unfollowAC = (userId: number) => ({type: 'UNFOLLOW', userId} as const)
export const setUsersAC = (users: User[]) => ({type: 'SET-USERS', users} as const)


