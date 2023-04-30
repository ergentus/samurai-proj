import React from 'react'
import {connect} from 'react-redux'
import Sidebar from './Sidebar'
import {DataDialogsType} from '../../redux/dialogs-reducer'
import {AppStateType} from '../../redux/redux-store'

type mapStateToProps = {
	dialogs: DataDialogsType[]
}

export type SidebarPropsType = mapStateToProps

const mapStateToProps = (state: AppStateType): mapStateToProps => {
	return {
		dialogs: state.dialogsPage.dialogs
	}
}


const SidebarContainer = connect(mapStateToProps)(Sidebar)

export default SidebarContainer