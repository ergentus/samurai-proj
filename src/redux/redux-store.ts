import {combineReducers, createStore} from 'redux'
import {addPostAC, profileReducer, updatePostTextAreaAC} from './profile-reducer'
import {addMessageAC, dialogsReducer, updateMessageTextAreaAC} from './dialogs-reducer'
import {sidebarReducer} from './sidebar-reducer'
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC, usersReducer} from './users-reducer'


export type ActionTypes =
	ReturnType<typeof addPostAC>
	| ReturnType<typeof updatePostTextAreaAC>
	| ReturnType<typeof addMessageAC>
	| ReturnType<typeof updateMessageTextAreaAC>
	| ReturnType<typeof followAC>
	| ReturnType<typeof unfollowAC>
	| ReturnType<typeof setUsersAC>
	| ReturnType<typeof setCurrentPageAC>
	| ReturnType<typeof setTotalUsersCountAC>

export type AppStateType = ReturnType<typeof rootReducer>

export const rootReducer = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	usersPage: usersReducer,
	sidebar: sidebarReducer,
})

export const store = createStore(rootReducer)
