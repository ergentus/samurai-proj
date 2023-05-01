import React from 'react'
import {connect} from 'react-redux'
import {AppStateType} from '../../redux/redux-store'
import {Dispatch} from 'redux'
import {followAC, setUsersAC, unfollowAC, User} from '../../redux/users-reducer'
import Users from './Users'


type mapStateToPropsType = {
	users: User[]
}

type mapDispatchToPropsType = {
	follow: (userId: string) => void
	unfollow: (userId: string) => void
	setUsers: (users: User[]) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
	return {
		users: state.usersPage.users
	}
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
	return {
		follow: (userId: string) => dispatch(followAC(userId)),
		unfollow: (userId: string) => dispatch(unfollowAC(userId)),
		setUsers: (users: User[]) => dispatch(setUsersAC(users))
	}
}

const usersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default usersContainer