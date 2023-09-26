import { useReducer, useState } from "react"
import { UserForm } from "./components/UserForm"
import { UsersList } from "./components/UsersList"
import { usersReducer } from "./reducers/usersReducer"

const initialUsers = [
    {
        id: 1,
        username: 'pepe',
        password: '12345',
        email: 'pepe@correo.com'
    }
]

const initialUserForm = {
    id: 0,
    username: '',
    password: '',
    email: ''
}

export const UsersApp = () => {

    const [users, dispatch] = useReducer(usersReducer, initialUsers)
    const [userSelected, setUserSelected] = useState(initialUserForm)

    const handlerAddUser = (user) => {
        let type;

        if(user.id === 0) {
            type = 'ADD_USER'
        } else {
            type = 'UPDATE_USER'
        }

        dispatch({
            type: type,
            payload: user
        })
    }

    const handlerRemoveUser = (id) => {
        dispatch({
            type: 'REMOVE_USER',
            payload: id
        })
    }

    const handlerUpdateUser = (user) => {
        setUserSelected({...user})
    }

    return (
        <div className="container my-4">
            <h2>Users App</h2>
            <div className="row">
                <div className="col">
                    <UserForm
                        userSelected={userSelected}
                        initialUserForm={initialUserForm}
                        handler={handlerAddUser} />
                </div>
                <div className="col">
                    {
                        users.length === 0 
                        ? <div className="alert alert-warning">No hay usuarios en el sistema</div>
                        : <UsersList 
                            users={users}
                            handlerRemove={handlerRemoveUser}
                            handlerUpdate={handlerUpdateUser} />
                    }
                </div>
            </div>
        </div>
  )
}
