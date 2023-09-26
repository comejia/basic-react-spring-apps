import React from 'react'

export const UserRow = ({id, username, email, handlerRemove, handlerUpdate}) => {

    const onRemoveUser = (id) => {
        handlerRemove(id)
    }

    const onUpdateUser = (user) => {
        handlerUpdate(user)
    }

    return (
        <tr>
            <td>{id}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td>
                <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={() => handlerUpdate({
                        id: id,
                        username: username,
                        email: email
                    })}>
                    Update
                </button>
            </td>
            <td>
                <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => handlerRemove(id)}>
                    Remove
                </button>
            </td>
        </tr>
    )
}
