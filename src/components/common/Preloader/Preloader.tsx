import React from 'react'
import s from './Preloader.module.css'
import Loader from '../../../assets/images/loader-circle.png'

function Preloader() {
	return <div><img className={s.preloader} src={`${Loader}`} alt="loading spinner"/></div>
}

export default Preloader