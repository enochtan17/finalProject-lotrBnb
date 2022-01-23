import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getListings } from '../../store/listings'
import { getListing } from '../../store/singlelisting'

function SingleListing() {
    const listing = useSelector(state => state.singleListingReducer)
    const user = useSelector(state => state.session.user)
    const dispatch = useDispatch()
    const hist = useNavigate()
    const { id } = useParams()

    const [isOwner, setIsOwner] = useState(false)

    useEffect(() => {
        console.log('userId....', user.id)
        console.log('ownerId....', listing.owner_id)
        console.log('singleListingReducer', listing)
        if (user.id === listing.owner_id) {
            setIsOwner(true)
        } else {
            setIsOwner(false)
        }
    }, [listing])

    useEffect(() => {
        dispatch(getListing(id))
    }, [dispatch])

    const backButton = e => {
        e.preventDefault()
        hist('/listings')
    }

    const editListing = e => {
        e.preventDefault()
    }

    return (
        <>
            <h3>{listing.name}</h3>
            {/* <NewListingButton /> */}
            <div className="backbuttoncontainer">
                <button className="backbutton" onClick={backButton}>
                    <i className="fas fa-arrow-left"></i> Back
                </button>
            </div>
            { isOwner && (
                <div className='ownerbuttoncontainer'>
                    <div className='editbuttoncontainer'>
                        <button className='editbutton' onClick={editListing}>
                            <i className='fas fa-edit'></i> Edit
                        </button>
                    </div>
                    <div
                        className="delete"
                        id={listing.id}
                        // onClick={handleDelete}
                        >
                        <button>
                            <i className="fas fa-trash-alt"></i> Delete
                        </button>
                    </div>
                </div> )}
            {listing && (
                <div
                    className='oneListingPage'
                    id={listing.id}
                >
                    <p>{listing.description}</p>
                    <p>{listing.address}</p>
                    <p>{listing.city}</p>
                    <p>{listing.country}</p>
                    <p>{listing.price}</p>
                    <img
                        src={listing.image_url}
                        alt=''
                    ></img>
                </div>
            )}
        </>
    )
}

export default SingleListing
