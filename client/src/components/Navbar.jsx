import React from 'react'
import Logo from '../styles/assets/logo.png'
import Facebook from '../styles/assets/facebook.png'
import Email from '../styles/assets/email.png'
import { Link } from 'react-router-dom'
function Navbar() {
    return (

        <nav>
            <div className="menu">
            <i class="fa-solid fa-bars menu"> </i> </div> 
            <ul className='rubriques'>
               <div className="menu-action">
           
            <Link to="/" title="Accueil"> <a href="/accueil">
                    <img src={Logo} alt="" style={{ width: "190px", margin:"40px" }}/>
                </a></Link></div>
                <li className="items"><Link to="/" >ACCUEIL</Link></li>
                <li className="items"><Link to="/formules" >FORMULES</Link></li>
                <li className="items"><Link to="/tarifs">TARIFS</Link></li>
                <li className="items"><Link to="/about">A PROPOS DE</Link></li>
                <li className="items"><Link to="/contact">CONTACT</Link></li>
                <ul className="mini-footer">
                    <img src={Facebook} alt="fb" style={{ width: "60px" }} className="fb" />
                    <img src={Email} alt="fb" style={{ width: "60px" }} className="email" />
                </ul>

            </ul>


        </nav>
    )
}

export default Navbar