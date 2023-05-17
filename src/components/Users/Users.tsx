import React from 'react'
import s from './Users.module.css'
import defaultUserPhoto from '../../assets/images/defaultPhoto.png'
import {User} from '../../redux/users-reducer'
import {NavLink} from 'react-router-dom'
import axios from 'axios'

type UsersPropsType = {
	totalUsersCount: number
	pageSize: number
	currentPage: number
	onPageChanged: (pageNumber: number) => void
	users: User[]
	unfollow: (userId: number) => void
	follow: (userId: number) => void
}

const Users = (props: UsersPropsType) => {

	const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
	const pages = []
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}

	let carouselPages
	const chosenPage = props.currentPage
	chosenPage - 3 < 0
		? carouselPages = pages.slice(0, 5)
		: carouselPages = pages.slice(chosenPage - 3, chosenPage + 2)

	const unfollowFc = (id: number) => {
		axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
			withCredentials: true,
			headers: {'API-KEY': 'd76d38ca-205c-4c62-971a-fbc3417a68fc'},
		})
			.then(response => {
				if (response.data.resultCode === 0) {
					props.unfollow(id)
				}
			})
	}
	const followFc = (id: number) => {
		axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, {
			withCredentials: true,
			headers: {'API-KEY': 'd76d38ca-205c-4c62-971a-fbc3417a68fc'},
		})
			.then(response => {
				if (response.data.resultCode === 0) {
					props.follow(id)
				}
			})
	}


	return (
		<div>
			<div>
				{carouselPages.map((p) => {
					return <span key={p}
									 className={chosenPage === p ? s.selectedPage : s.defaultPage}
									 onClick={() => props.onPageChanged(p)}
					>{p} </span>
				})}
			</div>
			{props.users.map(u =>
				<div key={u.id}>
					<div>
						<div>
							<NavLink to={`/profile/${u.id}`}>
								<img className={s.userPhoto} src={u.photos.small ? u.photos.small : defaultUserPhoto} alt="avatar"/>
							</NavLink>
						</div>
						<div>
							{u.followed
								? <button onClick={() => unfollowFc(u.id)}>Unfollow</button>
								: <button onClick={() => followFc(u.id)}>Follow</button>}
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

export default Users