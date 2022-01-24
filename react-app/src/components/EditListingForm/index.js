import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { editListingOff } from '../../store/showEditListingForm'
import { editListingThunk } from '../../store/singlelisting'
import './editListingForm.css'

function EditListingForm() {
    const dispatch = useDispatch()
    const showForm = useSelector(state => state.editListingFormReducer)
    const { id } = useParams()

    const [listingName, setListingName] = useState('')
    const [description, setDescription] = useState('')

    const editListing = async e => {
        await dispatch(editListingThunk(
            id,
            listingName,
            description
        ))
    }

    return (
        <>
            { showForm && (
                <div
                    className='blackout'
                    onClick={e => {
                        dispatch(editListingOff())
                    }}
                ></div>
            )}
            { showForm && (
                <form
                    className='listingForm'
                    onSubmit={async(e) => {
                        e.preventDefault()
                        if (listingName && description) {
                            dispatch(editListingOff())
                            await editListing()
                            setListingName('')
                            setDescription('')
                        }
                    }}
                >
                    <div className='form1'>
                        <h2>Edit Your Listing</h2>
                        <label>Listing Name</label>
                        <input
                            placeholder='Listing Name'
                            value={listingName}
                            onChange={e => {
                                setListingName(e.target.value)
                            }}
                            required
                        ></input>
                        <label>Description</label>
                        <input
                            placeholder='Description'
                            value={description}
                            onChange={e => {
                                setDescription(e.target.value)
                            }}
                            required
                        ></input>
                    </div>
                    <div className='listingButton'>
                        <p
                            className='cancel'
                            onClick={e => {
                                dispatch(editListingOff())
                                setListingName('')
                                setDescription('')
                            }}
                        >
                            Cancel
                        </p>
                        <button className='submit' disabled={
                            !listingName || !description
                        }>
                            Submit
                        </button>
                    </div>
                </form>
            )}
        </>
    )
}

export default EditListingForm
