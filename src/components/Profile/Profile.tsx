import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'



type ProfileProps = {

}

const Profile = (props: ProfileProps): JSX.Element => {
   return (
      <div className={s.content}>
         <div >
            <img className={s.image} src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Sea_panorama_-_panoramio.jpg" alt="sea" />
         </div>
         <div>
            avatar+description
         </div>
         <MyPosts />
      </div>
   )
}

export default Profile