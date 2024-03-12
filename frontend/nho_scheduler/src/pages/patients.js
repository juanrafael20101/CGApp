import React from "react";
import {Navbar} from '../components';
import { useState, useEffect } from "react";
import { Schedule, Userinfo } from '../containers';
import { useSession, useSessionContext, useSupabaseClient } from '@supabase/auth-helpers-react';


const Patients = () => {
    const session = useSession(); // tokens, when session exists
    const supabase = useSupabaseClient(); // talk to supabase
    const url = "http://127.0.0.1:8000/api/";

    const fetchInfo = async () => {
        const responce = await fetch(url);
        setName(await responce.json())
    }

    useEffect(() => {
        fetchInfo();
    }, []);

    const [data, setName] = useState([]);
    console.log("startdfsdfsd",data)

    return (
        <div className='gradient__bg'>
        <div className = 'column_container'>
              <div className = "column_navigation">
                <Navbar/>
              </div>
              <div className = 'column_quick'>
              <center>
            {data.map((dataObj, index) => {
                return (
                    <div
                    style={{
                        width: "15em",
                        backgroundColor: "#35D841",
                        padding: 2,
                        borderRadius: 10,
                        marginBlock: 10,
                    }}
                    >
                    <p style={{ fontSize: 20, color: 'white' }}>{dataObj.Patient}</p>
                    <p style={{ fontSize: 20, color: 'white' }}>{dataObj.Description}</p>
                    </div>
                );
            })}
        </center>
              </div>
              <div className = 'column_schedule_info'>
              <Userinfo session = {session} supabase = {supabase} />
              <Schedule session = {session} supabase = {supabase} />
              </div>
            </div>
    </div>
    );
};

export default Patients;
