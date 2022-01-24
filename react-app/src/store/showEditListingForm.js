const OFF = 'editListing/OFF'
const ON = 'editListing/ON'

export const editListingOff = () => ({
    type: OFF
})

export const editListingOn = () => ({
    type: ON
})

const editListingFormReducer = (state = false, action) => {
    switch(action.type) {
        case OFF:
            return false
        case ON:
            return true
        default:
            return false
    }
}

export default editListingFormReducer
