import React from 'react'
import {DataPostType} from '../../../redux/state'
import s from './MyPosts.module.css'
import Post from './Post/Post'

type MyPostsProps = {
   posts: DataPostType[]
}

const MyPosts = (props: MyPostsProps): JSX.Element => {

   const postsElements = props.posts.map((p) => <Post key={p.id} message={p.message} likesCount={p.likesCount} />)
   
   return (
      <div className={s.postsBlock}>
         <h3>My posts</h3>
         <div className={s.new}>
            <div>
               <textarea></textarea>
            </div>
            <div>
               <button>Add post</button>
            </div>
         </div>
         <div className={s.posts}>
            {postsElements}
         </div>
      </div>
   )
}

export default MyPosts;