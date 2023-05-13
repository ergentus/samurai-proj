import React from 'react'
import {connect} from 'react-redux'
import {AppStateType} from '../../redux/redux-store'
import {Dispatch} from 'redux'
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC, User} from '../../redux/users-reducer'
import axios from 'axios'
import Users from './Users'


type mapStateToPropsType = {
	users: User[]
	pageSize: number
	totalUsersCount: number
	currentPage: number
}

type mapDispatchToPropsType = {
	follow: (userId: number) => void
	unfollow: (userId: number) => void
	setUsers: (users: User[]) => void
	setCurrentPage: (currentPage: number) => void
	setTotalUsersCount: (totalCount: number) => void
}

export type UsersContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
	}
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
	return {
		follow: (userId: number) => dispatch(followAC(userId)),
		unfollow: (userId: number) => dispatch(unfollowAC(userId)),
		setUsers: (users: User[]) => dispatch(setUsersAC(users)),
		setCurrentPage: (currentPage: number) => dispatch(setCurrentPageAC(currentPage)),
		setTotalUsersCount: (totalCount: number) => dispatch(setTotalUsersCountAC(totalCount))
	}
}

class UsersContainer extends React.Component<UsersContainerPropsType> {

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items)
				this.props.setTotalUsersCount(response.data.totalCount)
			})
	}

	onPageChanged = (pageNumber: number) => {
		this.props.setCurrentPage(pageNumber)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
			.then(response => this.props.setUsers(response.data.items))
	}

	render() {

		return (
			<Users
				totalUsersCount={this.props.totalUsersCount}
				pageSize={this.props.pageSize}
				currentPage={this.props.currentPage}
				onPageChanged={this.onPageChanged}
				users={this.props.users}
				follow={this.props.follow}
				unfollow={this.props.unfollow}/>)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
