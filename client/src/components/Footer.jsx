import React from 'react'

import Facebook from '../styles/assets/facebook.png'
import Email from '../styles/assets/email.png'

function Footer() {
    return (
        <div>
            <ul className="mini-footer">
                <img src={Facebook} alt="fb" style={{ width: "60px" }} className="fb" />
                <img src={Email} alt="fb" style={{ width: "60px" }} className="email" />
            </ul>
        </div>
    )
}

export default Footer