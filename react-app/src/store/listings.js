const GET_LISTINGS = 'listings/GET_LISTINGS'
const ADD_LISTING = 'listings/ADD_LISTING'
const EDIT_LISTING = 'listings/EDIT_LISTING'
const DELETE_LISTING = 'listings/DELETE_LISTING'

export const getListings = listings => ({
    type: GET_LISTINGS,
    listings
})

export const addListing = listing => ({
    type: ADD_LISTING,
    listing
})

export const editListing = listing => ({
    type: EDIT_LISTING,
    listing
})

export const deleteListing = listing => ({
    type: DELETE_LISTING,
    listing
})

export const getAllListings = () => async dispatch => {
    const res = await fetch(`/api/listings/`)

    if (res.ok) {
        const listings = await res.json()
        dispatch(getListings(listings.listings))
    }
}

export default function listingReducer(state = { listings: [] }, action) {
    switch(action.type) {
        case GET_LISTINGS:
            const allListings = []
            action.listings.forEach(listing => {
                allListings.push(listing)
            })
            console.log('state in reducer', allListings)
            const newState = {
                ...state,
                listings: [ ...allListings ]
            }
            return newState
        default:
            return state
    }
}
