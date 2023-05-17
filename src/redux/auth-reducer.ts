import {ActionTypes} from './redux-store'

export type Nullable<T> = T | null;

export type authMeType = {
	id: Nullable<number>;
	email: Nullable<string>;
	login: Nullable<string>;
	isAuth: boolean
};

const initialState: authMeType = {
	id: null,
	email: null,
	login: null,
	isAuth: false
}

export const authReducer = (state = initialState, action: ActionTypes) => {

	switch (action.type) {
		case 'SET_USER_DATA':
			return {...state, ...action.data, isAuth: true}
		case 'TOGGLE_IS_FETCHING':
			return {...state, isFetching: action.isFetching}

		default:
			return state

	}
}

export const setAuthUserDataAC = (data: authMeType) => ({type: 'SET_USER_DATA', data} as const)



