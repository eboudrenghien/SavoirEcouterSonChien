import React from 'react'
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";


function Senregistrer() {
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
      res.data && window.location.replace("/connexion")
      console.log(res);
    } catch (err) {
      setError(true)
      console.log(err);

    }
  }
  return (
    <div className='senregistrer'>
      <form className='form-group' onSubmit={registerSubmit}>
        {error && <span className='error'>Une erreur a été détectée.</span>}
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
        <button className='button-authentification' type="submit" >S'ENREGISTRER</button>
      </form>
    </div>
  )
}

export default Senregistrer