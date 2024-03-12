import React from 'react';
import './quickactions.css';
import { create_appt_icon, patient_checkin, create_patient_icon, patient_icon } from '../../assets';
import DateTimePicker from 'react-datetime-picker';
import { useState } from 'react';
import Popup from '../popup/Popup';

const Quickactions = ({ session, supabase }) => {



    // pop up window
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [text, setText] = useState('');

    const handlePopupOpen = () => {
        setPopupOpen(true);
    };

    const handlePopupClose = () => {
        setPopupOpen(false);
    };

    const handleFormSubmit = (formData) => {
        console.log('Form data submitted:', formData);
        // Perform any action with the form data
    };


    return (
        <div className='quickactions'>
            <div className='column_1'>
                <div className='img_container'>
                    <button className='button' onClick={handlePopupOpen}>
                        <img
                            src={create_appt_icon}
                            alt='create appointment icon'
                            className='qa_img'
                        />
                    </button>

                </div>
                <div className='qa_text'>Create Nueva Sita</div>




                <div className='img_container'>
                    <button className='button' onClick={handlePopupOpen}>
                        <img
                            src={patient_checkin}
                            alt='patient check in icon'
                            className='qa_img'
                        />
                    </button>

                </div>
                <div className='qa_text'>Registro de Cita</div>


            </div>
            <div className='column_2'>
                <div className='img_container'>
                    <button className='button' onClick={handlePopupOpen}>
                        <img
                            src={create_patient_icon}
                            alt='create patient icon'
                            className='qa_img'
                        />
                    </button>

                </div>
                <div className='qa_text'>Create Paciente Nuevo</div>



                <div className='img_container'>
                    <button className='button' onClick={handlePopupOpen}>
                        <img
                            src={patient_icon}
                            alt='patient icon'
                            className='qa_img'
                        />
                    </button>

                </div>

                <div className='qa_text'>Buscar Paciente</div>

                <Popup
                    isOpen={isPopupOpen}
                    onClose={handlePopupClose}
                    onFormSubmit={handleFormSubmit}
                />
            </div>
        </div>
    )
}

export default Quickactions