const GET_USERS = '/users/GET_USERS'

export const getUsers = users => ({
    type: GET_USERS,
    users
})

export const retrieveUsers = () => async dispatch => {
    const res = await fetch(`/api/users/`)

    if (res.ok) {
        const users = await res.json()
        dispatch(getUsers(users))
    }
}

export default function usersReducer(state = [], action) {
    switch(action.type) {
        case GET_USERS:
            return action.users
        default:
            return state
    }
}
