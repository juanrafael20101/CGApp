import { useSession, useSessionContext, useSupabaseClient } from '@supabase/auth-helpers-react';


import { Quickactions, Navbar } from './components';
import { Schedule, Userinfo } from './containers';

import './App.css';
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Patients from "./pages/patients";
import Home from "./pages";
import history from './history';

function App() {
  const session = useSession(); // tokens, when session exists
  const supabase = useSupabaseClient(); // talk to supabase
  const { isLoading } = useSessionContext();

  

  const [name, setName] = useState([]);

  if (isLoading) {
    return <></>
  }
  

  return (
    
    <Router history={history}>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route
          path="/Patients"
          element={<Patients />}
                      />
      </Routes>
    </Router>
   
  );



}

export default App;
