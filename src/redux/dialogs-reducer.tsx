import {ActionTypes, DialogsPageType} from './state';

const dialogsReducer = (dialogsPage: DialogsPageType, action: ActionTypes) => {
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