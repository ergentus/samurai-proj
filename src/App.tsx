import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import MyFriends from './components/MyFriends/MyFriends';
import {ActionTypes, RootPagesType} from './redux/state';

type AppPropstype = {
   state: RootPagesType
   dispatch: (action: ActionTypes) => void
}

const App = (props:AppPropstype) => {
   return (
      <div className='add-wrapper'>
         <Header/>
         <Sidebar sidebar={props.state.dialogsPage}/>
         <div className='app-wrapper-content'>
            <Route path='/profile'>
               <Profile profilePage={props.state.profilePage}
                        dispatch={props.dispatch}
               />
            </Route>
            <Route path='/dialogs'>
               <Dialogs dialogsPage={props.state.dialogsPage}
                        dispatch={props.dispatch}
               />
            </Route>
            <Route path='/news' component={News}/>
            <Route path='/music' component={Music}/>
            <Route path='/settings' component={Settings}/>
            <Route path='/myfriends'>
               <MyFriends/>
            </Route>
         </div>
      </div>
   )
}
export default App;