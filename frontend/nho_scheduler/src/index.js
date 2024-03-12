import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { createClient } from '@supabase/supabase-js';
import {SessionContextProvider } from '@supabase/auth-helpers-react';


const supabase = createClient(
  'https://xnahibfvvgaouxvpmfgi.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhuYWhpYmZ2dmdhb3V4dnBtZmdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk4MjM1MTAsImV4cCI6MjAyNTM5OTUxMH0.SzbfvsSLjah21ek_Wz5zm4vycE-G9CnMGQVfjD_gv2E'
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SessionContextProvider supabaseClient = {supabase} >
      <App />
    </SessionContextProvider>
  </React.StrictMode>
);
