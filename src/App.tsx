import React from 'react'
import './App.css'
import {Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Profile from './components/Profile/Profile'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import MyFriends from './components/MyFriends/MyFriends'
import {ActionTypes, StoreType} from './redux/store'
import DialogsContainer from './components/Dialogs/DialogsContainer'

type AppPropstype = {
   store: StoreType
   dispatch: (action: ActionTypes) => void
}

const App = (props:AppPropstype) => {
   return (
      <div className='add-wrapper'>
         <Header/>
         <Sidebar store={props.store}/>
         <div className='app-wrapper-content'>
            <Route path='/profile'>
               <Profile store={props.store}/>
            </Route>
            <Route path='/dialogs'>
               <DialogsContainer store={props.store}/>
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