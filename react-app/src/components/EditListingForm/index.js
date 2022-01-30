import React, { useEffect, useState } from 'react'
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
    // const listingObj = useSelector(state => state.singleListingReducer)
    const { id } = useParams()

    const [listingName, setListingName] = useState('')
    const [description, setDescription] = useState('')

    const [nameError, setNameError] = useState('')
    const [descriptionError, setDescriptionError] = useState('')

    useEffect(() => {
        setListingName('')
        setDescription('')

        setNameError('')
        setDescriptionError('')
    }, [showForm])

    const initNameError = () => {
        setNameError('Name required')
    }
    const initDescriptionError = () => {
        setDescriptionError('Description required')
    }

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
                        await editListing()
                        dispatch(editListingOff())
                        setListingName('')
                        setDescription('')
                    }}
                >
                    <div className='form1'>
                        <h2>Edit Your Listing</h2>
                        <label>Listing Name</label>
                        <input
                            placeholder='Listing Name'
                            value={listingName}
                            onClick={initNameError}
                            onChange={e => {
                                setListingName(e.target.value)
                                if (e.target.value) {
                                    setNameError('')
                                } else {
                                    initNameError()
                                }
                            }}
                            required
                            ></input>
                            { nameError ? <div className='err-modal'>{nameError}</div> : '' }
                        <label>Description</label>
                        <input
                            placeholder='Description'
                            value={description}
                            onClick={initDescriptionError}
                            onChange={e => {
                                setDescription(e.target.value)
                                if (e.target.value) {
                                    setDescriptionError('')
                                } else {
                                    initDescriptionError()
                                }
                            }}
                            required
                        ></input>
                        { descriptionError ? <div className='err-modal'>{descriptionError}</div> : '' }
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
