import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';



const App = (): JSX.Element => {
   return (
      <div className='add-wrapper'>
         <Header/>
         <Navbar />
         <Profile />
      </div>
   );
}

export default App;
