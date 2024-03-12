import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Navbar } from './components';
import AppRouter from './views/AppRouter';

import './App.css';


function App() {

  return (
    /* the shell of the app always has our 
    - gradient background
    - navbar */
    <Router>
      <div className = 'App'>
        <div className= 'gradient__bg'>
          <div className = 'column_container'>
            <div className = "column_navigation">
              {/* we pass the approuter in order to define the routes given to our navbar */}
              {/* diff views are managed in our view folder */}
              <Navbar/>
            </div>
            <div className = 'column_view_page'>
              <AppRouter />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
