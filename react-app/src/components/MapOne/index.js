import React, { useEffect } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getListing } from '../../store/singlelisting'
import './mapOne.css'

function MapOne() {
    const listing = useSelector(state => state.singleListingReducer)
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        dispatch(getListing(id))
    }, [dispatch, id])

    const mapStyles = {
        height: '600px',
        width: '850px',
    }

    const listingCenter = {
        lat: listing?.latitude,  lng: listing?.longitude
    }

    return (
        <>
            <LoadScript
                googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
            >
                <GoogleMap
                    mapContainerStyle={mapStyles}
                    zoom={9}
                    center={listingCenter}
                    mapTypeId='hybrid'
                    labels='true'
                >
                <Marker
                    position={listingCenter}
                />
                </GoogleMap>
            </LoadScript>
        </>
    )
}

export default MapOne
