import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getListing } from '../../store/singlelisting'
import { editListingOn } from '../../store/showEditListingForm'
import NavBar from '../NavBar'
import EditListingForm from '../EditListingForm'
import Reviews from '../Reviews'
import './singleListing.css'

function SingleListing() {
    const listing = useSelector(state => state.singleListingReducer)
    const user = useSelector(state => state.session.user)
    const allUsers = useSelector(state => state.usersReducer.users)
    const dispatch = useDispatch()
    const hist = useNavigate()
    const { id } = useParams()

    const [isOwner, setIsOwner] = useState(false)

    useEffect(() => {
        if (!user) return hist("/forbidden")
    }, [user, hist])

    useEffect(() => {
        if (user?.id === listing.owner_id) {
            setIsOwner(true)
        } else {
            setIsOwner(false)
        }
    }, [listing, user?.id])

    useEffect(() => {
        if (user) dispatch(getListing(id))
    }, [dispatch, id, user])

    const backButton = e => {
        e.preventDefault()
        hist('/listings')
    }

    const editListing = e => {
        e.preventDefault()
        e.stopPropagation()
        dispatch(editListingOn())
    }

    const findOwnerUsername = ownerId => {
        let username
        for (let i = 0; i < allUsers?.length; i++) {
            let userId = allUsers[i].id
            if (userId === ownerId) {
                username = allUsers[i].username
                return username
            }
        }
        return 'Failed to fetch Username'
    }

    return (
        <>
            {/* <NavBar /> */}
            <EditListingForm />
            <div className='listing-header'>
                <div className="backbuttoncontainer">
                    <button className="backbutton" onClick={backButton}>
                        <i className="fas fa-arrow-left"></i> Back
                    </button>
                </div>
                <div className='title-address'>
                    <h1>{listing.name}</h1>
                    <span>{listing.address}, </span>
                    <span>{listing.city}, </span>
                    <span>{listing.country}</span>
                </div>
                { isOwner ? (
                    <div className='ownerbuttoncontainer'>
                        <div className='editbuttoncontainer'>
                            <button className='editbutton' onClick={editListing}>
                                <i className='fas fa-edit'></i> Edit
                            </button>
                        </div>
                    </div>
                ) : <div></div>}
            </div>
            <hr className='below-listing-header'></hr>
            <div className='one-listing-body'>
                {listing && (
                    <div
                    className='one-listing-left'
                    id={listing.id}
                    >
                        <img
                            className='listing-pic'
                            src={listing.image_url}
                            alt=''
                        ></img>
                        <div className='one-listing-title-info'>
                            <h3>Hosted by { findOwnerUsername(listing.owner_id) }</h3>
                            <div className='listing-deets'>
                                <span>{listing?.capacity} guests • </span>
                                <span>{listing?.bedrooms} bedrooms • </span>
                                <span>{listing?.beds} beds • </span>
                                <span>{listing?.baths} baths</span>
                            </div>
                            <hr className='hr-title-info' ></hr>
                        </div>
                        <p>{listing.description}</p>
                        <p>${listing.price} / night</p>
                    </div>
                )}
                <div className='google-maps-div'>
                </div>
            </div>
            <Reviews />
        </>
    )
}

export default SingleListing
