import React from 'react'
import {addMessageActionCreator, DialogsPageType, updateMessageTextAreaActionCreator} from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import {connect} from 'react-redux'
import {AppStateType} from '../../redux/redux-store'
import {Dispatch} from 'redux'

type mapStateToPropsType = {
	dialogsPage: DialogsPageType
}

type mapDispatchToPropsType = {
	addMessage: () => void
	updateMessageTextArea: (text: string) => void
}

export type DialogPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
	return {
		dialogsPage: state.dialogsPage,
	}
}
const mapDispatchToProps = (dispatch: Dispatch) : mapDispatchToPropsType => {
	return {
		addMessage: () => dispatch(addMessageActionCreator()),
		updateMessageTextArea: (text: string) => dispatch(updateMessageTextAreaActionCreator(text)),
	}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer