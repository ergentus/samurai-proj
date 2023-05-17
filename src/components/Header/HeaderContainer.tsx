import React from 'react'
import {connect} from 'react-redux'
import {authMeType, Nullable, setAuthUserDataAC} from '../../redux/auth-reducer'
import Header from './Header'
import axios from 'axios'
import {toggleIsFetchingAC} from '../../redux/users-reducer'
import {AppStateType} from '../../redux/redux-store'


type mapStateToPropsType = {
	id: Nullable<number>
	email: Nullable<string>
	login: Nullable<string>
	isAuth: boolean
}

type mapDispatchToPropsType = {
	setAuthUserData: (data: authMeType) => void
}

type HeaderContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
	return {
		id: state.auth.id,
		email: state.auth.email,
		login: state.auth.login,
		isAuth: state.auth.isAuth,
	}
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

	componentDidMount() {
		axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
			.then(response => {
				if (response.data.resultCode === 0) {
					this.props.setAuthUserData(response.data.data)
				}
			})
	}

	render() {
		return (
			<Header login={this.props.login} isAuth={this.props.isAuth}/>
		)
	}
}


export default connect(mapStateToProps, {
	setAuthUserData: setAuthUserDataAC,
	toggleIsFetching: toggleIsFetchingAC,
})(HeaderContainer)