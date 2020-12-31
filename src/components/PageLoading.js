import React from 'react';
import './styles/PageLoading.css';

function PageLoading() {
    return (
        <div className="PageLoading">
            <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default PageLoading;