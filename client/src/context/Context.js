//création d'un état initiall
// Utilisateur ? pour dire que quand on va sur la page, on n'a pas besoin d'utilisateur (de connexion)
//isFetching ? Car je n'ai pas besoin de voir les bases de données 
// error ? pas besoin de messsage d'erreur
// 
import { useEffect } from "react"
import { createContext, useReducer } from "react"
import Reducer from "./Reducer"

const INITIAL_STATE = {
    utilisateur: JSON.parse(localStorage.getItem("utilisateur")) || null,
    isFetching: false,
    error: false,
}

export const Context = createContext(INITIAL_STATE)

export const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer (Reducer, INITIAL_STATE)
    
    useEffect(() => {
        localStorage.setItem("utilisateur", JSON.stringify(state.utilisateur))
    }, [state.utilisateur])
    return (
        <Context.Provider value={{
            utilisateur: state.utilisateur,
            isFetching: state.isFetching,
            error: state.error,
            dispatch,
        }}>
            {children}
        </Context.Provider>
    )
}