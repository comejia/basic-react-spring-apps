export const usersReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_USER':
            return [
                ...state,
                {
                    ...action.payload,
                    id: new Date().getTime()
                }
            ]
        case 'UPDATE_USER':
            return state.map(user => {
                if(user.id === action.payload.id) {
                    return {
                        ...action.payload,
                        password: user.password
                    }
                }
                return user
            })
        case 'REMOVE_USER':
            return state.filter(user => user.id !== action.payload)
        default:
            break;
    }
}
