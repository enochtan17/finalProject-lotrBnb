const OFF = 'editReview/OFF'
const ON = 'editReview/ON'

export const editReviewOff = () => ({
    type: OFF
})

export const editReviewOn = () => ({
    type: ON
})

const editReviewFormReducer = (state = false, action) => {
    switch(action.type) {
        case OFF:
            return false
        case ON:
            return true
        default:
            return false
    }
}

export default editReviewFormReducer
