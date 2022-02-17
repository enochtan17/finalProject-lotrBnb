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
        width: '100%',
    }

    const setListingCenter = (listing) => {
        return ({
            lat: parseFloat(listing?.latitude),
            lng: parseFloat(listing?.longitude)
        })
    }

    return (
        <>
            { listing ? ( <LoadScript
                googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
            >
                <GoogleMap
                    mapContainerStyle={mapStyles}
                    zoom={9}
                    center={setListingCenter(listing)}
                    mapTypeId='hybrid'
                    labels='true'
                >
                <Marker
                    position={setListingCenter(listing)}
                />
                </GoogleMap>
            </LoadScript> ) : null }
        </>
    )
}

export default MapOne
