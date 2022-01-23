import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addListingOff } from '../../store/showAddListingForm'
import { addNewListing } from '../../store/listings'
import './newListingForm.css'

function NewListingForm() {
    const dispatch = useDispatch()
    const showForm = useSelector(state => state.addListingFormReducer)

    const [listingName, setListingName] = useState('')
    const [description, setDescription] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [latitude, setLatitude] = useState(null)
    const [longitude, setLongitude] = useState(null)
    const [price, setPrice] = useState(null)
    const [imageUrl, setImageUrl] = useState('')

    const createListing = async e => {
        await dispatch(addNewListing(
            listingName,
            description,
            address,
            city,
            country,
            latitude,
            longitude,
            price,
            imageUrl
        ))
    }

    return (
        <>
            { showForm && (
                <div
                    className='blackout'
                    onClick={e => {
                        dispatch(addListingOff())
                    }}
                ></div>
            )}
            { showForm && (
                <form
                    className='listingForm'
                    onSubmit={async(e) => {
                        e.preventDefault()
                        if (listingName && description &&
                            address && city && country &&
                            latitude && longitude &&
                            price && imageUrl) {
                            dispatch(addListingOff())
                            await createListing()
                            setListingName('')
                            setDescription('')
                            setAddress('')
                            setCity('')
                            setCountry('')
                            setLatitude(0)
                            setLongitude(0)
                            setPrice(0)
                            setImageUrl('')
                        }
                    }}
                >
                    <div className='form1'>
                        <h2>Create New Listing</h2>
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
                        <label>Address</label>
                        <input
                            placeholder='Address'
                            value={address}
                            onChange={e => {
                                setAddress(e.target.value)
                            }}
                            required
                        ></input>
                        <label>City</label>
                        <input
                            placeholder='City'
                            value={city}
                            onChange={e => {
                                setCity(e.target.value)
                            }}
                            required
                        ></input>
                        <label>Country</label>
                        <input
                            placeholder='Country'
                            value={country}
                            onChange={e => {
                                setCountry(e.target.value)
                            }}
                            required
                        ></input>
                        <label>Latitude</label>
                        <input
                            placeholder='Latitude'
                            value={latitude}
                            onChange={e => {
                                setLatitude(e.target.value)
                            }}
                            required
                        ></input>
                        <label>Longitude</label>
                        <input
                            placeholder='Longitude'
                            value={longitude}
                            onChange={e => {
                                setLongitude(e.target.value)
                            }}
                            required
                        ></input>
                        <label>Price</label>
                        <input
                            placeholder='Price'
                            value={price}
                            onChange={e => {
                                setPrice(e.target.value)
                            }}
                            required
                        ></input>
                        <label>Image URL</label>
                        <input
                            placeholder='Image URL'
                            value={imageUrl}
                            onChange={e => {
                                setImageUrl(e.target.value)
                            }}
                            required
                        ></input>
                    </div>
                    <div className='listingButton'>
                        <p
                            className='cancel'
                            onClick={e => {
                                dispatch(addListingOff())
                                setListingName('')
                                setDescription('')
                                setAddress('')
                                setCity('')
                                setCountry('')
                                setLatitude(0)
                                setLongitude(0)
                                setPrice(0)
                                setImageUrl('')
                            }}
                        >
                            Cancel
                        </p>
                        <button
                            className='submit'
                            disabled={!listingName || !description ||
                                !address || !city || !country ||
                                !latitude || !longitude ||
                                !price || !imageUrl}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            )}
        </>
    )
}

export default NewListingForm
