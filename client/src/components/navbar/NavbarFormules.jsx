import React from 'react'
import Logo from '../../styles/assets/logo.png'
import Facebook from '../../styles/assets/facebook.png'
import Email from '../../styles/assets/email.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
function NavbarFormules() {
    const [toggleMenu, setToggleMenu] = useState(false)
    const ToggleNavSmallScreen = () => {
        setToggleMenu(!toggleMenu)
    }



    return (

        <nav>

            <i className="fa-solid fa-bars menu" > </i>
           
                <ul className='rubriques'>
                    <div className="menu-action">

                        <Link to="/" title="Accueil"> <a href="/accueil">
                            <img src={Logo} alt="" style={{ width: "250px", margin: "40px" }} />
                        </a></Link></div>
                   
                    <li className="items" id='formules'><Link to="/formules" >FORMULES 
                    <span> <i onClick={ToggleNavSmallScreen} className="fa-solid fa-angle-down"></i></span></Link>
 {toggleMenu && (
                        <ul className='sous-menu'>
                            <li className="items-sous-menu"style={{ textAlign: 'center' }}><Link to="/stage-intensif" className='link' >STAGE INTENSIF</Link></li>
                            <li className="items-sous-menu"style={{ textAlign: 'center' }}><Link to="/cours-essentiels" >COURS ESSENTIELS</Link></li>
                            <li className="items-sous-menu"style={{ textAlign: 'center' }}><Link to="/7-jours-de-reeducation" >7 JOURS DE REEDUCATION</Link></li>
                            <li className="items-sous-menu" style={{ textAlign: 'center' }}><Link to="/attestation-chien-de-categorie">ATTESTATION D'APTITUDE POUR DETENTEUR DE CHIEN DE CATEGORIES</Link></li>
                            <li className="items-sous-menu"style={{ textAlign: 'center' }}><Link to="/rencontres-canines" >RENCONTRES CANINES</Link></li>
                        </ul>
)}
                    </li>
                    <ul className="mini-footer">
                        <img src={Facebook} alt="fb" style={{ width: "60px" }} className="fb" />
                        <img src={Email} alt="fb" style={{ width: "60px" }} className="email" />
                    </ul>

                </ul>
            

        </nav>
    )
}

export default NavbarFormules