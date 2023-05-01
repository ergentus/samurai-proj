import React, {useEffect} from 'react'
import {UsersPropsType} from './UsersContainer'
import s from './Users.module.css'

const Users = (props: UsersPropsType) => {

	useEffect(() => {
		props.setUsers([
			{
				id: '1',
				photoURL: 'https://i.imgur.com/q2eCFBN.png',
				followed: false,
				fullName: 'Oleg',
				status: 'i am a boss',
				location: {country: 'Russia', city: 'Moscow'},
			},
			{
				id: '2',
				photoURL: 'https://i.imgur.com/q2eCFBN.png',
				followed: true,
				fullName: 'Victor',
				status: 'i am a boss too',
				location: {country: 'Belaruss', city: 'Minsk'},
			},
			{
				id: '3',
				photoURL: 'https://i.imgur.com/q2eCFBN.png',
				followed: false,
				fullName: 'Egor',
				status: 'i am not a boss',
				location: {country: 'Russia', city: 'Ekaterinburg'},
			},
		])
	}, [])

	return (
		<div>
			{props.users.map(u =>
				<div key={u.id}>
					<div>
						<div className={s.userPhoto}>
							<img src={u.photoURL} alt="avatar"/>
						</div>
						<div>
							{u.followed
								? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
								: <button onClick={() => props.follow(u.id)}>Follow</button>}
						</div>
					</div>
					<div>
						<span>
							<div>{u.fullName}</div>
							<div>{u.status}</div>
						</span>
						<span>
						<span>{u.location.country}, </span><span>{u.location.city}</span>
						</span>
					</div>
				</div>)
			}
		</div>
	)
}

export default Users