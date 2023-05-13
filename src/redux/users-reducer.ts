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
	isFetching: boolean
}

const initialState: UsersPageType = {
	users: [],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
}

export const usersReducer = (state = initialState, action: ActionTypes) => {
	switch (action.type) {
		case 'FOLLOW':
			return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}
		case 'UNFOLLOW':
			return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}
		case 'SET_USERS':
			return {...state, users: action.users}
		case 'SET_CURRENT_PAGE':
			return {...state, currentPage: action.currentPage}
		case 'SET_TOTAL_USER_COUNT':
			return {...state, totalUsersCount: action.totalCount}
		case 'TOGGLE_IS_FETCHING':
			return {...state, isFetching: action.isFetching}

		default:
			return state

	}
}

export const followAC = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unfollowAC = (userId: number) => ({type: 'UNFOLLOW', userId} as const)
export const setUsersAC = (users: User[]) => ({type: 'SET_USERS', users} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage} as const)
export const setTotalUsersCountAC = (totalCount: number) => ({type: 'SET_TOTAL_USER_COUNT', totalCount} as const)
export const toggleIsFetchingAC = (isFetching: boolean) => ({type: 'TOGGLE_IS_FETCHING', isFetching} as const)


