import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeReview, updateReview } from '../../store/reviews'
import { editReviewOff } from '../../store/showEditReviewForm'
import './editReviewForm.css'
import '../NewListingForm/newListingForm.css'

function EditReviewForm({ reviewId }) {
    const dispatch = useDispatch()
    const showForm = useSelector(state => state.editReviewFormReducer)

    const [rating, setRating] = useState('')
    const [comment, setComment] = useState('')

    const [ratingError, setRatingError] = useState('')
    const [commentError, setCommentError] = useState('')

    useEffect(() => {
        setRating('')
        setComment('')

        setRatingError('')
        setCommentError('')
    }, [showForm])

    const initRatingError = () => {
        setRatingError('Rating required')
    }
    const initCommentError = () => {
        setCommentError('Comment required')
    }

    const editReview = async e => {
        await dispatch(updateReview(
            reviewId,
            rating,
            comment
        ))
    }

    const handleDelete = async e => {
        e.preventDefault()
        e.stopPropagation()
        await dispatch(removeReview(reviewId))
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
                            setRating('')
                            setComment('')
                        }
                    }}
                >
                    <div className='form1'>
                        <h2>Edit Your Review</h2>
                        <label>Rating</label>
                        <input
                            placeholder='Rating'
                            value={rating}
                            onClick={initRatingError}
                            onChange={e => {
                                setRating(e.target.value)
                                if (e.target.value) {
                                    setRatingError('')
                                } else {
                                    initRatingError()
                                }
                            }}
                            required
                        ></input>
                        { ratingError ? <div className='err-modal'>{ratingError}</div> : '' }
                        <label>Comment</label>
                        <input
                            placeholder='Comment'
                            value={comment}
                            onClick={initCommentError}
                            onChange={e => {
                                setComment(e.target.value)
                                if (e.target.value) {
                                    setCommentError('')
                                } else {
                                    initCommentError()
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
