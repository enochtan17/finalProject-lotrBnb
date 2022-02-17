import React, { useEffect, useState } from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api'
import { useSelector, useDispatch } from 'react-redux'
import { getAllListings } from '../../store/listings'
import './mapAll.css'

function MapAll() {
    const dispatch = useDispatch()
    const listings = useSelector(state => state.listingReducer)
    // listings = array of objects

    const [clickedMarkerListing, setClickedMarkerListing] = useState({})
    // const [infoWindowOpen, setInfoWindowOpen] = useState(false)

    useEffect(() => {
        // console.log('clickMark', clickedMarkerListing)
    }, [clickedMarkerListing])

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
                { listings ? listings.map(listing => {
                    return (
                        <Marker
                            key={listing.id}
                            position={setListingMarkerCoords(listing)}
                            onClick={() => {
                                setClickedMarkerListing(listing)
                            }}
                        />
                    )
                }) : null }
                </GoogleMap>
            </LoadScript>
        </div>
    )
}

export default MapAll

// { clickedMarkerListing ?
//     <InfoWindow
//         position={setListingMarkerCoords(clickedMarkerListing)}
//         onCloseClick={() => setClickedMarkerListing({})}
//     >
//         <h1>My info window here</h1>
//         {/* <div>
//             {clickedMarkerListing.name}
//             <img src={clickedMarkerListing.image_url} alt='' />
//         </div> */}
//     </InfoWindow> : null
// }

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
