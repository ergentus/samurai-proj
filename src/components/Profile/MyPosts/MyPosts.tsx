import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'


type MyPostsProps = {

}

const MyPosts = (props: MyPostsProps): JSX.Element => {
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
            <Post message='Hi! How are you?' likesCount={15} />
            <Post message='It`s my first post' likesCount={20} />
         </div>
      </div>
   )
}

export default MyPosts;