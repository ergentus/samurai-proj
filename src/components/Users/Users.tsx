import React, {useEffect} from 'react'
import {UsersPropsType} from './UsersContainer'
import s from './Users.module.css'
import axios from 'axios'
import userPhoto from './../../assets/images/img1.png'

class Users extends React.Component<UsersPropsType> {

	componentDidMount() {
		axios.get('https://social-network.samuraijs.com/api/1.0/users')
			.then(response => this.props.setUsers(response.data.items))
	}

	render() {
		return (
			<div>
				{this.props.users.map(u =>
					<div key={u.id}>
						<div>
							<div className={s.userPhoto}>
								<img src={u.photos.small || userPhoto} alt="avatar"/>
							</div>
							<div>
								{u.followed
									? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
									: <button onClick={() => this.props.follow(u.id)}>Follow</button>}
							</div>
						</div>
						<div>
						<span>
							<div>{u.name}</div>
							<div>{u.status}</div>
						</span>
							<span>
						<span>{'Russia'}, </span><span>{'Moskow'}</span>
						</span>
						</div>
					</div>)
				}
			</div>
		)
	}
}

export default Users