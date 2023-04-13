import {ActionTypes, DialogsPageType} from './store';

const initialState = {
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
}

const dialogsReducer = (dialogsPage: DialogsPageType = initialState, action: ActionTypes) => {
	switch (action.type) {
		case 'ADD-MESSAGE':
			dialogsPage.messages.push({id: 2, message: dialogsPage.newMessageText,})
			dialogsPage.newMessageText = ''
			return dialogsPage
		case 'UPDATE-MESSAGE-TEXT-AREA':
			dialogsPage.newMessageText = action.dialogMessage
			return dialogsPage
		default:
			return dialogsPage
	}
}

export const addMessageActionCreator = () => ({type: 'ADD-MESSAGE'} as const)

export const updateMessageTextAreaActionCreator = (newtext: string) => {
	return {
		type: 'UPDATE-MESSAGE-TEXT-AREA',
		dialogMessage: newtext,
	} as const
}

export default dialogsReducer