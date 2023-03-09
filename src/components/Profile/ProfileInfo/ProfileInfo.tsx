import React from 'react'
import s from './ProfileInfo.module.css'



type ProfileTypeProps = {

}


const ProfileInfo = (props: ProfileTypeProps): JSX.Element => {
   return (
      <>
         <div >
            <img className={s.image} src="https://i.imgur.com/EFPD4jS.png" alt="sea" />
         </div>
         <div className={s.descriptionBlock}>
            avatar+description
         </div>
      </>
   )
}

export default ProfileInfo