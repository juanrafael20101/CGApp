import React from "react";
import {Navbar,Popup,Quickactions} from '../components';
import { Schedule, Userinfo } from '../containers';
import { useSession, useSessionContext, useSupabaseClient } from '@supabase/auth-helpers-react';



const Home = () => {
    const session = useSession(); // tokens, when session exists
    const supabase = useSupabaseClient(); // talk to supabase
    const { isLoading } = useSessionContext();

    if (isLoading) {
        return <></>
      }

    return (
    
        <div className = 'App'>
          <div className= 'gradient__bg'>
    
            
            <div className = 'column_container'>
              <div className = "column_navigation">
                <Navbar/>
              </div>
              <div className = 'column_quick'>
                <Quickactions session = {session} supabase = {supabase} />
              </div>
              <div className = 'column_schedule_info'>
              <Userinfo session = {session} supabase = {supabase} />
              <Schedule session = {session} supabase = {supabase} />
              </div>
            </div>
            
            
    
          </div>
        </div>
      );
};

export default Home;
