import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addListingOff } from '../../store/showAddListingForm'
import { addNewListing } from '../../store/listings'
import './newListingForm.css'

function NewListingForm() {
    const dispatch = useDispatch()
    const showForm = useSelector(state => state.addListingFormReducer)
    const classes = 'listingForm addform fade'

    const [listingName, setListingName] = useState('')
    const [description, setDescription] = useState('')
    const [capacity, setCapacity] = useState('')
    const [bedrooms, setBedrooms] = useState('')
    const [beds, setBeds] = useState('')
    const [baths, setBaths] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [price, setPrice] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const createListing = async e => {
        await dispatch(addNewListing(
            listingName,
            description,
            capacity,
            bedrooms,
            beds,
            baths,
            address,
            city,
            country,
            latitude,
            longitude,
            price,
            imageUrl
        ))
    }

    const [nameError, setNameError] = useState('')
    const [descriptionError, setDescriptionError] = useState('')
    const [capacityError, setCapacityError] = useState('')
    const [bedroomError, setBedroomError] = useState('')
    const [bedError, setBedError] = useState('')
    const [bathError, setBathError] = useState('')
    const [addressError, setAddressError] = useState('')
    const [cityError, setCityError] = useState('')
    const [countryError, setCountryError] = useState('')
    const [latitudeError, setLatitudeError] = useState('')
    const [longitudeError, setLongitudeError] = useState('')
    const [priceError, setPriceError] = useState('')
    const [imageUrlError, setImageUrlError] = useState('')

    const initNameError = () => {
        setNameError('Name required')
    }
    const initDescriptionError = () => {
        setDescriptionError('Description required')
    }
    const initCapacityError = () => {
        setCapacityError('Capacity must be valid number')
    }
    const initBedroomError = () => {
        setBedroomError('Bedrooms must be valid number')
    }
    const initBedError = () => {
        setBedError('Beds must be valid number')
    }
    const initBathError = () => {
        setBathError('Baths must be valid number')
    }
    const initAddressError = () => {
        setAddressError('Address required')
    }
    const initCityError = () => {
        setCityError('City required')
    }
    const initCountryError = () => {
        setCountryError('Country required')
    }
    const initLatitudeError = () => {
        setLatitudeError('Latitude must be valid number')
    }
    const initLongitudeError = () => {
        setLongitudeError('Longitude must be valid number')
    }
    const initPriceError = () => {
        setPriceError('Price must be valid number')
    }
    const initImageUrlError = () => {
        setImageUrlError('Image URL required')
    }

    return (
        <div className='modal-div'>
            { showForm && (
                <form
                    className={classes}
                    onSubmit={
                        async(e) => {
                        e.preventDefault()
                        await createListing()
                        dispatch(addListingOff())
                        setListingName('')
                        setDescription('')
                        setCapacity('')
                        setBedrooms('')
                        setBeds('')
                        setBaths('')
                        setAddress('')
                        setCity('')
                        setCountry('')
                        setLatitude('')
                        setLongitude('')
                        setPrice('')
                        setImageUrl('')
                    }
                }
                >
                    <div className='form1'>
                        <h2>Create New Listing</h2>
                        <label>Listing Name</label>
                        <input
                            placeholder='Listing Name'
                            value={listingName}
                            onClick={initNameError}
                            onChange={e => {
                                setListingName(e.target.value)
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
                            }}
                            required
                        ></input>
                        { descriptionError ? <div className='err-modal'>{descriptionError}</div> : '' }
                        <label>Capacity</label>
                        <input
                            placeholder='Capacity'
                            value={capacity}
                            onClick={initCapacityError}
                            onChange={e => {
                                setCapacity(e.target.value)
                            }}
                            required
                        ></input>
                        { capacityError ? <div className='err-modal'>{capacityError}</div> : '' }
                        <label>Bedrooms</label>
                        <input
                            placeholder='Bedrooms'
                            value={bedrooms}
                            onClick={initBedroomError}
                            onChange={e => {
                                setBedrooms(e.target.value)
                            }}
                            required
                        ></input>
                        { bedroomError ? <div className='err-modal'>{bedroomError}</div> : '' }
                        <label>Beds</label>
                        <input
                            placeholder='Beds'
                            value={beds}
                            onClick={initBedError}
                            onChange={e => {
                                setBeds(e.target.value)
                            }}
                            required
                        ></input>
                        { bedError ? <div className='err-modal'>{bedError}</div> : '' }
                        <label>Baths</label>
                        <input
                            placeholder='Baths'
                            value={baths}
                            onClick={initBathError}
                            onChange={e => {
                                setBaths(e.target.value)
                            }}
                            required
                        ></input>
                        { bathError ? <div className='err-modal'>{bathError}</div> : '' }
                        <label>Address</label>
                        <input
                            placeholder='Address'
                            value={address}
                            onClick={initAddressError}
                            onChange={e => {
                                setAddress(e.target.value)
                            }}
                            required
                        ></input>
                        { addressError ? <div className='err-modal'>{addressError}</div> : '' }
                        <label>City</label>
                        <input
                            placeholder='City'
                            value={city}
                            onClick={initCityError}
                            onChange={e => {
                                setCity(e.target.value)
                            }}
                            required
                        ></input>
                        { cityError ? <div className='err-modal'>{cityError}</div> : '' }
                        <label>Country</label>
                        <input
                            placeholder='Country'
                            value={country}
                            onClick={initCountryError}
                            onChange={e => {
                                setCountry(e.target.value)
                            }}
                            required
                        ></input>
                        { countryError ? <div className='err-modal'>{countryError}</div> : '' }
                        <label>Latitude</label>
                        <input
                            placeholder='Latitude'
                            value={latitude}
                            onClick={initLatitudeError}
                            onChange={e => {
                                setLatitude(e.target.value)
                            }}
                            required
                        ></input>
                        { latitudeError ? <div className='err-modal'>{latitudeError}</div> : '' }
                        <label>Longitude</label>
                        <input
                            placeholder='Longitude'
                            value={longitude}
                            onClick={initLongitudeError}
                            onChange={e => {
                                setLongitude(e.target.value)
                            }}
                            required
                        ></input>
                        { longitudeError ? <div className='err-modal'>{longitudeError}</div> : '' }
                        <label>Price</label>
                        <input
                            placeholder='Price'
                            value={price}
                            onClick={initPriceError}
                            onChange={e => {
                                setPrice(e.target.value)
                            }}
                            required
                        ></input>
                        { priceError ? <div className='err-modal'>{priceError}</div> : '' }
                        <label>Image URL</label>
                        <input
                            placeholder='Image URL'
                            value={imageUrl}
                            onClick={initImageUrlError}
                            onChange={e => {
                                setImageUrl(e.target.value)
                            }}
                            required
                        ></input>
                        { imageUrlError ? <div className='err-modal'>{imageUrlError}</div> : '' }
                    </div>
                    <div className='listingButton'>
                        <p
                            className='cancel'
                            onClick={e => {
                                dispatch(addListingOff())
                                setListingName('')
                                setDescription('')
                                setCapacity('')
                                setBedrooms('')
                                setBeds('')
                                setBaths('')
                                setAddress('')
                                setCity('')
                                setCountry('')
                                setLatitude('')
                                setLongitude('')
                                setPrice('')
                                setImageUrl('')
                            }}
                        >
                            Cancel
                        </p>
                        <button
                            className='submit'
                            disabled={!listingName || !description ||
                                !capacity || !bedrooms || !beds || !baths ||
                                !address || !city || !country ||
                                !latitude || !longitude ||
                                !price || !imageUrl}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            )}
        </div>
    )
}

export default NewListingForm
