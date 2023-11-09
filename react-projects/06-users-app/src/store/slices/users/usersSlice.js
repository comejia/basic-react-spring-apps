import { createSlice } from "@reduxjs/toolkit";

const initialUsers = []

export const initialUserForm = {
    id: 0,
    username: '',
    password: '',
    email: '',
    admin: false
}

const initialErrors = {
    username: '',
    password: '',
    email: ''
}

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        userSelected: initialUserForm,
        visibleForm: false,
        errors: initialErrors
    },
    reducers: {
        addUser: (state, action) => {
            state.users = [
                ...state.users,
                {
                    ...action.payload
                }
            ]
            state.userSelected = initialUserForm
            state.visibleForm = false
        },
        removeUser: (state, action) => {
            state.users = state.users.filter(user => user.id !== action.payload)
        },
        updateUser: (state, action) => {
            state.users = state.users.map(user => {
                if(user.id === action.payload.id) {
                    return {
                        ...action.payload,
                    }
                }
                return user
            })
            state.userSelected = initialUserForm
            state.visibleForm = false
        },
        loadingUser: (state, action) => {
            state.users = action.payload
        },
        onUserSelectedForm: (state, action) => {
            state.userSelected = action.payload
            state.visibleForm = true
        },
        onOpenForm: (state, action) => {
            state.visibleForm = true
        },
        onCloseForm: (state, action) => {
            state.visibleForm = false
            state.userSelected = initialUserForm
        },
        loadingError: (state, action) => {
            state.errors = action.payload
        }
    }
})

export const {
    addUser,
    removeUser,
    updateUser,
    loadingUser,
    onUserSelectedForm,
    onOpenForm,
    onCloseForm,
    loadingError
} = usersSlice.actions