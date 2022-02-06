import React, { useEffect } from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getAllListings } from '../../store/listings'
import './mapAll.css'

function MapAll() {
    const dispatch = useDispatch()
    const listings = useSelector(state => state.listingReducer)
    // listings = array of objects

    useEffect(() => {
        dispatch(getAllListings())
    }, [dispatch])

    const mapStyles = {
        height: '800px',
        width: '1000px',
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
                { listings ? listings.map(listing => {
                    return (
                        <Marker
                            key={listing.id}
                            position={setListingMarkerCoords(listing)}
                        />
                    )
                }) : null }
                </GoogleMap>
            </LoadScript>
        </div>
    )
}

export default MapAll

{/* {selected?.coordinate && (
                <InfoWindow
                    position={selected.coordinate}
                    clickable={true}
                    onCloseClick={() => setSelected({})}
                >
                    <Link to={`/profiles/${name?.id}`}>
                    <div className="marker-info">
                        {name?.name}
                        <img src={name?.imageUrl} alt="artist-pic" className="artist-img"/>
                    </div>
                    </Link>
                </InfoWindow>
                )} */}
