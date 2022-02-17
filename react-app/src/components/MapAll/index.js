import React, { useEffect, useState } from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAllListings } from '../../store/listings'
import './mapAll.css'

function MapAll() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const listings = useSelector(state => state.listingReducer)
    // listings = array of objects

    const [markerListing, setMarkerListing] = useState({})

    const onSelect = listing => {
        setMarkerListing(listing)
    }

    useEffect(() => {
        dispatch(getAllListings())
    }, [dispatch])

    const mapStyles = {
        height: '800px',
        width: '100%',
    }

    const viewCenter = {
        lat: -41.16, lng: 173.99
    }

    const setListingMarkerCoords = (listing) => {
        return ({
            lat: listing?.latitude,
            lng: listing?.longitude,
        })
    }

    return (
        <div id='map'>
            <LoadScript
                googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
            >
                <GoogleMap
                    mapContainerStyle={mapStyles}
                    zoom={5}
                    center={viewCenter}
                    labels='true'
                >
                { listings?.map((listing) => {
                    return (
                        <Marker
                            key={listing.id}
                            position={setListingMarkerCoords(listing)}
                            onClick={() => onSelect(listing)}
                        />
                    )
                })}
                { markerListing?.latitude && (
                    <InfoWindow
                        position={
                            {
                                lat: (markerListing?.latitude + 0.3),
                                lng: markerListing?.longitude
                            }
                        }
                        clickable={true}
                        onCloseClick={() => setMarkerListing({})}
                    >
                        <div className="info-window">
                            <p
                                className='info-name'
                                onClick={() => {
                                    navigate(`/listings/${markerListing.id}`)
                                }}
                            >
                                {markerListing.name}
                            </p>
                            <img
                                src={markerListing.image_url}
                                alt='listing image'
                                onClick={() => {
                                    navigate(`/listings/${markerListing.id}`)
                                }}
                            />
                        </div>
                    </InfoWindow>
                )}
                </GoogleMap>
            </LoadScript>
        </div>
    )
}

export default MapAll
