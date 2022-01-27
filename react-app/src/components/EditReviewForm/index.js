import React, { useState } from 'react'
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
                            onChange={e => {
                                setRating(e.target.value)
                            }}
                            required
                        ></input>
                        <label>Comment</label>
                        <input
                            placeholder='Comment'
                            value={comment}
                            onChange={e => {
                                setComment(e.target.value)
                            }}
                            required
                        ></input>
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
