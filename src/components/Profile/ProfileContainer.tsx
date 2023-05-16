import React from 'react'
import Profile from './Profile'
import axios from 'axios'
import {connect} from 'react-redux'
import {AppStateType} from '../../redux/redux-store'
import {ProfileType, setUserProfileAC} from '../../redux/profile-reducer'
import {RouteComponentProps, withRouter} from 'react-router-dom'

type PathParamsType = {
	userId: string;
}

type mapStateToPropsType = {
	profile: ProfileType
}

type mapDispatchToPropsType = {
	setUserProfile: (profile: ProfileType) => void
}

type ProfileContainerPropsType =
	mapStateToPropsType
	& mapDispatchToPropsType
	& RouteComponentProps<PathParamsType>


const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
	return {
		profile: state.profilePage.profile,
	}
}

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

	componentDidMount() {
		const userId = this.props.match.params.userId ?? 2
		axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
			.then(response => {
				this.props.setUserProfile(response.data)
			})
	}

	render() {
		return (
			<div className="main-block">
				<Profile
					profile={this.props.profile}
				/>
			</div>
		)
	}
}

const withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
	setUserProfile: setUserProfileAC,
})(withUrlDataContainerComponent)