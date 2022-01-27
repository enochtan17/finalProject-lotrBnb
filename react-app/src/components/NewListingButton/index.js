import { useDispatch } from 'react-redux'
import { addListingOn } from '../../store/showAddListingForm'
import './newListingButton.css'

function NewListingButton() {
    const dispatch = useDispatch()

    return (
        <div className='add-listing'>
            <button
                onClick={e => {
                    e.stopPropagation()
                    dispatch(addListingOn())
                }}
            >
                <i className="fas fa-plus"></i> Host your home!
            </button>
        </div>
    )
}

export default NewListingButton
