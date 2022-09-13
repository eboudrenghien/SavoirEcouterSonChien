import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../styles/assets/logo.png'
import Portable from '../styles/assets/portable.png'
import Maison from '../styles/assets/maison.png'
import Facebook from '../styles/assets/facebook.png'
import Email from '../styles/assets/email.png'


function Footer() {
    return (

        <div className="footer">
            <div className="informations">
                <div className="logo-footer">
                    <img src={Logo} alt="logo" style={{width:"120px"}}/>

                </div>
                <div className="contact-footer">
                    <h3>Savoir Écouter Son Chien</h3>
                    <p> <img src={Maison} alt="" /> 133 Route de Saint Jean de Losne </p>
                    <p style={{ marginBottom: '10px' }}>21470 BRAZEY-EN-PLAINE</p>
                    <p><img src={Portable} alt="" /> 07 71 63 12 36</p>
                </div>
            </div>
            <div className="important-footer">
                <Link to="/mentions-legales"  >Mentions Légales</Link> <p>- Siret : 832 217 269</p>
            </div>
            <ul className="reseaux-sociaux">
                <img src={Facebook} alt="fb" style={{ width: "60px" }} className="fb" /> 
                <img src={Email} alt="fb" style={{ width: "60px" }} className="email" /> 
            </ul>
        </div>

    )
}

export default Footer