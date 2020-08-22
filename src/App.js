import React from 'react'; 

import './App.css'; 

import Home from './components/Home'; 
import Details from './components/Details';
import SearchBar from './components/SearchBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 

function App () {
  return (
    <Router>
      <div className = "App">
          <Switch>

            <Route path = "/" exact component = {Home} />
            <Route path = "/details" component = {Details} />

          </Switch>

      </div>

    </Router>
  )
}

export default App; 