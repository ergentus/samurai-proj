import React from 'react'
import s from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom';

type DialogItemTypeProps = {
   id: number
   name: string
}

const DialogItem = (props: DialogItemTypeProps) => {

   return (
      <div className={s.dialog}>
         <NavLink to={`/dialogs/${props.id}`} activeClassName={s.activeLink}>{props.name}</NavLink >
      </div>
   )
}

export default DialogItem