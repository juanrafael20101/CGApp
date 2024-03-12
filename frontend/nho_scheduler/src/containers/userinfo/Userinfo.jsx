import React from 'react';
import './userinfo.css';



const Userinfo = ({session, supabase}) => {
    async function signOut() {
        console.log('signing out');
        await supabase.auth.signOut();
      }
      
    return (
        <div className = 'userinfo'>
            <div className = 'user_info_block'>
                <p class = 'user_info_text'>Hola,  Sr. Administrator</p>
                <button className = 'sign_out_button' onClick={() => signOut()}>Sign out</button>
            </div>
            
        </div>
    )
}

export default Userinfo