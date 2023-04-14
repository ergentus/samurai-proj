import React from 'react'
import {StoreType} from '../../redux/store'
import {addMessageActionCreator, updateMessageTextAreaActionCreator} from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'


type DialogsContainerTypeProps = {
	store: StoreType
}

const DialogsContainer = (props: DialogsContainerTypeProps) => {
	const state = props.store.getState()

	const addMessageHandler = () => {
		props.store.dispatch(addMessageActionCreator())
	}

	const onChangeMessageTextAreaHandler = (text: string) => {
		props.store.dispatch(updateMessageTextAreaActionCreator(text))
	}

	return (
		<Dialogs dialogsPage={state.dialogsPage}
					addMessage={addMessageHandler}
					updateMessageTextArea={onChangeMessageTextAreaHandler}/>
	)
}

export default DialogsContainer