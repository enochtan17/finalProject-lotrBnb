import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getReviews, addReview } from '../../store/reviews'
import { editReviewOn } from '../../store/showEditReviewForm'
import { retrieveUsers } from '../../store/users'
import EditReviewForm from '../EditReviewForm'
import './reviews.css'

function Reviews() {
    const reviews = useSelector(state => state.reviewReducer)
    const users = useSelector(state => state.usersReducer.users)
    const loggedUser = useSelector(state => state.session.user)
    const dispatch = useDispatch()
    const { id } = useParams()

    const [rating, setRating] = useState('')
    const [comment, setComment] = useState('')
    const [reviewId, setReviewId] = useState('')

    useEffect(() => {
        dispatch(getReviews(id))
    }, [dispatch, id])

    useEffect(() => {
        dispatch(retrieveUsers())
    }, [dispatch])

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
        return loggedUser?.id === guestId
    }

    const editReview = async e => {
        e.preventDefault()
        e.stopPropagation()
        dispatch(editReviewOn())
        setReviewId(e.target.id)
    }

    return (
        <>
            <hr className='review-hr'></hr>
            <h3 className='reviews-header'>Reviews</h3>
            <EditReviewForm reviewId={ reviewId } />
            <div className='reviews-container'>
                { reviews?.map(review => {
                        return (
                            <div
                                key={review.id}
                                className='review-grid'
                            >
                                <div
                                    className='review-data'
                                    id={review.id}
                                >
                                    <p
                                        className='review-owner'
                                    >{getUsername(review.guest_id)}</p>
                                    <p
                                        className='review-rating'
                                    >{review.rating}</p>
                                    <p
                                        className='review-content'
                                    >{review.comment}</p>
                                    { reviewOwner(review.guest_id) && (
                                        <button
                                            id={review.id}
                                            className='edit-review-button'
                                            onClick={editReview}
                                        >
                                        <i
                                            className='fas fa-edit'
                                            id={review.id}
                                        ></i>
                                    </button>
                                    )}
                                </div>
                            </div>
                        )
                    })
                }
                <div className='comment-form-box'>
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
