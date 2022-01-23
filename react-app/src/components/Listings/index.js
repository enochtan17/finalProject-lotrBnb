import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { removeListing } from '../../store/listings'

import NewListingButton from '../NewListingButton'

import { getAllListings } from '../../store/listings'

function Listings() {
    // const userState = useSelector(state => state.session.user)
    const listings = useSelector(state => state.listingReducer)

    const dispatch = useDispatch()
    const hist = useNavigate()

    // useEffect(() => {
    //     if (!userState) return navigate('/NotFound')
    // }, [])

    useEffect(() => {
        dispatch(getAllListings())
    }, [dispatch])

    // const handleDelete = async e => {
    //     e.preventDefault()
    //     e.stopPropagation()
    //     await dispatch(removeListing(3))
    //     navigate('/')
    // }

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
                        onClick={() => {
                            hist(`/listings/${listing.id}`)
                        }}
                    >
                        <h3>{listing?.name}</h3>
                        <p>{listing?.description}</p>
                        <p>{listing?.address}</p>
                        <p>{listing?.city}</p>
                        <p>{listing?.country}</p>
                        <p>{listing?.price}</p>
                        <img
                            src={listing.image_url}
                            alt='img not found'
                        ></img>
                        {/* <div
                            className="delete"
                            id={listing.id}
                            onClick={handleDelete}
                        >
                            Delete <i className="fas fa-trash-alt"></i>
                        </div> */}
                    </div>
                )
            }) : null }
        </>
    )
}

export default Listings
