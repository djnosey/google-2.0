import React from 'react';
import './App.css';
import Home from './Home';
import Results from './Results';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

function App() {




  return (
    <div className="app">

      <Router>
        <Switch>
          <Route path = "/results"><Results /></Route>
          <Route path = "/"><Home /></Route>
        </Switch>
      </Router>
        
        

    </div>
  );
}

export default App;
