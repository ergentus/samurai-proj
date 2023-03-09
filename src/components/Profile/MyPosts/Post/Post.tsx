import React from 'react'
import s from './Post.module.css'

type PostProps = {
   message: string
   likesCount: number
}

const Post = (props: PostProps): JSX.Element => {
   return (
      <div className={s.item}>
         <img src="https://cs6.pikabu.ru/avatars/760/v760056-585817783.jpg" alt="avatar" />
         {props.message}
         <span> {props.likesCount}</span>
      </div>
   )
}

export default Post;