const LOAD_REVIEW = 'listing/LOAD_REVIEW'
const ADD_REVIEW = 'listing/ADD_REVIEW'
const EDIT_REVIEW = 'listing/EDIT_REVIEW'
const REMOVE_REVIEW = 'listing/REMOVE_REVIEW'

export const loadReviews = reviews => ({
    type: LOAD_REVIEW,
    reviews
})

export const postReview = review => ({
    type: ADD_REVIEW,
    review
})

export const editReview = (review, reviewId) => ({
    type: EDIT_REVIEW,
    review,
    reviewId
})

export const deleteReview = (review) => ({
    type: REMOVE_REVIEW,
    review
})

export const getReviews = listingId => async dispatch => {
    const res = await fetch(`/api/reviews/listing/${listingId}`)

    if (res.ok) {
        const reviews = await res.json()
        dispatch(loadReviews(reviews))
    }
}

export const addReview = (listingId, rating, comment) => async dispatch => {
    const res = await fetch(`/api/reviews/listing/${listingId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            rating,
            comment
        })
    })

    if (res.ok) {
        const data = await res.json()
        dispatch(postReview(data))
    }
}

export const updateReview = (reviewId, rating, comment) => async dispatch => {
    const res = await fetch(`/api/reviews/${reviewId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            rating,
            comment
        })
    })

    if (res.ok) {
        const review = await res.json()
        dispatch(editReview(review, reviewId))
    }
}

export const removeReview = (reviewId) => async dispatch => {
    const res = await fetch(`/api/reviews/${reviewId}`, {
        method: 'DELETE'
    })

    if (res.ok) {
        const review = await res.json()
        dispatch(deleteReview(review))
    }
}

export default function reviewReducer(state = [], action) {
    switch(action.type) {
        case LOAD_REVIEW:
            return action.reviews
        case ADD_REVIEW:
            return [ ...state, action.review ]
        case EDIT_REVIEW:
            return state.map(review => {
                if (review.id === action.reviewId) {
                    return action.review
                }
                return review
            })
        case REMOVE_REVIEW:
            return state.filter(review => review.id !== action.review.id)
        default:
            return state
    }
}
