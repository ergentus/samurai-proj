import React from 'react'
import s from './AvatarFriends.module.css'

type AvatarFriendsPropsType = {
   id: number
   name: string
   avatar: string
}

const AvatarFriends = (props: AvatarFriendsPropsType) => {
   return (
      <span className={s.avatarFriends}>
         <img src={props.avatar} alt="avatar" />
      </span>
   )
}

export default AvatarFriends