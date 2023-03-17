import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {dialogsPageType,} from '../../redux/state';


type DialogsTypeProps = {
   dialogsPage: dialogsPageType
}

const Dialogs = (props: DialogsTypeProps) => {

   const dialogsElements = props.dialogsPage.dialogs.map((d) => <DialogItem key={d.id} name={d.name} id={d.id} />)
   const messageElements = props.dialogsPage.messages.map((m) => <Message key={m.id} message={m.message} />)

   return (
      <div className={s.dialogs}>
         <div className={s.dialogItems}>
            {dialogsElements}
         </div>
         <div className={s.messageItems}>
            {messageElements}
         </div>
      </div>
   )
}

export default Dialogs