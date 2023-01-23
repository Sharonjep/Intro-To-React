import React from'react'
import ReactDOM from 'react-dom'
import './styles/global.css'

import App from './components/App'

const reactContentRoot = document.getElementById("root")

console.log(App)


ReactDOM.render(<App/>, reactContentRoot)