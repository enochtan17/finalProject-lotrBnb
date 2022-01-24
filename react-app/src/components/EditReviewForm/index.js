import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { removeReview, updateReview } from '../../store/reviews'
import { editReviewOff } from '../../store/showEditReviewForm'
import './editReviewForm.css'

function EditReviewForm() {
    const dispatch = useDispatch()
    const showForm = useSelector(state => state.editReviewFormReducer)

    const [rating, setRating] = useState('')
    const [comment, setComment] = useState('')

    const editReview = async e => {
        await dispatch(updateReview(
            //reviewId,
            rating,
            comment
        ))
    }

    const handleDelete = async e => {
        e.preventDefault()
        e.stopPropagatino()
        await dispatch(removeReview(
            //reviewId
        ))
    }

    return (
        <>
            { showForm && (
                <div
                    className='blackout'
                    onClick={e => {
                        dispatch(editReviewOff())
                    }}
                ></div>
            )}
            { showForm && (
                <form
                    className='listingForm'
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
                    <div className='listingButton'>
                        <div className='delete'
                            // id={ reviewId }
                            onClick={handleDelete}>
                            Delete <i className='fas fa-trash-alt'></i>
                        </div>
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
        </>
    )
}

export default EditReviewForm
