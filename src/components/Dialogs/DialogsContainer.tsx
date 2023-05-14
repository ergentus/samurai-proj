import React from 'react'
import {addMessageAC, DialogsPageType, updateMessageTextAreaAC} from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import {connect} from 'react-redux'
import {AppStateType} from '../../redux/redux-store'

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

const DialogsContainer = connect(mapStateToProps, {
	addMessage: addMessageAC,
	updateMessageTextArea: updateMessageTextAreaAC,
})(Dialogs)

export default DialogsContainer