import {ActionTypes} from './redux-store'

export type User = {
	'name': string
	'id': number
	'uniqueUrlName': null
	'photos': {
		'small': string
		'large': string
	},
	'status': string
	'followed': boolean
}

export type UsersPageType = {
	users: User[]
	pageSize: number
	totalUsersCount: number
	currentPage: number
}

const initialState: UsersPageType = {
	users: [],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
}

export const usersReducer = (state = initialState, action: ActionTypes) => {
	switch (action.type) {
		case 'FOLLOW':
			return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}
		case 'UNFOLLOW':
			return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}
		case 'SET-USERS':
			return {...state, users: action.users}
		case 'SET-CURRENT-PAGE':
			return {...state, currentPage: action.currentPage}
		case 'SET-TOTAL-USER-COUNT':
			return {...state, totalUsersCount: action.totalCount}

		default:
			return state

	}
}

export const followAC = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unfollowAC = (userId: number) => ({type: 'UNFOLLOW', userId} as const)
export const setUsersAC = (users: User[]) => ({type: 'SET-USERS', users} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage} as const)
export const setTotalUsersCountAC = (totalCount: number) => ({type: 'SET-TOTAL-USER-COUNT', totalCount} as const)


