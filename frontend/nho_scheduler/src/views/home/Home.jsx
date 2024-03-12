import React from 'react';

import { Quickactions} from '../../components';
import { Schedule, Userinfo } from '../../containers';

function Home() {

    return (
        <div className = 'Home'>
            <div className = 'column_quick'>
                <Quickactions/>
            </div>
            <div className = 'column_schedule_info'>
                <Userinfo/>
                <Schedule/>
            </div>
        </div>
    );
}

export default Home;