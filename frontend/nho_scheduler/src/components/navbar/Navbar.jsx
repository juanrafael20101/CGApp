import React from 'react';

import { home_icon, calendar_icon, patient_icon, setting_icon, staff_icon } from '../../assets';
import './navbar.css';
import { useNavigate } from "react-router-dom";
import Patients from "../../pages/patients";
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";


const Navbar = () => {
    const navigate = useNavigate();
   
    return (
        <div className = 'navbar'>
            <div className = 'box_border'>
                <button className='opaque_button' onClick= {() => navigate("/")}>
                    <div className = 'button_text'>Home</div>
                    <img
                        src = {home_icon}
                        className= 'img'
                        alt = 'home icon'
                    />
                </button>
            </div>

            <div className='box_border'>
                <button className='opaque_button' onClick= {() => navigate("/patients")}>

                    <div className='button_text'>Scheduler</div>
                    <img
                        src = {calendar_icon}
                        alt = 'calendar icon'
                        className = 'img'
                    />
                </button>
            </div>

            <div className='box_border'>
                <button className='opaque_button' onClick={() => navigate("/patients")}>

                    <div className='button_text'>Pacients</div>
                    <img
                        src = {patient_icon}
                        alt = 'patient icon'
                        className = 'img'
                    />
                </button>
            </div>

            <div className='box_border'>
                <button className='opaque_button' onClick={() => console.log('Equipo clicked')}>

                    <div className='button_text'>Team</div>
                    <img
                        src = {staff_icon}
                        alt = 'staff icon'
                        className = 'img'
                    />
                </button>
            </div>

            <div className='box_border_2'>
                <button className='opaque_button' onClick={() => console.log('Ajustes clicked')}>

                    <div className = 'button_text'>Settings</div>
                    <img
                        src = {setting_icon}
                        alt = 'setting icon'
                        className = 'img'
                    />
                </button>
            </div>

        </div>
    )
}

export default Navbar