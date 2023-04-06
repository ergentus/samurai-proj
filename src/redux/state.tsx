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

type SidebarPageType = {
	sidebar: any //! dont forget
}

export type RootPagesType = {
	profilePage: ProfilePageType
	dialogsPage: DialogsPageType
	sidebar: SidebarPageType
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
		sidebar: { //! dont forget
			sidebar: 'any', //! dont forget
		},
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
		if (action.type === 'ADD-POST') {
			this._state.profilePage.posts.push({id: 5, message: this._state.profilePage.newPostText, likesCount: 0,})
			this._state.profilePage.newPostText = ''
			this._callSubscriber(this._state)
		}
		if (action.type === 'UPDATE-POST-TEXT-AREA') {
			this._state.profilePage.newPostText = action.postMessage
			this._callSubscriber(this._state)
		}
		if (action.type === 'ADD-MESSAGE') {

			this._state.dialogsPage.messages.push({id: 2, message: this._state.dialogsPage.newMessageText,})
			this._state.dialogsPage.newMessageText = ''
			this._callSubscriber(this._state)
		}
		if (action.type === 'UPDATE-MESSAGE-TEXT-AREA') {
			this._state.dialogsPage.newMessageText = action.dialogMessage
			this._callSubscriber(this._state)
		}
	},
}

export const addPostActionCreator = () => ({type: 'ADD-POST'} as const)

export const UpdatePostTextAreaActionCreator = (newtext: string) => {
	return {
		type: 'UPDATE-POST-TEXT-AREA',
		postMessage: newtext,
	} as const
}

export const addMessageActionCreator = () => ({type: 'ADD-MESSAGE'} as const)

export const updateMessageTextAreaActionCreator = (newtext: string) => {
	return {
		type: 'UPDATE-MESSAGE-TEXT-AREA',
		dialogMessage: newtext,
	} as const
}

export default store
// window.store = store
