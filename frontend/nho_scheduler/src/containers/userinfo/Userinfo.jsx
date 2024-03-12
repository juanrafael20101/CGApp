import React from 'react';
import './userinfo.css';



const Userinfo = () => {

    return (
        <div className = 'userinfo'>
            <div className = 'user_info_block'>
                <p class = 'user_info_text'>Hola,  Sr. Administrator</p>
                <button className = 'sign_out_button' onClick={() => console.log('signed out')}>Sign out</button>
            </div>
            
        </div>
    )
}

export default Userinfo