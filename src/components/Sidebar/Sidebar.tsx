import React from 'react'
import s from './Sidebar.module.css'
import { NavLink } from 'react-router-dom';
import { DialogsPageType } from '../../redux/state';
import AvatarFriends from './AvatarFriends/AvatarFriends';

type SidebarPropsType = {
   sidebar: DialogsPageType
}

const Sidebar = (props: SidebarPropsType) => {

   const avatarFriend = props.sidebar.dialogs.map((e) => <AvatarFriends key={e.id} id={e.id} name={e.name} avatar={e.avatar} />)

   return (
      <nav className={s.nav}>
         <div className={s.item}><NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink></div>
         <div className={s.item}><NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink></div>
         <div className={s.item}><NavLink to="/news" activeClassName={s.activeLink}>News</NavLink></div>
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