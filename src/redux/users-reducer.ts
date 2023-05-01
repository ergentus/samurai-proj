import {ActionTypes} from './redux-store'

export type User = {
	id: string,
	photoURL: string
	followed: boolean,
	fullName: string,
	status: string,
	location: {country: string, city: string}
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

export const followAC = (userId: string) => ({type: 'FOLLOW', userId} as const)
export const unfollowAC = (userId: string) => ({type: 'UNFOLLOW', userId} as const)
export const setUsersAC = (users: User[]) => ({type: 'SET-USERS', users} as const)


