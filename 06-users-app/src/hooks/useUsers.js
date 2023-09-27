import { useReducer, useState } from "react"
import { usersReducer } from "../reducers/usersReducer"
import Swal from "sweetalert2"

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

export const useUsers = () => {
    const [users, dispatch] = useReducer(usersReducer, initialUsers)
    const [userSelected, setUserSelected] = useState(initialUserForm)
    const [visibleForm, setVisibleForm] = useState(false)

    const handlerAddUser = (user) => {
        
        dispatch({
            type: (user.id === 0) ? 'ADD_USER' : 'UPDATE_USER',
            payload: user
        })

        Swal.fire(
            (user.id === 0) ? 'Usuario creado' : 'Usuario actualizado',
            (user.id === 0) ? 'El usuario ha sido creado con exito!' : 'El usuario ha sido actualizado con exito!',
            'success'
        )

        handlerCloseForm()
    }

    const handlerRemoveUser = (id) => {

        Swal.fire({
            title: 'Esta seguro que desea eliminar?',
            text: "Cuidado el usuario sera eliminado!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch({
                    type: 'REMOVE_USER',
                    payload: id
                })
                Swal.fire(
                    'Usuario eliminado',
                    'El usuario ha sido eliminado con exito!',
                    'success'
                )
            }
        })
    }

    const handlerUserSelectedForm = (user) => {
        setVisibleForm(true)
        setUserSelected({...user})
    }

    const handlerOpenForm = () => {
        setVisibleForm(true)
    }

    const handlerCloseForm = () => {
        setVisibleForm(false)
        setUserSelected(initialUserForm)
    }

    return {
        users,
        userSelected,
        initialUserForm,
        visibleForm,
        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectedForm,
        handlerOpenForm,
        handlerCloseForm
    }
}
