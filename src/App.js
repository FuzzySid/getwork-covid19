import React from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import Main from './components/Main';
import BrowseTalent from './components/BrowseTalent';
import BrowseRoles from './components/BrowseRoles';
import Navbar from './components/ui/Navbar';

function App() {
  return (
    <div className="App">
   
        <BrowserRouter>
        <Navbar></Navbar>
          <Switch>
            <Route exact="true" path="/" component={Main}></Route>
            <Route exact="true" path="/browse/talent" component={BrowseTalent}></Route>
            <Route exact="true" path="/browse/roles" component={BrowseRoles}></Route>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
