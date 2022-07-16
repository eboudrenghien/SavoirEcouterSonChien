import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'


function Authentification() {
    const [login, setLogin] = useState(false)
    const toggleLogin = () => {
        setLogin(!login)
    }

    const [register, setRegister] = useState(false)
    const toggleRegister = () => {
        setRegister(!register)
    }
  return (
    <div className='authentification' >
      <div className="form-authentification">
        <button className='link-connexion' onClick={toggleLogin}>CONNEXION</button>
        {login && (
        <div className='login'>
        <form className='overlay' onClick={toggleLogin}>
          <div className="close">
          <i class="fa-solid fa-square-xmark icon-close" onClick={toggleLogin} ></i>
          </div>
        <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" id="email" autoFocus={true} autoComplete="off"/>
            <label htmlFor="password">Mot de passe</label>
            <input type="password" name="password" id="password" autoFocus={true} autoComplete="off"/>
        </div>
        <button type="submit">CONNEXION</button>
        </form>
    </div>
        )}
        <button className='link-connexion' onClick={toggleRegister}>S'ENREGISTRER</button>
        {register && (
            <div className='register'>
            <form className='overlay'  onClick={toggleRegister}>
            <div className="close">
          <i class="fa-solid fa-square-xmark icon-close" onClick={toggleRegister}></i>
          </div>
             <div className="form-group">
                 <label htmlFor="email">E-mail</label>
                 <input type="email" name="email" id="email" autoFocus={true} autoComplete="off" />
                 <label htmlFor="password">Mot de passe</label>
                 <input type="password" name="password" id="password" autoFocus={true} autoComplete="off" />
             </div>
             <button type="submit">S'ENREGISTRER</button>
             </form>
         </div>
        )}
        
      </div>
    </div>
  )
}

export default Authentification