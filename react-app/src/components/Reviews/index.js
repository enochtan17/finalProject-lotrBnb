import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getReviews } from '../../store/reviews'
import { retrieveUsers } from '../../store/users'

function Reviews() {
    const reviews = useSelector(state => state.reviewReducer.reviews)
    const users = useSelector(state => state.usersReducer.users)
    console.log(users)
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        dispatch(getReviews(id))
    }, [])

    useEffect(() => {
        dispatch(retrieveUsers())
    }, [])

    const getUsername = guestId => {
        let username

        for (let i = 0; i < users.length; i++) {
            let userId = users[i].id
            if (userId === guestId) {
                username = users[i].username
                return username
            }
        }
        return 'Failed to retrieve Username'
    }

    return (
        <>
            <h3>Reviews</h3>
            <div className='reviews-container'>
                { reviews && (
                    reviews.map(review => {
                        return (
                            <div
                                className='review-data'
                                id={review.id}
                                key={review.id}
                            >
                                <p>{getUsername(review.guest_id)}</p>
                                <p>{review.rating}</p>
                                <p>{review.comment}</p>
                            </div>
                        )
                    })
                )}
            </div>
        </>
    )
}

export default Reviews
