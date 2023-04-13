import profileReducer, {addPostActionCreator, UpdatePostTextAreaActionCreator} from './profile-reducer';
import dialogsReducer, {addMessageActionCreator, updateMessageTextAreaActionCreator} from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

type DataDialogsType = {
	id: number
	name: string
	avatar: string
}

type DataMessagestype = {
	id: number
	message: string
}

export type DataPostType = {
	id: number
	message: string
	likesCount: number
}

export type ProfilePageType = {
	posts: DataPostType[]
	newPostText: string
}

export type DialogsPageType = {
	dialogs: DataDialogsType[],
	messages: DataMessagestype[],
	newMessageText: string,
}

export type RootPagesType = {
	profilePage: ProfilePageType
	dialogsPage: DialogsPageType
	// sidebarBlock: any
}

export type StoreType = {
	_state: RootPagesType
	_callSubscriber: (state: RootPagesType) => void
	getState: () => RootPagesType
	subscribe: (callback: () => void) => void
	dispatch: (action: ActionTypes) => void
}

export type ActionTypes =
	ReturnType<typeof addPostActionCreator>
	| ReturnType<typeof UpdatePostTextAreaActionCreator>
	| ReturnType<typeof addMessageActionCreator>
	| ReturnType<typeof updateMessageTextAreaActionCreator>

const store: StoreType = {
	_state: {
		profilePage: {
			posts: [
				{id: 1, message: 'Hi! How are you?', likesCount: 15},
			],
			newPostText: 'some text',
		},
		dialogsPage: {
			dialogs: [
				{id: 1, name: 'Oleg', avatar: 'https://cs6.pikabu.ru/avatars/760/v760056-585817783.jpg'},
				{id: 2, name: 'Victor', avatar: 'https://cs6.pikabu.ru/avatars/1227/v1227155-231214202.jpg'},
				{id: 3, name: 'Anna', avatar: 'https://greennova.shop/pics/79f93db6b28dc27596c8931dbfa39895.jpg'},
				{id: 4, name: 'Alex', avatar: 'https://android-obzor.com/wp-content/uploads/2022/04/4-7-300x300.jpg'},
				{id: 5, name: 'Ivan', avatar: 'https://i.imgur.com/q2eCFBN.png'},
			],
			messages: [
				{id: 1, message: 'Hi'},
			],
			newMessageText: 'some text',
		},
		// sidebarBlock: {}
	},
	_callSubscriber(_state: RootPagesType) {
		console.log('state was changed')
	},

	getState() {
		return this._state
	},
	subscribe(callback) {
		this._callSubscriber = callback
	},
	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action)
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
		// this._state.sidebarBlock = sidebarReducer(this._state.sidebarBlock, action)
		this._callSubscriber(this._state)
	},
}


export default store
// window.store = store
