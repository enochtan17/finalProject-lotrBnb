import React from 'react'
import { useSelector } from 'react-redux'
import Listings from '../Listings'
import NewListingForm from '../NewListingForm'
import OutsideHome from '../OutsideHome'
import './splash.css'

const Splash = () => {
    const userState = useSelector(state => state.session.user)

    return (
        <>
            { !userState && <OutsideHome />}
            <NewListingForm />
            { userState && <Listings />}
        </>
    )
}

export default Splash
