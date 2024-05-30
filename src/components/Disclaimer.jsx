import React from 'react';
import '../App.css';

function Disclaimer() {
    return (
        <div style={{padding:'15px',color:'#363630',border:'1px solid white',backgroundColor:'#fffdd0',borderRadius:'10px'}}>
            <h3 className='heading'>Important Note:</h3>
            <p className='disclaimer'>
                Please be aware that Tech Tools provides links to various software downloads solely for informational purposes. We want to remind you that:
            </p>
            <ul className="disclaimer" style={{color:'#363636'}}>
                <li>Tech Tools does not develop, own, or distribute any of the software listed on our platform.</li>
                <li>Your decision to download and install any software is entirely voluntary and at your own risk.</li>
                
            </ul>
            <p className="disclaimer">
               
            </p>
            <p className="note text-center">
                <b>By using our platform and downloading software, you agree to these terms.</b>
            </p>
        </div>
    );
}

export default Disclaimer;
