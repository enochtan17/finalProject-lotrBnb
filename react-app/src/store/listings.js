const GET_LISTINGS = 'listings/GET_LISTINGS'
const ADD_LISTING = 'listings/ADD_LISTING'
const DELETE_LISTING = 'listings/DELETE_LISTING'

export const getListings = listings => ({
    type: GET_LISTINGS,
    listings
})

export const addListing = listing => ({
    type: ADD_LISTING,
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


export const addNewListing = (name, description, capacity, bedrooms, beds, baths, address, city, country, latitude, longitude, price, image_url) => async dispatch => {
    const res = await fetch(`/api/listings/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name,
            description,
            capacity,
            bedrooms,
            beds,
            baths,
            address,
            city,
            country,
            latitude,
            longitude,
            price,
            image_url
        })
    })

    if (res.ok) {
        const data = await res.json()
        dispatch(addListing(data))
        return data
    }
}

export const removeListing = (listingId) => async dispatch => {
    const res = await fetch(`/api/listings/delete/${listingId}`, {
        method: 'DELETE'
    })

    if (res.ok) {
        const listing = await res.json()
        dispatch(deleteListing(listing))
    }
}

export default function listingReducer(state = [], action) {
    switch(action.type) {
        case GET_LISTINGS:
            return action.listings
        case ADD_LISTING:
            return [ ...state, action.listing ]
        case DELETE_LISTING:
            return state.filter(listing => listing.id === action.listing.id)
        default:
            return state
    }
}
