import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { getReviews, addReview } from '../../store/reviews'
import { editReviewOn } from '../../store/showEditReviewForm'
import { retrieveUsers } from '../../store/users'
import EditReviewForm from '../EditReviewForm'
import earendil from '../../zzimages/earendil/favicon.ico'
import './reviews.css'

// index.js:1 Warning: A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components
//     at input
//     at div
//     at form
//     at div
//     at EditReviewForm (http://localhost:3000/static/js/main.chunk.js:1050:3)
//     at Reviews (http://localhost:3000/static/js/main.chunk.js:3965:82)
//     at SingleListing (http://localhost:3000/static/js/main.chunk.js:4420:82)
//     at Routes (http://localhost:3000/static/js/vendors~main.chunk.js:35535:5)
//     at Router (http://localhost:3000/static/js/vendors~main.chunk.js:35468:15)
//     at BrowserRouter (http://localhost:3000/static/js/vendors~main.chunk.js:34948:5)

function Reviews() {
    const reviews = useSelector(state => state.reviewReducer)
    const users = useSelector(state => state.usersReducer.users)
    const loggedUser = useSelector(state => state.session.user)
    const dispatch = useDispatch()
    const hist = useNavigate()
    const { id } = useParams()

    const [rating, setRating] = useState('')
    const [comment, setComment] = useState('')
    const [reviewId, setReviewId] = useState('')
    const [addReviewError, setAddReviewError] = useState('')
    // setAddReviewError('')

    useEffect(() => {
        if (!loggedUser) return hist("/forbidden")
    }, [loggedUser, hist])

    useEffect(() => {
        if (loggedUser) dispatch(getReviews(id))
    }, [dispatch, id, loggedUser])

    useEffect(() => {
        if (loggedUser) dispatch(retrieveUsers())
    }, [dispatch, loggedUser])

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
                <div
                className='review-grid'
                >
                { reviews?.map(review => {
                    return (
                        <div
                            key={review.id}
                            className='review-data'
                            id={review.id}
                        >
                            <div className='each-review-head'>
                                <p
                                    className='review-owner'
                                >
                                    {getUsername(review.guest_id)}
                                </p>
                                <div className='rating-div'>
                                    <p
                                        className='review-rating'
                                    >{review.rating}</p>
                                    <img
                                        src={earendil}
                                        alt=''
                                        className='earendil'
                                    ></img>
                                </div>
                            </div>
                            <p
                                className='review-content'
                            >
                                {review.comment}
                            </p>
                            { reviewOwner(review.guest_id) ? (
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
                            ) : <div></div>}
                        </div>
                    )}
                )}
                </div>
                <h3 className='add-review-h3'>Add a Review</h3>
                <div className='comment-form-box'>
                    <form
                        className='reviews-form'
                        onSubmit={async(e) => {
                            e.preventDefault()
                            if (!addReviewError) {
                                await newReview()
                                setRating('')
                                setComment('')
                            }
                        }}
                    >
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
