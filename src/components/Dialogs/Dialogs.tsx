import React from 'react'
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';

type DialogsPropsType = {}

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

type MessageItemTypeProps = {
   message: string
}

const MessageItem = (props: MessageItemTypeProps) => {
   return (
      <div className={s.message}>{props.message}</div>
   )
}

const Dialogs = (props: DialogsPropsType) => {
   return (
      <div className={s.dialogs}>
         <div className={s.dialogItems}>
            <DialogItem name='Oleg' id={1} />
            <DialogItem name='Victor' id={2} />
            <DialogItem name='Anna' id={3} />
            <DialogItem name='Alex' id={4} />
            <DialogItem name='Ivan' id={5} />
         </div>
         <div className={s.messageItems}>
            <MessageItem message='Hi'/>
            <MessageItem message='How are u?'/>
            <MessageItem message='Meet at 6 p.m.'/>
            <MessageItem message={`What's up?`}/>
         </div>
      </div>
   )
}

export default Dialogs