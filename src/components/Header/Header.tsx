import React from 'react'
import s from './Header.module.css'
import {NavLink} from 'react-router-dom'
import {Nullable} from '../../redux/auth-reducer'


type HeaderPropsType = {
	login: Nullable<string>
	isAuth: boolean
}

const Header = (props: HeaderPropsType) => {

	return (
		<header className={s.header}>
			<div>
				<img src="https://i.imgur.com/IyShrC1.png" alt="logo"/>
			</div>
			<div className={s.loginBlock}>
				{props.isAuth
					? props.login
					: <NavLink to={'/login'}>Login</NavLink>}

			</div>
		</header>
	)
}

export default Header