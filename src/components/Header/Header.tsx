import React from 'react';
import s from './Header.module.css';

type HeaderProps = {

}

const Header = (probs: HeaderProps): JSX.Element => {
   return (
      <header className={s.header}>
         <img src='https://i.imgur.com/IyShrC1.png' alt='logo' />
      </header>
   )
}

export default Header