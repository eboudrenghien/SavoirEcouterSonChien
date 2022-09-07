// loginStart = départ de connexion

export const LoginStart = (utilisateurCredentials) => ({
    type : "LOGIN_START"
})
export const LoginSuccess = (utilisateur) => ({
    type: "LOGIN_SUCCESS",
    payload: utilisateur, 
})

export const LoginFailure = () => ({
    type: "LOGIN_FAILURE",

})

export const Logout = () => ({
    type: "LOGOUT",
})