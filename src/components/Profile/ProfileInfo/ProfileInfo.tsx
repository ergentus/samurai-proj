import React from 'react'
import s from './ProfileInfo.module.css'
import {ProfileType} from '../../../redux/profile-reducer'
import defaultUserPhoto from '../../../assets/images/defaultPhoto.png'
import Preloader from '../../common/Preloader/Preloader'


type ProfileInfoTypeProps = {
	profile: ProfileType
}


const ProfileInfo = (props: ProfileInfoTypeProps) => {
	if (!props.profile) return <Preloader/>

	return (
		<>
			<div>
				<img className={s.image} src="https://i.imgur.com/EFPD4jS.png" alt="sea"/>
			</div>
			<div className={s.descriptionBlock}>
				<div>
					<div className={s.nameAboutBlock}>
						<img className={s.userPhoto}
							  src={props.profile.photos.small ? props.profile.photos.small : defaultUserPhoto} alt="avatar"
						/>
						<div>
							<h3>{props.profile.fullName}</h3>
						</div>
					</div>
					<div>{props.profile.aboutMe}</div>
					<div>В поисках работы: {props.profile.lookingForAJob ? 'Да' : 'Нет'}</div>
					<div>Навыки: {props.profile.lookingForAJobDescription ? props.profile.lookingForAJobDescription : 'Нет'}</div>
				</div>
				<div>
					Контакты
					<ul>
						{Object.entries(props.profile.contacts).map(([key, value]) => {
							if (key === 'mainLink' && value) {
								return <li key={key}>{`Главная ссылка: ${value}`}</li>
							} else if (value) {
								return <li key={key}>{`${key}: ${value}`}</li>
							} else {
								return null
							}
						})}
					</ul>
				</div>

			</div>
		</>
	)
}

export default ProfileInfo