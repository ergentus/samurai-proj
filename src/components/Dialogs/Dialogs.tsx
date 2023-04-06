import React, {createRef} from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {ActionTypes, DialogsPageType} from '../../redux/state';
import {addMessageActionCreator, updateMessageTextAreaActionCreator} from '../../redux/dialogs-reducer';



type DialogsTypeProps = {
	dialogsPage: DialogsPageType
	dispatch: (action: ActionTypes) => void
}

const Dialogs = (props: DialogsTypeProps) => {

	const dialogsElements = props.dialogsPage.dialogs.map((d) => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>)
	const messageElements = props.dialogsPage.messages.map((m) => <Message message={m.message}/>)

	let areaField = createRef<HTMLTextAreaElement>()

	const addMessageHandler = () => {
		props.dispatch(addMessageActionCreator())
	}

	const onChangeMessageTextAreaHandler = () => {
		const text = areaField.current!.value
		props.dispatch(updateMessageTextAreaActionCreator(text))
	}

	return (
		<div className={s.dialogs}>
			<div className={s.dialogItems}>
				{dialogsElements}
			</div>
			<div className={s.messageItems}>
				{messageElements}
				<div className={s.sendMessageBlock}>
					<textarea
						className={s.textField}
						value={props.dialogsPage.newMessageText}
						ref={areaField}
						onChange={onChangeMessageTextAreaHandler}
					/>
					<button onClick={addMessageHandler}>Send</button>
				</div>
			</div>
		</div>
	)
}

export default Dialogs