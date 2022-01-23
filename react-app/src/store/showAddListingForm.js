import { addListing } from "./listings"

const OFF = "set/OFF"
const ON = "set/ON"

export const addListingOff = () => {
    return{
        type:OFF
    }
}

export const addListingOn = () => {
    return {
        type:ON
    }
}

const addListingFormReducer = (state = false, action) => {
    switch(action.type){
        case OFF:
            return false
        case ON:
            return true
        default:
            return false
    }
}

export default addListingFormReducer
