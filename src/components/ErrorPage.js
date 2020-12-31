import React from 'react';
import './styles/PageError.css';

function ErrorPage(props) {
    return (
        <div className="PageError">
            <h1>
                😭😭😭😭{props.error.message}
            </h1>
        </div>
    )
}

export default ErrorPage;