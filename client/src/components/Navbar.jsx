import React from 'react'
import Logo from '../styles/assets/logo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false)
    const ToggleNavSmallScreen = () => {
        setToggleMenu(!toggleMenu)
    }



    return (

        <nav className='navbar'>
            <ul className='rubriques'>
                <Link to="/" title="Accueil">
                    <img src={Logo} alt="" className='logo' style={{ width: '150px' }} />
                </Link>
                <li className="items"><Link to="/">FORMULES
                    <span> <i onClick={ToggleNavSmallScreen} className="fa-solid fa-angle-down"></i></span></Link>
                    {/* {toggleMenu && ( */}
                        <ul className='sous-menu'>
                            <li className="items-sous-menu" style={{ textAlign: 'center' }}><Link to="/stage-intensif" className='link' >STAGE INTENSIF</Link></li>
                            <li className="items-sous-menu" style={{ textAlign: 'center' }}><Link to="/cours-essentiels" >COURS ESSENTIELS</Link></li>
                            <li className="items-sous-menu" style={{ textAlign: 'center' }}><Link to="/7-jours-de-reeducation" >7 JOURS DE RÉÉDUCATION</Link></li>
                            <li className="items-sous-menu" style={{ textAlign: 'center' }}><Link to="/attestation-chien-de-categorie">ATTESTATION D'APTITUDE POUR DÉTENTEUR CHIENS DE CATÉGORIES</Link></li>
                            <li className="items-sous-menu" style={{ textAlign: 'center' }}><Link to="/cours-collectifs" >COURS COLLECTIFS</Link></li>
                        </ul>
                    {/* )} */}
                </li>
                <li className="items"><Link to="/tarifs">TARIFS</Link></li>
                <li className="items"><Link to="/about">A PROPOS DE</Link></li>
                <li className="items"><Link to="/contact">CONTACT</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar