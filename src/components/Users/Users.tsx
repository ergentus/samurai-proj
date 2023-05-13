import React from 'react'
import s from './Users.module.css'
import defaultUserPhoto from '../../assets/images/img1.png'
import {User} from '../../redux/users-reducer'

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

	return (
		<div>
			<div>
				{carouselPages.map((p) => {
					return <span
						className={chosenPage === p ? s.selectedPage : s.defaultPage}
						onClick={() => props.onPageChanged(p)}
					>{p} </span>
				})}
			</div>
			{props.users.map(u =>
				<div key={u.id}>
					<div>
						<div className={s.userPhoto}>
							<img src={u.photos.small || defaultUserPhoto} alt="avatar"/>
						</div>
						<div>
							{u.followed
								? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
								: <button onClick={() => props.follow(u.id)}>Follow</button>}
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