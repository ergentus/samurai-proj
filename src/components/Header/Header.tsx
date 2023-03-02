import React from 'react';
import s from './Header.module.css';

type HeaderProps = {

}

const Header = (probs: HeaderProps): JSX.Element => {
   return (
      <header className={s.header}>
         <img src='https://mass-images.pro/files/preview/3/12/ee2b9847529164b42ce3ea8521033ca9.png?1677672436380' alt='logo' />
      </header>
   )
}

export default Header