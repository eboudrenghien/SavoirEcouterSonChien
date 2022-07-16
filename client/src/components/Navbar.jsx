import React from 'react'
import Logo from '../styles/assets/logo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Authentification from '../pages/authentification/Authentification'

function Navbar() {




    return (

        <nav className='navbar'>
            <ul className='rubriques'>
                <Link to="/" title="Accueil">
                    <img src={Logo} alt="" className='logo' style={{ width: '150px' }} />
                </Link>
                <li className="items"><Link to="/">FORMULES
                    <span> <i className="fa-solid fa-angle-down"></i></span></Link>
                   
                        <ul className='sous-menu'>
                            <li className="items-sous-menu" style={{ textAlign: 'center' }}><Link to="/stage-intensif" className='link' >STAGE INTENSIF</Link></li>
                            <li className="items-sous-menu" style={{ textAlign: 'center' }}><Link to="/cours-essentiels" >COURS ESSENTIELS</Link></li>
                            <li className="items-sous-menu" style={{ textAlign: 'center' }}><Link to="/7-jours-de-reeducation" >7 JOURS DE RÉÉDUCATION</Link></li>
                            <li className="items-sous-menu" style={{ textAlign: 'center' }}><Link to="/attestation-chien-de-categorie">ATTESTATION D'APTITUDE POUR DÉTENTEUR CHIENS DE CATÉGORIES</Link></li>
                            <li className="items-sous-menu" style={{ textAlign: 'center' }}><Link to="/cours-collectifs" >COURS COLLECTIFS</Link></li>
                        </ul>
                   
                </li>
                <li className="items"><Link to="/tarifs">TARIFS</Link></li>
                <li className="items"><Link to="/about">A PROPOS DE</Link></li>
                <li className="items"><Link to="/contact">CONTACT</Link></li>
              <Authentification/>
              
              

                {/* <ul className="authentification">
                    <li><Link to="/connexion" className='link-connexion' onClick={toggleLogin}>CONNEXION</Link></li>
                    <div className="overlay">
                    <div className='login'>
        <form className='form'>
        <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" id="email" autoFocus={true} autoComplete="off"/>
            <label htmlFor="password">Mot de passe</label>
            <input type="password" name="password" id="password" autoFocus={true} autoComplete="off"/>
        </div>
        <button type="submit">CONNEXION</button>
        </form>
    </div>
    </div>

                    <li><Link to="/senregistrer" className='link-connexion'>S'ENREGISTRER</Link></li>
                </ul> */}
            </ul>  
            
        </nav>
    )
}

export default Navbar