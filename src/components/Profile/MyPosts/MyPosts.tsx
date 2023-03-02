import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'


type MyPostsProps = {

}

const MyPosts = (props: MyPostsProps): JSX.Element => {
   return (
         <div className={s.posts}>
            My posts
            <div className={s.new}>
               <textarea></textarea>
               <button>Add post</button>
            </div>
            <div>
               <Post message='Hi! How are you?' likesCount={15}/>
               <Post message='It`s my first post' likesCount={20}/>
            </div>
         </div>
   )
}

export default MyPosts;