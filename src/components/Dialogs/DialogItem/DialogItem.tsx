import React from 'react'
import s from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom';

type DialogItemTypeProps = {
   id: number
   name: string
   avatar: string
}

const DialogItem = (props: DialogItemTypeProps) => {

   return (
      <div className={s.dialog}>
         <img src={props.avatar} alt='avatar'/>
         <span className={s.item}><NavLink to={`/dialogs/${props.id}`} activeClassName={s.activeLink}>{props.name}</NavLink ></span>
         
      </div>
   )
}

export default DialogItem