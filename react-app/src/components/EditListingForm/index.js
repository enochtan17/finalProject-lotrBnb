import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { editListingOff } from '../../store/showEditListingForm'
import { editListingThunk } from '../../store/singlelisting'
import { removeListing } from '../../store/listings'
import './editListingForm.css'
import '../NewListingForm/newListingForm.css'

function EditListingForm() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
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

    const handleDelete = async e => {
        e.preventDefault()
        e.stopPropagation()
        await dispatch(removeListing(id))
        navigate('/listings')
    }

    return (
        <div className='modal-div'>
            { showForm && (
                <form
                    className='listingForm editform'
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
                    <div className='deleet-container'>
                        <div className='delete' id={ id } onClick={handleDelete}>
                            Delete <i className='fas fa-trash-alt'></i>
                        </div>
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
        </div>
    )
}

export default EditListingForm
