import {combineReducers, createStore} from 'redux'
import profileReducer, {addPostActionCreator, UpdatePostTextAreaActionCreator} from './profile-reducer'
import dialogsReducer, {addMessageActionCreator, updateMessageTextAreaActionCreator} from './dialogs-reducer'
import sidebarReducer from './sidebar-reducer'

export type ActionTypes =
	ReturnType<typeof addPostActionCreator>
	| ReturnType<typeof UpdatePostTextAreaActionCreator>
	| ReturnType<typeof addMessageActionCreator>
	| ReturnType<typeof updateMessageTextAreaActionCreator>

export const rootReducer = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	sidebar: sidebarReducer
})

export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)
