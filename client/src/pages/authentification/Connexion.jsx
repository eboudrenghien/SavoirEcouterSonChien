import React from 'react'
import { useRef, useContext } from 'react'
import { Context } from '../../context/Context'
import axios from 'axios'
// CONNEXION



function Connexion() {
    const utilisateurRef = useRef()
    const mdpRef = useRef()
    const { dispatch, isFetching } = useContext(Context)

    const loginSubmit = async (e) => {
        e.preventDefault()
        dispatch({ type: "LOGIN_START" })
        try {
            const res = await axios.post('/auth/connexion', {
                pseudo: utilisateurRef.current.value,
                mdp: mdpRef.current.value,
            })
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data })

        } catch (error) {
            dispatch({ type: "LOGIN_FAILURE" })

        }
    }
    return (
        <div className='connexion'>
            <form className='form-group' onSubmit={loginSubmit} >
                <label htmlFor="Pseudo">E-mail</label>
                <input type="text" name="pseudo" id="pseudo" autoFocus={true} autoComplete="off" ref={utilisateurRef} />
                <label htmlFor="password">Mot de passe</label>
                <input type="password" name="password" id="password" autoFocus={true} autoComplete="off" ref={mdpRef} />
                <button className='button-authentification' type="submit" disabled={isFetching}>CONNEXION</button>
            </form>
        </div>
    )
}

export default Connexion