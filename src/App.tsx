import React from 'react'
import './App.css'
import {Route} from 'react-router-dom'
import Header from './components/Header/Header'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import MyFriends from './components/MyFriends/MyFriends'
import SidebarContainer from './components/Sidebar/SidebarContainer'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import UsersContainer from './components/Users/UsersContainer'
import withUrlDataContainerComponent from './components/Profile/ProfileContainer'


const App = () => {
   return (
      <div className='add-wrapper'>
         <Header/>
         <SidebarContainer />
         <div className='app-wrapper-content'>
            <Route path='/profile/:userId?' component={withUrlDataContainerComponent}/>
            <Route path='/dialogs' component={DialogsContainer}/>
            <Route path='/news' component={News}/>
            <Route path='/music' component={Music}/>
            <Route path='/users' component={UsersContainer}/>
            <Route path='/settings' component={Settings}/>
            <Route path='/myfriends'>
               <MyFriends/>
            </Route>
         </div>
      </div>
   )
}
export default App;