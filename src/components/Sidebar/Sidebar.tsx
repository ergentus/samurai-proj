import React from 'react'
import s from './Sidebar.module.css'
import { NavLink } from 'react-router-dom';

type SidebarProps = {

}

const Sidebar = (props: SidebarProps): JSX.Element => {
   return (
      <nav className={s.nav}>
         <div className={s.item}><NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink></div>
         <div className={s.item}><NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink></div>
         <div className={s.item}><NavLink to="/news" activeClassName={s.activeLink}>News</NavLink></div>
         <div className={s.item}><NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink></div>
         <div className={s.item}><NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink></div>
      </nav>
   )
}

export default Sidebar