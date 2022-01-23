import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import Listings from '../Listings'
import NewListingForm from '../NewListingForm'

const Splash = () => {
    const userState = useSelector(state => state.session.user)

    return (
        <>
            <h1>Splash Home Page</h1>
            <NewListingForm />
            { userState && <Listings />}
        </>
    )
}

export default Splash
