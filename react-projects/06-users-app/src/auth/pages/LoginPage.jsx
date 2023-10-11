import { useContext, useState } from "react"
import Swal from "sweetalert2"
import { AuthContext } from "../context/AuthContext"

const initialLoginForm = {
    username: '',
    password: ''
}

export const LoginPage = () => {

    const { handlerLogin } = useContext(AuthContext)

    const [loginForm, setLoginForm] = useState(initialLoginForm)
    const {username, password} = loginForm

    const onInputchange = ({ target }) => {
        const {name, value} = target
        setLoginForm({
            ...loginForm,
            [name]: value
        })
    }

    const onSubmit = (event) => {
        event.preventDefault()
        if(!username || !password) {
            Swal.fire('Error de validacion', 'Username y password requeridos', 'error')
        } else {
            handlerLogin({username, password})
        }
        setLoginForm(initialLoginForm)
    }

    return (
        <div className="modal" style={{display: 'block'}} tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Login Page</h5>
                    </div>
                    <form action="" onSubmit={onSubmit}>
                        <div className="modal-body">
                            <input
                                className="form-control my-3 w-75"
                                type="text"
                                placeholder="Username"
                                name="username"
                                value={username}
                                onChange={onInputchange} />
                            <input
                                className="form-control my-3 w-75"
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={password}
                                onChange={onInputchange} />
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
