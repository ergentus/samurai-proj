import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { stateType } from './redux/state';


const App = (props: stateType) => {
   return (
      <BrowserRouter>
         <div className='add-wrapper'>
            <Header />
            <Sidebar />
            <div className='app-wrapper-content'>
               <Route path='/profile'>
                  <Profile profilePage={props.state.profilePage} />
               </Route>
               <Route path='/dialogs'>
                  <Dialogs dialogsPage={props.state.dialogsPage} />
               </Route>
               <Route path='/news' component={News} />
               <Route path='/music' component={Music} />
               <Route path='/settings' component={Settings} />
            </div>
         </div>
      </BrowserRouter>
   )
}

export default App;
