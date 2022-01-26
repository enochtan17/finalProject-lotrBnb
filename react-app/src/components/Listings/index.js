import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAllListings } from '../../store/listings'
import NewListingButton from '../NewListingButton'
import NewListingForm from '../NewListingForm'


function Listings() {
    const userState = useSelector(state => state.session.user)
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
            <h2 className='bilbo-quote'>It's a dangerous business, {userState.username}, going out of your door. You step into the Road, and if you don't keep your feet, there is no telling where you might be swept off to.</h2>
            <h3>Listings</h3>
            <NewListingButton />
            <NewListingForm />
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
