import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAllListings } from '../../store/listings'
import NewListingButton from '../NewListingButton'
import NewListingForm from '../NewListingForm'
import './listings.css'

function Listings() {
    const userState = useSelector(state => state.session.user)
    const listings = useSelector(state => state.listingReducer)

    const dispatch = useDispatch()
    const hist = useNavigate()

    useEffect(() => {
        dispatch(getAllListings())
    }, [dispatch])

    return (
        <>
            <h2 className='bilbo-quote'>It's a dangerous business, {userState.username}, going out of your door. You step into the Road, and if you don't keep your feet, <br/> there is no telling where you might be swept off to.</h2>
            <hr className='listings-hr'></hr>
            <h3>Listings</h3>
            <NewListingButton />
            <NewListingForm />
            <div className='listing-container'>
                {listings ? listings.map(listing => {
                    return (
                        <div className='each-listing-box'>
                            <hr></hr>
                            <div
                                className='listing-data'
                                id={listing.id}
                                key={listing.id}
                                onClick={() => {
                                    hist(`/listings/${listing.id}`)
                                }}
                            >
                                <div className='listing-left'>
                                    <img
                                        src={listing.image_url}
                                        alt='img not found'
                                    ></img>
                                </div>
                                <div className='listing-right'>
                                    <h3>{listing?.name}</h3>
                                    <hr className='hr-under' ></hr>
                                    <div className='listing-deets'>
                                        <p>{listing?.capacity} guests</p>
                                        <p>{listing?.bedrooms} bedrooms</p>
                                        <p>{listing?.beds} beds</p>
                                        <p>{listing?.baths} baths</p>
                                    </div>
                                    <hr className='hr-under' ></hr>
                                    <p>${listing?.price} / night</p>
                                </div>
                            </div>
                        </div>
                    )
                }) : null }
            </div>
        </>
    )
}

export default Listings
