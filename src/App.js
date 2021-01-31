import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Searches from './components/pages/Searches';
import Record from './components/pages/Record';
import Profile from './components/pages/Profile';

function App() {
  return (

    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/searches' component={Searches} />
          <Route path='/record' component={Record} />
          <Route path='/profile' component={Profile} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
