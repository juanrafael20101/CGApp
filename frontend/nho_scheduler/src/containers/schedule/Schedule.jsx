import React, {useState, useEffect } from 'react';
import './schedule.css';
import DateTimePicker from 'react-datetime-picker';

import { useSession, useSessionContext, useSupabaseClient } from '@supabase/auth-helpers-react';

const Schedule = ({session, supabase}) => {

    // for setting up calendar
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    // for setting range of calendar
    const end = new Date();
    end.setHours(23, 59, 59, 999);
    end.setDate(start.getDate() + 7)

    // days of week for table
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


    // google api query search time range
    const timeMin = start.toISOString();
    const timeMax = end.toISOString();

    // google api call to return calendar events in time range
    async function showCalendar() {
        console.log('Showing calendar');

        
        console.log(start);
        console.log(timeMin);
        console.log(timeMax);

        const url = "https://www.googleapis.com/calendar/v3/calendars/primary/events?timeMin=" + timeMin + "&timeMax=" + timeMax;
        // returns all events that occur during the timeMIn ('today') and timeMax ('1 week after')
        // this does not include events that repeat as of now
        await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization':'Bearer ' + session.provider_token
            }
        }).then((data) => {
            return data.json();
        }).then((data) => {
            console.log(data);
        });
    }



    return (
        <div className = 'schedule'>
        {/*    <button onClick = {() => showCalendar()}>Show Calendar</button> */}
            <div className = 'date_block'>
                <p>Today is {daysOfWeek[start.getDay()]}, {start.getMonth() + 1}/{start.getDate()}/{start.getFullYear()}</p>
                
            </div>
            <table>
             <thead>
            <tr>
            <th >Time</th>
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