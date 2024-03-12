import React from 'react';
import { Link } from 'react-router-dom';

import { home_icon, calendar_icon, patient_icon, setting_icon, staff_icon } from '../../assets';

import './navbar.css';

const Navbar = () => {
    return (
        <div className = 'navbar'>
            <div className = 'box_border'>
                <Link to = '/home' className = 'opaque_button'>
                    <div className = 'button_text'>Inicio</div>
                    <img
                        src = {home_icon}
                        className= 'img'
                        alt = 'home icon'
                    />
                </Link>
            </div>

            <div className='box_border'>
                <Link to = '/schedule' className = 'opaque_button'>

                    <div className='button_text'>Planificador</div>
                    <img
                        src = {calendar_icon}
                        alt = 'calendar icon'
                        className = 'img'
                    />
                </Link>
            </div>

            <div className='box_border'>
                <Link to = '/patients' className = 'opaque_button'>

                    <div className='button_text'>Pacientes</div>
                    <img
                        src = {patient_icon}
                        alt = 'patient icon'
                        className = 'img'
                    />
                </Link>
            </div>

            <div className='box_border'>
                <Link to = '/staff' className = 'opaque_button'>

                    <div className='button_text'>Equipo</div>
                    <img
                        src = {staff_icon}
                        alt = 'staff icon'
                        className = 'img'
                    />
                </Link>
            </div>

            <div className='box_border_2'>
                <Link to = '/settings' className = 'opaque_button'>

                    <div className = 'button_text'>Ajustes</div>
                    <img
                        src = {setting_icon}
                        alt = 'setting icon'
                        className = 'img'
                    />
                </Link>
            </div>

        </div>
    )
}

export default Navbar