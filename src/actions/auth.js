import Swal from 'sweetalert2'

import { types } from "../types/types"
import { firebase, googleAuthProvider } from '../firebase/firebase-config'
import { uiFinishLoading, uiStartLoading } from "./ui"

export const startLoginEmailPassword = (email, password) => {

    return (dispatch) => {

        // Bloquea el login
        dispatch( uiStartLoading() )

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then( ( { user } ) => {

                // Desbloquean el login
                dispatch( uiFinishLoading() )

                dispatch( 
                    login( user.uid, user.displayName)
                )

            })
            .catch( err => {
                Swal.fire("Error", err.message, "error")
                dispatch( uiFinishLoading() )
            })
    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {

        firebase.auth().signInWithPopup( googleAuthProvider )
            .then( ({ user }) => {

                dispatch(
                    login( user.uid, user.displayName )
                )
            })
    }
}

export const login = (uid, displayName) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}

export const startRegisterWithEmailPasswordName = (email, password, name) => {
    
    return ( dispatch ) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then( async ({ user }) => {
            
                await user.updateProfile({ displayName: name })

                dispatch(
                    login(user.uid, user.displayName)
                )
            })
            .catch( err => Swal.fire("Error", err.message, "error"))
    }
}


export const startLogout = () => {
    return async ( dispatch ) => {
        await firebase.auth().signOut()

        dispatch( logout() )
    }
}

export const logout = () => {
    return {
        type: types.logout
    }
}