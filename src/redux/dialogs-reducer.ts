import {ActionTypes} from './redux-store'


export type DataDialogsType = {
	id: number
	name: string
	avatar: string
}

type DataMessagestype = {
	id: number
	message: string
}

export type DialogsPageType = {
	dialogs: DataDialogsType[],
	messages: DataMessagestype[],
	newMessageText: string,
}

const initialState: DialogsPageType = {
	dialogs: [
		{id: 1, name: 'Oleg', avatar: 'https://cs6.pikabu.ru/avatars/760/v760056-585817783.jpg'},
		{id: 2, name: 'Victor', avatar: 'https://cs6.pikabu.ru/avatars/1227/v1227155-231214202.jpg'},
		{id: 3, name: 'Anna', avatar: 'https://greennova.shop/pics/79f93db6b28dc27596c8931dbfa39895.jpg'},
		{id: 4, name: 'Alex', avatar: 'https://android-obzor.com/wp-content/uploads/2022/04/4-7-300x300.jpg'},
		{id: 5, name: 'Ivan', avatar: 'https://i.imgur.com/q2eCFBN.png'},
	],
	messages: [
		{id: 1, message: 'Hi'},
		{id: 2, message: 'Hasdai'},
	],
	newMessageText: 'some text',
}

export const dialogsReducer = (state = initialState, action: ActionTypes): DialogsPageType => {
	switch (action.type) {
		case 'ADD_MESSAGE':
			const newMessage = {id: 3, message: state.newMessageText}
			return {...state, messages: [...state.messages, newMessage], newMessageText: ''}

		case 'UPDATE_MESSAGE_TEXT_AREA':
			return {...state, newMessageText: action.dialogMessage}

		default:
			return state
	}
}

export const addMessageAC = () => ({type: 'ADD_MESSAGE'} as const)

export const updateMessageTextAreaAC = (newtext: string) => {
	return {
		type: 'UPDATE_MESSAGE_TEXT_AREA',
		dialogMessage: newtext,
	} as const
}
