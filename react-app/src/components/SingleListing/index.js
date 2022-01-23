import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getListings } from '../../store/listings'
import { getListing } from '../../store/singlelisting'

function SingleListing() {
    const listing = useSelector(state => state.singleListingReducer)
    console.log('singleListingReducer', listing)
    const dispatch = useDispatch()
    const hist = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        dispatch(getListing(id))
    }, [dispatch])

    const backButton = e => {
        e.preventDefault()
        hist('/listings')
    }

    return (
        <>
            <h3>{listing.name}</h3>
            {/* <NewListingButton /> */}
            <div className="backbuttoncontainer">
                <button className="backbutton" onClick={backButton}>
                    <i className="fas fa-arrow-left"></i>
                </button>
            </div>
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
                    <div
                        className="delete"
                        id={listing.id}
                        // onClick={handleDelete}
                    >
                        Delete <i className="fas fa-trash-alt"></i>
                    </div>
                </div>
            )}
        </>
    )
}

export default SingleListing
