import React from "react"
import './forbidden.css'

function Forbidden() {
    return (
        <div className='forbidden-container'>
            <h1>You have no authority to enter the<br/>
                Kingdom of Gondor, <br/>
                <a href="/">go back from whence you came!</a></h1>
        </div>
    )
}

export default Forbidden
