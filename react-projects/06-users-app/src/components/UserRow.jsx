import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { AuthContext } from '../auth/context/AuthContext'

export const UserRow = ({id, username, email, admin}) => {

    const { handlerRemoveUser, handlerUserSelectedForm } = useContext(UserContext)
    const { login } = useContext(AuthContext)

    return (
        <tr>
            <td>{id}</td>
            <td>{username}</td>
            <td>{email}</td>
            { !login.isAdmin || 
                <>
                    <td>
                        <button
                            type="button"
                            className="btn btn-secondary btn-sm"
                            onClick={() => handlerUserSelectedForm({
                                id: id,
                                username: username,
                                email: email,
                                admin: admin
                            })}>
                            Update
                        </button>
                    </td>
                    <td>
                        <NavLink className="btn btn-secondary btn-sm" to={"/edit/" + id}>
                            Update Route
                        </NavLink>
                    </td>
                    <td>
                        <button
                            type="button"
                            className="btn btn-danger btn-sm"
                            onClick={() => handlerRemoveUser(id)}>
                            Remove
                        </button>
                    </td>
                </> 
            }
        </tr>
    )
}
