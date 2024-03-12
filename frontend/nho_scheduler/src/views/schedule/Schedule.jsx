import React, {useState} from 'react';
import { DayPilotCalendar } from '@daypilot/daypilot-lite-react';

function Schedule() {

    const [config, setConfig] = useState({
        viewType: "Week"
    });

    return (
        <div>
            <DayPilotCalendar {...config} />
        </div>
    );
}

export default Schedule;