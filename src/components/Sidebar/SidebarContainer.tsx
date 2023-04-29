import React from 'react'
import {connect} from 'react-redux'
import {RootPagesType} from '../../redux/store'
import Sidebar from './Sidebar'


const mapStateToProps = (state: RootPagesType) => {
	return {
      dialogs: state.dialogsPage.dialogs,
	}
}


const SidebarContainer = connect(mapStateToProps)(Sidebar)

export default SidebarContainer