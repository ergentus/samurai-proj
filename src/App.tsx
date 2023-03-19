import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import state from './redux/state';
import MyFriends from './components/MyFriends/MyFriends';


const App = () => {
   return (
         <div className='add-wrapper'>
            <Header />
            <Sidebar sidebar={state.dialogsPage}/>
            <div className='app-wrapper-content'>
               <Route path='/profile'>
                  <Profile profilePage={state.profilePage} />
               </Route>
               <Route path='/dialogs'>
                  <Dialogs dialogsPage={state.dialogsPage} />
               </Route>
               <Route path='/news' component={News} />
               <Route path='/music' component={Music} />
               <Route path='/settings' component={Settings} />
               <Route path='/myfriends'>
                  <MyFriends  />
               </Route>
            </div>
         </div>
   )
}

export default App;
