import validator from "validator"
import { useDispatch, useSelector } from "react-redux"

import { Link } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { removeError, setError } from "../../actions/ui"
import { startRegisterWithEmailPasswordName } from "../../actions/auth"

export const RegisterScreen = () => {

    const dispatch = useDispatch()
    const { msgError } = useSelector( state => state.ui )

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
        confirm: ''
    })

    const {name, email, password, confirm} = formValues

    const handleRegister = (e) => {
        e.preventDefault()

        if ( isValidForm() ) {
            dispatch(
                startRegisterWithEmailPasswordName(email, password, name)
            )
        }
    }

    const isValidForm = () => {

        if ( name.trim().length == 0 ) {

            const msg = 'Name incorrecto'
            console.log(msg)
            dispatch( setError(msg) )
            
            return false
        }
        else if ( !validator.isEmail( email )) {

            const msg = "Email is not valid"
            console.log( msg )
            dispatch( setError(msg) )

            return false
        }
        else if (password !== confirm || password.length <= 5) {

            const msg = 'Password should be at least 6 characters and match each other'
            console.log(msg)
            dispatch( setError(msg) )

            return false
        }

        // clean error messages
        dispatch( removeError() )

        return true

    }

    return (
        <div>
            <h3 className="auth__title">Register</h3>

            <form onSubmit={handleRegister}>

                {
                    msgError &&
                    (
                        <div className="auth__alert-error">
                            {msgError}
                        </div>
                    )
                }

                <input className="auth__input" type="text" placeholder="Name" name="name" value={name} onChange={handleInputChange} />
                <input className="auth__input" type="text" placeholder="Email" name="email" value={email} onChange={handleInputChange} />
                <input className="auth__input" type="password" placeholder="Password" name="password" value={password} onChange={handleInputChange} />
                <input className="auth__input" type="password" placeholder="Confirm password" name="confirm" value={confirm} onChange={handleInputChange} />

                <button className="btn btn-primary btn-block mb-5" type="submit"> Register </button>

                
            
                <Link to="/auth/login" className="link">
                    Already registered?
                </Link>
            </form>
        </div>
    )
}
