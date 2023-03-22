import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateTextArea, RootPagesType, addMessage, updateMessageTextArea} from './redux/state';
import { BrowserRouter } from 'react-router-dom';

export let rerenderEntireTree = (state:RootPagesType) => {
   ReactDOM.render(
      <BrowserRouter>
         <App state={state}
              addPost={addPost}
              updateTextArea={updateTextArea}
              addMessage={addMessage}
              updateMessageTextArea={updateMessageTextArea}/>
      </BrowserRouter>,
      document.getElementById('root')
   );
}
