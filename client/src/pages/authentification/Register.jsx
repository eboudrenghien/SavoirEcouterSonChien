import React from 'react'

function Register() {
  return (
    <div className='register'>
       <form action="">
        <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" id="email" autoFocus={true} autoComplete="off" />
            <label htmlFor="password">Mot de passe</label>
            <input type="password" name="password" id="password" autoFocus={true} autoComplete="off" />
        </div>
        <button type="submit">S'ENREGISTRER</button>
        </form>
    </div>
  )
}

export default Register