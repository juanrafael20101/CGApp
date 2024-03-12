import React from 'react';
import {Routes, Route } from 'react-router-dom';

import {Home, Schedule, Staff, Settings, Patients} from '../views'


const AppRouter = () => {
    return (
            <Routes>
                <Route path = "/" element = {<Home />} />
                <Route path = "/home" element = {<Home />} />
                <Route path = "/schedule" element = {<Schedule />} />
                <Route path = "/staff" element = {<Staff />} />
                <Route path = "/settings" element = {<Settings />} />
                <Route path = "/patients" element = {<Patients />} />
            </Routes>
    )

}

export default AppRouter;