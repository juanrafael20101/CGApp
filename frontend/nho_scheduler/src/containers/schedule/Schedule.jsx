import React, {useState, useEffect } from 'react';
import './schedule.css';
import DateTimePicker from 'react-datetime-picker';

const Schedule = () => {

    // for setting up calendar
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    // for setting range of calendar
    const end = new Date();
    end.setHours(23, 59, 59, 999);
    end.setDate(start.getDate() + 7)

    // days of week for table
    const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

    return (
        <div className = 'schedule'>
            <div className = 'date_block'>
                <p>Hoy es {daysOfWeek[start.getDay()]}, {start.getMonth() + 1}/{start.getDate()}/{start.getFullYear()}</p>
                
            </div>
            <table>
             <thead>
            <tr>
            <th >Hora</th>
                {daysOfWeek.map((day) => (
                <th key={day}>{day}</th>
             ))}
            </tr>
        </thead>
            </table>
          




        </div>
    )
}


export default Schedule;