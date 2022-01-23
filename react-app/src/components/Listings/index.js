import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import NewListingButton from '../NewListingButton'

import { getAllListings } from '../../store/listings'

function Listings() {
    const userState = useSelector(state => state.session.user)
    const listings = useSelector(state => state.listingReducer)

    const dispatch = useDispatch()
    const hist = useNavigate()

    // state variables here later

    useEffect(() => {
        if (!userState) return hist('/NotFound')
    }, [])

    useEffect(() => {
        dispatch(getAllListings())
    }, [dispatch])


    return (
        <>
            <h3>Listings</h3>
            <NewListingButton />
            {listings ? listings.map(listing => {
                return (
                    <div
                        className='listingData'
                        id={listing.id}
                        key={listing.id}
                    >
                        <h3>{listing?.name}</h3>
                        <p>{listing?.description}</p>
                        <p>{listing?.address}</p>
                        <p>{listing?.city}</p>
                        <p>{listing?.country}</p>
                        <p>{listing?.price}</p>
                        <img
                            src={listing.image_url}
                        ></img>
                    </div>
                )
            }) : null }
        </>
    )
}

export default Listings
