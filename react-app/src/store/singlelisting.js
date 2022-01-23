const GET_ONE_LISTING = 'listing/GET_ONE_LISTING'
const EDIT_LISTING = 'listing/EDIT_LISTING'

const LOAD_REVIEW = 'listing/LOAD_REVIEW'
const ADD_REVIEW = 'listing/ADD_REVIEW'
const EDIT_REVIEW = 'listing/EDIT_REVIEW'
const REMOVE_REVIEW = 'listing/REMOVE_REVIEW'

export const loadOneListing = listing => ({
    type: GET_ONE_LISTING,
    listing
})

export const editListing = listing => ({
    type: EDIT_LISTING,
    listing
})

export const getListing = id => async dispatch => {
    const res = await fetch(`/api/listings/${id}`)
    console.log('inside get one listing thunk', res)
    if (res.ok) {
        const listing = await res.json()
        dispatch(loadOneListing(listing))
    }
}

export default function singleListingReducer(state = [], action) {
    switch(action.type) {
        case GET_ONE_LISTING:
            return action.listing
    default:
        return state
    }
}
