import React from 'react'
import { useState } from 'react'
import Logo from '../styles/assets/logo.png'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import axios from "axios"


function Navbar() {

    const [sousMenu, setSousMenu] = useState(false)
    const toggleSousMenu = () => {
        setSousMenu(!sousMenu)
    }

    const [login, setLogin] = useState(false)
    const toggleLogin = () => {
        setLogin(!login)
    }

    const [register, setRegister] = useState(false)
    const toggleRegister = () => {
        setRegister(!register)
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

    //ENREGISTREMENT

    const [pseudo, setPseudoRegister] = useState("")
    const [mdp, setMdpRegister] = useState("")
    const [error, setError] = useState(false)

    const registerSubmit = async (e) => {
        e.preventDefault()
        setError(false)
        try {
            const res = await axios.post("/auth/senregistrer", {
                pseudo,
                mdp,
            })
            res.data && window.location.reload("/")

        } catch (err) {
            setError(true)
            console.log(err);
            
        }
    }

    return (

        <nav className='navbar'>

            {(menu || largeur > 1340) && (
                <ul className='rubriques' >
                    <Link to="/" title="Accueil">
                        <img src={Logo} alt="" className='logo' style={{ width: '150px' }} />
                    </Link>
                    <li className="items" onClick={toggleSousMenu}>FORMULES
                        {sousMenu && (
                            <ul className='sous-menu'>
                                <li className="items-sous-menu" style={{ textAlign: 'center' }}  onClick={toggleSousMenu}><Link to="/stage-intensif" className='link' >STAGE INTENSIF</Link></li>
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


                    <li className='menu-authentification'><button className='link-connexion' onClick={toggleLogin}>CONNEXION</button></li>
                    <li className='menu-authentification'><button className='link-connexion' onClick={toggleRegister}>S'ENREGISTRER</button></li>
                </ul>
            )}
            <button className='menu' onClick={toggleMenu}>MENU</button>



            {login && (
                <div className='login'>
                    <form className='overlay' >
                        <div className="close">
                            <i class="fa-solid fa-square-xmark icon-close" onClick={toggleLogin} ></i>
                        </div>
                        <div className="form-group">
                            <label htmlFor="pseudo">Identifiant</label>
                            <input type="text" name="pseudo" id="pseudo" autoFocus={true} autoComplete="off" />
                            <label htmlFor="password">Mot de passe</label>
                            <input type="password" name="password" id="password" autoFocus={true} autoComplete="off" />
                        </div>
                        <button type="submit">CONNEXION</button>
                    </form>
                </div>
            )}


            {register && (
                <div className='register'>
                    <form className='overlay' onSubmit={registerSubmit}>
                       {error && <span className='error'>Une erreur a été détectée.</span>} 
                       {/* {validate && <span className='validate'>Enregistrement réussie.</span>}  */}
                        <div className="close">
                            <i class="fa-solid fa-square-xmark icon-close" onClick={toggleRegister}></i>
                        </div>
                        <div className="form-group">
                            <label htmlFor="pseudo">Identifiant</label>
                            <input type="text" name="pseudo" id="pseudo"
                                autoFocus={true}
                                autoComplete="off"
                                onChange={e => setPseudoRegister(e.target.value)} />
                            <label htmlFor="password">Mot de passe</label>
                            <input type="password" name="identifiant" id="password"
                                autoFocus={true}
                                autoComplete="off"
                                onChange={e => setMdpRegister(e.target.value)} />
                        </div>
                        <button type="submit">S'ENREGISTRER</button>
                    </form>
                </div>
            )}


        </nav>
    )
}

export default Navbar