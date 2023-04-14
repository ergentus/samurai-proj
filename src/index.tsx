import React from 'react'
import './index.css'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/redux-store'
import {BrowserRouter} from 'react-router-dom'


let rerenderEntireTree = () => {
	ReactDOM.render(
		<BrowserRouter>
			<App dispatch={store.dispatch.bind(store)} store={store}/>
		</BrowserRouter>,
		document.getElementById('root'),
	)
}

// const state = store.getState()
rerenderEntireTree()
store.subscribe(() => rerenderEntireTree())
