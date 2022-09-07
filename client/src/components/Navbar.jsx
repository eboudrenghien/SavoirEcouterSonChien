import React from 'react'
import { useState, useContext, useRef } from 'react'
import Logo from '../styles/assets/logo.png'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { Context } from '../context/Context'
import axios from "axios"


function Navbar() {

    const [sousMenu, setSousMenu] = useState(false)
    const toggleSousMenu = () => {
        setSousMenu(!sousMenu)
    }
    const [menu, setMenu] = useState(false)
    const toggleMenu = () => {
        setMenu(!menu)
    }

    const [largeur, setLargeur] = useState(window.innerWidth)

    useEffect(() => {
        const changeWidth = () => {
            setLargeur(window.innerWidth)

            if (window.innerWidth > 1340) {
                setMenu(false)
            }
        }
        window.addEventListener('resize', changeWidth)
        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    }, [])



// DÉCONNEXION
const {utilisateur, dispatch} = useContext(Context)
const handleLogout = () => {
    dispatch({type: "LOGOUT"})
}

return (

        <nav className='navbar'>

            {(menu || largeur > 1340) && (
                <ul className='rubriques' >
                    
                    <Link to="/" title="Accueil">
                        <img src={Logo} alt="" className='logo' style={{ width: '150px' }} />
                    </Link>
                    <li className='items' onClick={handleLogout} style={{fontSize: "1.8rem"}}>{utilisateur && <i class="fa-solid fa-power-off" ></i>}</li>
                    <li className="items" onClick={toggleSousMenu}>FORMULES
                        {sousMenu && (
                            <ul className='sous-menu'>
                                <li className="items-sous-menu" style={{ textAlign: 'center' }}  onClick={toggleSousMenu}><Link to="/stage-intensif" >STAGE INTENSIF</Link></li>
                                <li className="items-sous-menu" style={{ textAlign: 'center' }}  onClick={toggleSousMenu}><Link to="/cours-essentiels" >COURS ESSENTIELS</Link></li>
                                <li className="items-sous-menu" style={{ textAlign: 'center' }}  onClick={toggleSousMenu}><Link to="/7-jours-de-reeducation" >7 JOURS DE RÉÉDUCATION</Link></li>
                                <li className="items-sous-menu" style={{ textAlign: 'center' }}  onClick={toggleSousMenu}><Link to="/attestation-chien-de-categorie">ATTESTATION D'APTITUDE POUR DÉTENTEUR CHIENS DE CATÉGORIES</Link></li>
                                <li className="items-sous-menu" style={{ textAlign: 'center' }}  onClick={toggleSousMenu}><Link to="/cours-collectifs" >COURS COLLECTIFS</Link></li>
                            </ul>
                        )}
                    </li>
                    <li className="items"><Link to="/tarifs">TARIFS</Link></li>
                    <li className="items"><Link to="/about">A PROPOS DE</Link></li>
                    <li className="items"><Link to="/contact">CONTACT</Link></li>


                    <li className='menu-authentification'><Link to="/connexion" className='link' style={{color: 'white'}} >CONNEXION</Link></li>
                    <li className='menu-authentification'><Link to="/senregistrer" className='link'  style={{color: 'white'}}  >S'ENREGISTRER</Link></li>
                    
                </ul>
            )}
            <button className='menu' onClick={toggleMenu}>MENU</button>




        </nav>
    )
}

export default Navbar