import React, { useEffect, useState } from 'react'
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

    useEffect(() => {
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

        setNameError('')
        setDescriptionError('')
        setCapacityError('')
        setBedroomError('')
        setBedError('')
        setBathError('')
        setAddressError('')
        setCityError('')
        setCountryError('')
        setLatitudeError('')
        setLongitudeError('')
        setPriceError('')
        setImageUrlError('')
    }, [showForm])

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
    const isInt = (val) => {
        return (!isNaN(val) && val !== '')
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
                            onFocus={initNameError}
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
                            onFocus={initDescriptionError}
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
                        <label>Capacity</label>
                        <input
                            placeholder='Capacity'
                            value={capacity}
                            onFocus={initCapacityError}
                            onChange={e => {
                                setCapacity(e.target.value)
                                if (isInt(e.target.value)) {
                                    setCapacityError('')
                                } else {
                                    initCapacityError()
                                }
                            }}
                            required
                        ></input>
                        { capacityError ? <div className='err-modal'>{capacityError}</div> : '' }
                        <label>Bedrooms</label>
                        <input
                            placeholder='Bedrooms'
                            value={bedrooms}
                            onFocus={initBedroomError}
                            onChange={e => {
                                setBedrooms(e.target.value)
                                if (isInt(e.target.value)) {
                                    setBedroomError('')
                                } else {
                                    initBedroomError()
                                }
                            }}
                            required
                        ></input>
                        { bedroomError ? <div className='err-modal'>{bedroomError}</div> : '' }
                        <label>Beds</label>
                        <input
                            placeholder='Beds'
                            value={beds}
                            onFocus={initBedError}
                            onChange={e => {
                                setBeds(e.target.value)
                                if (isInt(e.target.value)) {
                                    setBedError('')
                                } else {
                                    initBedError()
                                }
                            }}
                            required
                        ></input>
                        { bedError ? <div className='err-modal'>{bedError}</div> : '' }
                        <label>Baths</label>
                        <input
                            placeholder='Baths'
                            value={baths}
                            onFocus={initBathError}
                            onChange={e => {
                                setBaths(e.target.value)
                                if (isInt(e.target.value)) {
                                    setBathError('')
                                } else {
                                    initBathError()
                                }
                            }}
                            required
                        ></input>
                        { bathError ? <div className='err-modal'>{bathError}</div> : '' }
                        <label>Address</label>
                        <input
                            placeholder='Address'
                            value={address}
                            onFocus={initAddressError}
                            onChange={e => {
                                setAddress(e.target.value)
                                if (e.target.value) {
                                    setAddressError('')
                                } else {
                                    initAddressError()
                                }
                            }}
                            required
                        ></input>
                        { addressError ? <div className='err-modal'>{addressError}</div> : '' }
                        <label>City</label>
                        <input
                            placeholder='City'
                            value={city}
                            onFocus={initCityError}
                            onChange={e => {
                                setCity(e.target.value)
                                if (e.target.value) {
                                    setCityError('')
                                } else {
                                    initCityError()
                                }
                            }}
                            required
                        ></input>
                        { cityError ? <div className='err-modal'>{cityError}</div> : '' }
                        <label>Country</label>
                        <input
                            placeholder='Country'
                            value={country}
                            onFocus={initCountryError}
                            onChange={e => {
                                setCountry(e.target.value)
                                if (e.target.value) {
                                    setCountryError('')
                                } else {
                                    initCountryError()
                                }
                            }}
                            required
                        ></input>
                        { countryError ? <div className='err-modal'>{countryError}</div> : '' }
                        <label>Latitude</label>
                        <input
                            placeholder='Latitude'
                            value={latitude}
                            onFocus={initLatitudeError}
                            onChange={e => {
                                setLatitude(e.target.value)
                                if (isInt(e.target.value)) {
                                    setLatitudeError('')
                                } else {
                                    initLatitudeError()
                                }
                            }}
                            required
                        ></input>
                        { latitudeError ? <div className='err-modal'>{latitudeError}</div> : '' }
                        <label>Longitude</label>
                        <input
                            placeholder='Longitude'
                            value={longitude}
                            onFocus={initLongitudeError}
                            onChange={e => {
                                setLongitude(e.target.value)
                                if (isInt(e.target.value)) {
                                    setLongitudeError('')
                                } else {
                                    initLongitudeError()
                                }
                            }}
                            required
                        ></input>
                        { longitudeError ? <div className='err-modal'>{longitudeError}</div> : '' }
                        <label>Price</label>
                        <input
                            placeholder='Price'
                            value={price}
                            onFocus={initPriceError}
                            onChange={e => {
                                setPrice(e.target.value)
                                if (isInt(e.target.value)) {
                                    setPriceError('')
                                } else {
                                    initPriceError()
                                }
                            }}
                            required
                        ></input>
                        { priceError ? <div className='err-modal'>{priceError}</div> : '' }
                        <label>Image URL</label>
                        <input
                            placeholder='Image URL'
                            value={imageUrl}
                            onFocus={initImageUrlError}
                            onChange={e => {
                                setImageUrl(e.target.value)
                                if (e.target.value) {
                                    setImageUrlError('')
                                } else {
                                    initImageUrlError()
                                }
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
