import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getReviews, removeReview, updateReview } from '../../store/reviews'
import { editReviewOff } from '../../store/showEditReviewForm'
import './editReviewForm.css'
import '../NewListingForm/newListingForm.css'

function EditReviewForm({ reviewId }) {
    const dispatch = useDispatch()
    const reviews = useSelector(state => state.reviewReducer)
    const showForm = useSelector(state => state.editReviewFormReducer)
    const user = useSelector(state => state.session.user)
    const { id } = useParams()

    const [rating, setRating] = useState('')
    const [comment, setComment] = useState('')

    const [ratingError, setRatingError] = useState('')
    const [commentError, setCommentError] = useState('')

    useEffect(() => {
        if (user) dispatch(getReviews(id))
    }, [dispatch, user, id])

    useEffect(() => {
        let singleReview
        for (let i = 0; i < reviews.length; i++) {
            if (reviews[i].id === parseInt(reviewId)) {
                singleReview = reviews[i]
            }
        }
        setRating(singleReview?.rating)
        setComment(singleReview?.comment)
    }, [showForm, reviews, reviewId])

    useEffect(() => {
        setRatingError('')
        setCommentError('')
    }, [showForm])

    const editReview = async e => {
        dispatch(updateReview(
            reviewId,
            rating,
            comment
        ))
    }

    const handleDelete = e => {
        e.preventDefault()
        e.stopPropagation()
        dispatch(removeReview(reviewId))
    }

    return (
        <div className='modal-div'>
            { showForm && (
                <form
                    className='listingForm editform'
                    onSubmit={async(e) => {
                        e.preventDefault()
                        if (rating && comment) {
                            dispatch(editReviewOff())
                            await editReview()
                        }
                    }}
                >
                    <div className='form1'>
                        <h2>Edit Your Review</h2>
                        <label>Rating</label>
                        <input
                            placeholder='Rating'
                            value={rating}
                            onChange={e => {
                                setRating(e.target.value)
                                if (e.target.value) {
                                    setRatingError('')
                                } else {
                                    setRatingError('Rating required')
                                }
                            }}
                            required
                        ></input>
                        { ratingError ? <div className='err-modal'>{ratingError}</div> : '' }
                        <label>Comment</label>
                        <input
                            placeholder='Comment'
                            value={comment}
                            onChange={e => {
                                setComment(e.target.value)
                                if (e.target.value) {
                                    setCommentError('')
                                } else {
                                    setCommentError('Comment required')
                                }
                            }}
                            required
                        ></input>
                        { commentError ? <div className='err-modal'>{commentError}</div> : '' }
                    </div>
                    <div className='deleet-container'>
                        <div className='delete'
                            onClick={handleDelete}>
                            Delete <i className='fas fa-trash-alt'></i>
                        </div>
                    </div>
                    <div className='listingButton'>
                        <p
                            className='cancel'
                            onClick={e => {
                                dispatch(editReviewOff())
                                setRating('')
                                setComment('')
                            }}
                        >
                            Cancel
                        </p>
                        <button className='submit' disabled={
                            !rating || !comment
                        }>
                            Submit
                        </button>
                    </div>
                </form>
            )}
        </div>
    )
}

export default EditReviewForm
