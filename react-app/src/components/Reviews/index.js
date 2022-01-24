import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getReviews, addReview, editReview } from '../../store/reviews'
import { editReviewOn } from '../../store/showEditReviewForm'
import { retrieveUsers } from '../../store/users'
import EditReviewForm from '../EditReviewForm'

function Reviews() {
    const reviews = useSelector(state => state.reviewReducer)
    const users = useSelector(state => state.usersReducer.users)
    const loggedUser = useSelector(state => state.session.user)
    const dispatch = useDispatch()
    const { id } = useParams()

    const [rating, setRating] = useState(null)
    const [comment, setComment] = useState('')

    useEffect(() => {
        dispatch(getReviews(id))
    }, [])

    useEffect(() => {
        dispatch(retrieveUsers())
    }, [])

    const getUsername = guestId => {
        let username
        for (let i = 0; i < users?.length; i++) {
            let userId = users[i].id
            if (userId === guestId) {
                username = users[i].username
                return username
            }
        }
        return 'Failed to retrieve Username'
    }

    const newReview = async e => {
        await dispatch(addReview(id, rating, comment))
    }

    const reviewOwner = (guestId) => {
        return loggedUser.id === guestId
    }

    const editReview = async e => {
        e.preventDefault()
        e.stopPropagation()
        dispatch(editReviewOn())
    }

    return (
        <>
            <h3>Reviews</h3>
            <EditReviewForm />
            <div className='reviews-container'>
                { reviews?.map(review => {
                        return (
                            <div
                                className='review-data'
                                id={review.id}
                                key={review.id}
                            >
                                <p>{getUsername(review.guest_id)}</p>
                                <p>{review.rating}</p>
                                <p>{review.comment}</p>
                                { reviewOwner(review.guest_id) && (
                                    <button
                                        className='editbutton'
                                        onClick={editReview}>
                                    <i className='fas fa-edit'></i> Edit
                                </button>
                                )}
                            </div>
                        )
                    })
                }
            <div className='comment-box'>
                <form
                    className='reviews-form'
                    onSubmit={async(e) => {
                        e.preventDefault()
                        if (rating && comment) {
                            await newReview()
                            setRating('')
                            setComment('')
                        }
                    }}
                >
                    <h3>Add a Review</h3>
                    <label>Rating</label>
                    <input
                        placeholder='Rating'
                        value={rating}
                        onChange={e => {
                            setRating(e.target.value)
                        }}
                    ></input>
                    <label>Comment</label>
                    <input
                        placeholder='Comment'
                        value={comment}
                        onChange={e => {
                            setComment(e.target.value)
                        }}
                    ></input>
                    <button className='submit-review' disabled={
                        !rating || !comment
                    }>
                        Submit review
                    </button>
                </form>
            </div>
            </div>
        </>
    )
}

export default Reviews
