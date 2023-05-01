import React from 'react'
import s from './Sidebar.module.css'
import {NavLink} from 'react-router-dom'
import AvatarFriends from './AvatarFriends/AvatarFriends'
import {SidebarPropsType} from './SidebarContainer'


const Sidebar = (props: SidebarPropsType) => {
   //    const state = props.store.getState()
   const avatarFriend = props.dialogs.map((e) => <AvatarFriends key={e.id} id={e.id} name={e.name} avatar={e.avatar} />)

   return (
      <nav className={s.nav}>
         <div className={s.item}><NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink></div>
         <div className={s.item}><NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink></div>
         <div className={s.item}><NavLink to="/news" activeClassName={s.activeLink}>News</NavLink></div>
         <div className={s.item}><NavLink to="/users" activeClassName={s.activeLink}>Users</NavLink></div>
         <div className={s.item}><NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink></div>
         <div className={s.item}><NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink></div>
         <div className={s.nav_friendsBlock}>
            <div className={s.itemFriend}><NavLink to="/myfriends" activeClassName={s.activeLink}>My Friends</NavLink></div>
            <div className={s.avatarBlock}>{avatarFriend}</div>
         </div>
      </nav>
   )
}

export default Sidebar