// constants
const SET_USER = 'session/SET_USER'
const REMOVE_USER = 'session/REMOVE_USER'

// the two below functions are called actions. they return an object.
const setUser = (user) => ({
  type: SET_USER,
  payload: user
})

const removeUser = () => ({
  type: REMOVE_USER,
})

/*
The below thunk functions are called in the components that use them.
They are called using dispatch().
This is how you can pass in data from the html to the parameters
of these functions.
*/

export const authenticate = () => async (dispatch) => {
  const response = await fetch('/api/auth/', {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  if (response.ok) {
    const data = await response.json()
    if (data.errors) {
      return
    }

    dispatch(setUser(data))
  }
}

export const login = (email, password) => async (dispatch) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  })

  if (response.ok) {
    const data = await response.json()
    // this dispatch is how you set data to be the value ofsetUser's returned
    // object's payload key
    dispatch(setUser(data))
    return null
  } else if (response.status < 500) {
    const data = await response.json()
    if (data.errors) {
      return data.errors
    }
  } else {
    return ['An error occurred. Please try again.']
  }

}

export const logout = () => async (dispatch) => {
  const response = await fetch('/api/auth/logout', {
    headers: {
      'Content-Type': 'application/json',
    }
  })

  if (response.ok) {
    dispatch(removeUser())
  }
}


export const signUp = (username, email, password) => async (dispatch) => {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  })

  if (response.ok) {
    const data = await response.json()
    dispatch(setUser(data))
    return null
  } else if (response.status < 500) {
    const data = await response.json()
    if (data.errors) {
      return data.errors
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}

const initialState = { user: null }

/*
  The below reducer is how you update the state. you return the new state.
  It is important to know the initial state's form (array vs object), and
  return the new state in the same format.
  The actions are defined at the top of the file and their type tells you
  which case to run (i.e. case SET_USER).
  The action.payload will key in to the object that they action implicitly
  returns, and return the value of the payload key in that object.
  The payload is the data in the action, which gets set in the thunks above.
*/

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { user: action.payload }
    case REMOVE_USER:
      return { user: null }
    default:
      return state
  }
}
