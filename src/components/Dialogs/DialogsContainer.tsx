import React from 'react'
import {RootPagesType} from '../../redux/store'
import {addMessageActionCreator, updateMessageTextAreaActionCreator} from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import {connect} from 'react-redux'
import {Dispatch} from 'redux'


const mapStateToProps = (state: RootPagesType) => {
	return {
		dialogsPage: state.dialogsPage,
	}
}
const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
		addMessage: () => dispatch(addMessageActionCreator()),
		updateMessageTextArea: (text: string) => dispatch(updateMessageTextAreaActionCreator(text)),
	}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer