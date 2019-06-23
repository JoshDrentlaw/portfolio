import 'react-hot-loader'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Layout from './components/layout'

import './index.css'

class App extends Component {
    render() {
        return (
            <Layout />
        )
    }
}

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('app')
)