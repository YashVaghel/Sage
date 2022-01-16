import React from 'react'
import "./App.css"
import { BrowserRouter as Router ,Switch,Route}  from "react-router-dom"


import Home from './components/pages'

import Navbar from './components/Navbar'

export default function App() {

  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
<Route path="/" component={Home} exact/>


        </Switch>
      </Router>

    </div>
  )
}
