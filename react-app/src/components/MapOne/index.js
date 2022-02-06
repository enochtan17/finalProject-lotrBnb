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
        width: '600px',
      }

      const defaultCenter = {
        lat: listing?.latitude,  lng: listing?.longitude
      }

    return (
        <>
            <LoadScript
                googleMapsApiKey={'AIzaSyCF3Sc9rl-2z2au_CoDffgHH-fuPPYiMds'}
            >
                <GoogleMap
                    mapContainerStyle={mapStyles}
                    zoom={10}
                    center={defaultCenter}
                >
                <Marker
                    position={defaultCenter}
                />
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
                </GoogleMap>
            </LoadScript>
        </>
    )
}

export default MapOne
