import {DialogsPageType} from './dialogs-reducer'
import {ActionTypes} from './redux-store'

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

const sidebarReducer = (state: DialogsPageType = initialState, action: ActionTypes) => {
	return state
}

export default sidebarReducer