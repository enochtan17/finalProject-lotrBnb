import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

// import components here later

import { getAllListings } from '../../store/listings'

function Listings() {
    const userState = useSelector(state => state.session.user)
    const listings = useSelector(state => state.listingReducer.listings)
    const testState = useSelector(state => state)
    console.log('listing state....', listings)
    console.log('testState...', testState)

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
            {listings ? listings.map(e => {
                return (
                    <div className='listingData' key={e.id}>
                        <div>
                            <h3>{e?.name}</h3>
                            <p>{e?.description}</p>
                            <p>{e?.address}</p>
                            <p>{e?.city}</p>
                            <p>{e?.country}</p>
                            <p>{e?.price}</p>
                            <img
                                src={e.image_url}
                            ></img>
                        </div>
                    </div>
                )
            }) : null }
        </>
    )
}

export default Listings
