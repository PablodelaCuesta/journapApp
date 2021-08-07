import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { startGoogleLogin, startLoginEmailPassword } from "../../actions/auth"
import { useForm } from "../../hooks/useForm"

export const LoginScreen = () => {

    const dispatch = useDispatch()

    const [ formValues, handleInputChange ] = useForm({
        email: 'pablodelacuesta@outlook.es',
        password: 1234
    })

    const {email, password} = formValues

    // Cada vez que se realiza un cambio se actualiza el State del formulario, por lo que al extraer cada valor de las variables obtenemos el valor actual del input
    const handleLogin = (e) => {
        e.preventDefault()
        console.log(email, password)
        dispatch( startLoginEmailPassword(email, password) )
    }

    const handleGoogleLogin = () => {
        dispatch( startGoogleLogin() )
    }

    return (
        <div>
            <h3 className="auth__title">Login</h3>

            <form onSubmit={handleLogin}>
                <input className="auth__input" type="text" placeholder="Email" name="email" value={ email } onChange={handleInputChange} /> 
                <input className="auth__input" type="password" placeholder="Password" name="password" value={ password } onChange={handleInputChange} />

                <button className="btn btn-primary btn-block" type="submit"> Login </button>

                <div className="auth__social-networks">
                    <p>Login with social networks</p>

                    <div className="google-btn" onClick={ handleGoogleLogin }>
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
            
                <Link to="/auth/register" className="link">
                    Create a new account
                </Link>
            </form>
        </div>
    )
}
