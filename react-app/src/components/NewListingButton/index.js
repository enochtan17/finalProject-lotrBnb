import { useDispatch } from 'react-redux'
import { addListingOn } from '../../store/showAddListingForm'
import './newListingButton.css'

function NewListingButton() {
    const dispatch = useDispatch()

    return (
        <div className='addListing'>
            <button
                onClick={e => {
                    e.stopPropagation()
                    dispatch(addListingOn())
                }}
            >
                <div className="is"><i className="fas fa-plus"></i></div>
            </button>
        </div>
    )
}

export default NewListingButton
