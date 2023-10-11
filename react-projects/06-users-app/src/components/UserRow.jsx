import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

export const UserRow = ({id, username, email}) => {

    const {handlerRemoveUser, handlerUserSelectedForm} = useContext(UserContext)

    return (
        <tr>
            <td>{id}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td>
                <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={() => handlerUserSelectedForm({
                        id: id,
                        username: username,
                        email: email
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
        </tr>
    )
}