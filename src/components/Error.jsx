import React from 'react'
import { useHistory } from 'react-router-dom'
import classes from "../styles/error.module.css"
const Error = () => {
    const history = useHistory();
    return (
        <div className={classes.errorbox}>
            <div>
                <i class="fas fa-exclamation-triangle"></i>
                <h2> Error 404</h2>
            </div>
            <h4>Page not found</h4>
            <button onClick={() => history.goBack()}>Go Back</button>
        </div>
    )
}

export default Error
