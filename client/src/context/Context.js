//création d'un état initiall
// identifiant ? pour dire que quand on va sur la page, on n'a pas besoin d'utilisateur (de connexion)
//isFetching ? Car je n'ai pas besoin de voir les bases de données 
// error ? pas besoin de messsage d'erreur
// 
import { createContext, useReducer } from "react"

const INITIAL_STATE = {
    identifiant: null,
    isFetching: false,
    error: false,
}

export const Context = createContext(INITIAL_STATE)